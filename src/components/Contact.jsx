import { Mail, Phone, Instagram, Facebook } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">Contact</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-white/85">
          <div className="space-y-3">
            <p className="flex items-center gap-3"><Mail size={18}/> hello@ohmami.gr</p>
            <p className="flex items-center gap-3"><Phone size={18}/> +30 210 000 0000</p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:text-[#00eaff] transition-colors"><Instagram/></a>
              <a href="#" className="hover:text-[#00eaff] transition-colors"><Facebook/></a>
            </div>
          </div>
          <div id="order" className="space-y-3">
            <h3 className="text-white font-extrabold">Order Now</h3>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="px-4 py-2 rounded-md bg-[#ff0054] text-white font-bold shadow-[0_0_25px_#ff0054aa] hover:shadow-[0_0_40px_#ff0054cc] transition-shadow">eFood</a>
              <a href="#" className="px-4 py-2 rounded-md bg-[#00eaff] text-black font-extrabold hover:shadow-[0_0_40px_#00eaffbb] transition-shadow">Wolt</a>
              <a href="#" className="px-4 py-2 rounded-md bg-[#f5ff7d] text-black font-extrabold hover:shadow-[0_0_40px_#f5ff7dbb] transition-shadow">Box</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
