import { motion } from 'framer-motion'

const neon = {
  initial: { filter: 'drop-shadow(0 0 0 rgba(255,0,84,0))' },
  hover: { filter: 'drop-shadow(0 0 16px rgba(255,0,84,0.9))' },
}

const sections = [
  { title: 'Bao Buns', color: '#ff0054', items: ['Pork Belly Bao', 'Crispy Chicken Bao', 'Tofu Teriyaki Bao (V)'] },
  { title: 'Asian-Fusion Burgers', color: '#00eaff', items: ['K-BBQ Smash Burger', 'Spicy Szechuan Burger', 'Umami Mushroom Burger (V)'] },
  { title: 'Loaded Fries', color: '#f5ff7d', items: ['Kimchi Cheese Fries', 'Gochujang Chili Fries', 'Seaweed Salt + Lime'] },
  { title: 'Signature Sauces', color: '#ff0054', items: ['GochuMayo', 'Yuzu Aioli', 'Ssamjang Ranch', 'Neon Sweet Heat'] },
  { title: 'Vegan Options', color: '#00eaff', items: ['Tofu Katsu Bao', 'Miso-Glazed Eggplant Burger', 'Truffle Nori Fries'] },
]

export default function Menu() {
  return (
    <section id="menu" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tight">Menu</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((sec) => (
            <motion.div key={sec.title} variants={neon} initial="initial" whileHover="hover" className="rounded-xl border border-white/10 p-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.0))]">
              <h3 className="text-xl font-extrabold" style={{ color: sec.color }}>{sec.title}</h3>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {sec.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mt-2 mr-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: sec.color }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
