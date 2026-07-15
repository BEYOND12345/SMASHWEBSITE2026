/**
 * Vertical founder demo for the iOS landing hero (1080×1350 / 4:5).
 * Muted autoplay loop — captions are in the video, so sound isn’t required.
 */
export function IosHeroVerticalVideo({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative w-full max-w-[min(100%,280px)] sm:max-w-[300px] lg:max-w-[320px] mx-auto lg:ml-auto ${className}`.trim()}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-[#0D1117] shadow-[0_28px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
        <video
          src="/product/ios/video/hero-vertical.mp4?v=2"
          poster="/product/ios/video/hero-vertical-poster.jpg?v=2"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="SMASH voice quoting demo — speak the job, see the quote build"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
