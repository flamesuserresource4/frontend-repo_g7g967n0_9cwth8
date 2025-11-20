export default function Location() {
  return (
    <section id="location" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">Location</h2>
        <p className="text-white/80 mb-6">Find us in the heart of Thessaloniki. Pull up for neon nights and bold bites.</p>
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,234,255,0.15)]">
          <iframe
            title="Ohmami Thessaloniki"
            src="https://www.google.com/maps?q=Thessaloniki&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
