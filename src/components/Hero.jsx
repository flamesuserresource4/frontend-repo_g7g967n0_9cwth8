import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#ff0054] shadow-[0_0_20px_#ff0054]"></span>
              <span className="h-2 w-2 rounded-full bg-[#00eaff] shadow-[0_0_20px_#00eaff]"></span>
              <span className="h-2 w-2 rounded-full bg-[#f5ff7d] shadow-[0_0_20px_#f5ff7d]"></span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,0,84,0.3)]">
              OHMAMI
            </h1>
            <p className="mt-3 text-[#f5ff7d] text-lg sm:text-xl font-semibold tracking-widest uppercase">
              Street Food • Urban Flavors
            </p>
            <p className="mt-5 text-white/80 max-w-md">
              Asian-fusion bites, neon nights, and bold flavors. Thessaloniki’s go-to street-food spot.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#menu" className="px-5 py-3 rounded-md bg-[#ff0054] text-white font-bold shadow-[0_0_35px_#ff0054aa] hover:shadow-[0_0_50px_#ff0054cc] transition-shadow">
                Explore Menu
              </a>
              <a href="#order" className="px-5 py-3 rounded-md bg-[#00eaff] text-black font-extrabold hover:shadow-[0_0_40px_#00eaffbb] transition-shadow">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
