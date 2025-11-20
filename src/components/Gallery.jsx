export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604909052743-86bb192f696b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550547660-05f8470e304e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544025162-019df6a7d035?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10">
              <img src={src} alt="Ohmami dish" className="h-36 sm:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
