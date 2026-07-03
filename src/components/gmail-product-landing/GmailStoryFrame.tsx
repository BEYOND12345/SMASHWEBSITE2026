import { useEffect, useRef, useState, type RefObject } from 'react';
import type { GmailStoryFrameId } from './gmail-landing-tokens';
import {
  GMAIL_STORY_CARD_HEIGHT,
  GMAIL_STORY_FRAME_LOGICAL,
  GMAIL_STORY_MOBILE_CROP_MAX_WIDTH,
  GMAIL_STORY_WINDOW_CROP,
  GMAIL_STORY_WINDOW_CROP_MOBILE,
} from './gmail-landing-tokens';

const FRAME_ALTS: Record<GmailStoryFrameId, string> = {
  'a1-request-lands': 'Customer enquiry lands in Gmail — SMASH story frame 1',
  'a2-reads-prices': 'SMASH reads and prices the email — story frame 2',
  'a3-quote-done': 'Priced quote ready to reply — story frame 3',
  'b1-request-arrives': 'Tradie parts request arrives at supplier inbox — story frame 1',
  'b2-sku-match': 'SMASH SKU-matches every line — story frame 2',
  'b3-quote-back': 'Quote sent back, synced to Xero — story frame 3',
};

function storyPath(id: GmailStoryFrameId): string {
  const story = id.startsWith('a') ? 'story-a' : 'story-b';
  return `/product/gmail/story-frames/${story}/${id}.html`;
}

function pngPath(id: GmailStoryFrameId): string {
  const story = id.startsWith('a') ? 'story-a' : 'story-b';
  return `/product/gmail/story-frames/${story}/${id}.png`;
}

function useMeasuredWidth(fill: boolean): [RefObject<HTMLDivElement | null>, number] {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(560);

  useEffect(() => {
    if (!fill || !ref.current) return;

    const measure = () => {
      if (ref.current) setWidth(ref.current.getBoundingClientRect().width);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(ref.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [fill]);

  return [ref, width];
}

type Props = {
  frame: GmailStoryFrameId;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  fixedWidth?: number;
  /** Crop to Gmail window only — no navy canvas. */
  crop?: boolean;
};

/** Story frame renderer — full composition or cropped Gmail window. */
export function GmailStoryFrame({
  frame,
  className = '',
  priority = false,
  fill = false,
  fixedWidth,
  crop = false,
}: Props) {
  const [measureRef, measuredWidth] = useMeasuredWidth(fill);
  const [useHtml, setUseHtml] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(storyPath(frame), { method: 'HEAD' })
      .then((res) => {
        if (!cancelled) setUseHtml(res.ok);
      })
      .catch(() => {
        if (!cancelled) setUseHtml(false);
      });
    return () => {
      cancelled = true;
    };
  }, [frame]);

  const logical = GMAIL_STORY_FRAME_LOGICAL;
  const displayWidth = fixedWidth ?? measuredWidth;
  // On phones the email+sidebar split shrinks to ~48% and goes hard to read, so
  // zoom into the SMASH sidebar instead once the card is narrower than the breakpoint.
  const useMobileCrop = crop && displayWidth > 0 && displayWidth < GMAIL_STORY_MOBILE_CROP_MAX_WIDTH;
  const region = !crop
    ? logical
    : useMobileCrop
      ? GMAIL_STORY_WINDOW_CROP_MOBILE[frame]
      : GMAIL_STORY_WINDOW_CROP[frame];
  const scale = displayWidth / region.width;
  const offsetX = crop ? region.x * scale : 0;
  const offsetY = crop ? region.y * scale : 0;
  const radius = crop ? 0 : (logical.radius / logical.width) * displayWidth;

  // Uniform card height for every crop; the window is clipped to its real height so
  // shorter frames pad with white below (never navy, never cut content).
  // Floor (not round) the cropped heights: rounding up by a sub-pixel exposed a hairline
  // of the frame's dark canvas below the window — the "black edge" at the card bottom.
  const cardHeight = crop
    ? Math.floor(GMAIL_STORY_CARD_HEIGHT * scale)
    : Math.round(logical.height * scale);
  const windowClipHeight = crop
    ? Math.floor((region as { windowHeight: number }).windowHeight * scale)
    : cardHeight;

  const media = !useHtml ? (
    <img
      src={pngPath(frame)}
      alt={FRAME_ALTS[frame]}
      className="absolute top-0 left-0 max-w-none pointer-events-none select-none"
      style={{
        width: logical.width * scale,
        height: logical.height * scale,
        transform: `translate(${-offsetX}px, ${-offsetY}px)`,
      }}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  ) : (
    <iframe
      src={`${storyPath(frame)}?v=6`}
      title={FRAME_ALTS[frame]}
      className={`absolute top-0 left-0 border-0 pointer-events-none ${crop ? 'bg-white' : 'bg-[#0F172A]'}`}
      style={{
        width: logical.width,
        height: logical.height,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        marginLeft: -offsetX,
        marginTop: -offsetY,
      }}
      loading={priority ? 'eager' : 'lazy'}
      tabIndex={-1}
    />
  );

  return (
    <div ref={fill ? measureRef : undefined} className={`w-full ${className}`.trim()}>
      <div
        className="relative overflow-hidden w-full bg-white"
        style={{ height: cardHeight, borderRadius: radius }}
      >
        {/* window clipped to its real height — white fills any remainder below */}
        <div
          className="absolute top-0 left-0 w-full overflow-hidden bg-white"
          style={{ height: windowClipHeight }}
        >
          {media}
        </div>
      </div>
    </div>
  );
}
