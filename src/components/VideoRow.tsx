export function VideoRow() {
  const videos = [
    {
      id: 'uNL733tYTf0',
      title: 'Fastest Invoice in 2026'
    },
    {
      id: 'km0oJ6UjCs4',
      title: 'Gmail to Xero in Seconds'
    },
    {
      id: 'S3O2qjwfDiw',
      title: 'Why We Quit QuickBooks'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-3xl uppercase tracking-tighter text-brand mb-12 text-center">
          See SMASH in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-4">
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-lg uppercase tracking-tight text-brand">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}