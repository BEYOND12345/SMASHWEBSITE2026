import { useState } from 'react';

type Props = {
  videoId: string;
  title: string;
  className?: string;
  /** Prefer hqdefault — maxresdefault 404s on some uploads. */
  posterQuality?: 'hqdefault' | 'sddefault' | 'maxresdefault';
};

/**
 * Click-to-play YouTube embed — no iframe / YouTube JS until the user plays.
 * Keeps LCP and main-thread cost off the critical path.
 */
export function YoutubeFacade({
  videoId,
  title,
  className = '',
  posterQuality = 'hqdefault',
}: Props) {
  const [playing, setPlaying] = useState(false);
  const poster = `https://img.youtube.com/vi/${videoId}/${posterQuality}.jpg`;

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl md:rounded-3xl bg-[#0D1117] shadow-[0_24px_64px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.08] ${className}`.trim()}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full text-left touch-manipulation"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={poster}
            alt=""
            width={1280}
            height={720}
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-brand/40 group-hover:bg-brand/30 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex h-[4.25rem] w-[4.25rem] sm:h-[4.75rem] sm:w-[4.75rem] items-center justify-center rounded-full bg-accent text-brand shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-4 ring-accent/25 group-hover:scale-105 group-active:scale-95 transition-transform">
              <svg viewBox="0 0 24 24" aria-hidden className="h-8 w-8 sm:h-9 sm:w-9 ml-1">
                <path d="M8 5.5v13l11-6.5L8 5.5z" fill="currentColor" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
