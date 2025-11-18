import { motion } from 'framer-motion'

const phases = [
  { title: 'Phase 1: Biological Reset', results: 'Energy • Digestion • Inflammation ↓' },
  { title: 'Phase 2: Neuro-Fuel Calibration', results: 'Focus • Clarity • Stable glucose' },
  { title: 'Phase 3: Performance Engineering', results: 'Strength • Speed • Movement IQ' },
  { title: 'Phase 4: Identity Reconstruction', results: 'Mental architecture • Direction' },
]

function Protocol() {
  return (
    <section id="protocol" className="relative bg-black py-24 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,200,255,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          The Protocol — 90-Day Rebuild Program
        </motion.h3>
        <p className="mt-2 max-w-3xl text-blue-200/90">Mission Log / Space Protocol: كل مرحلة تمثل Bloc.</p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {phases.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 backdrop-blur-sm"
            >
              <h4 className="text-white font-semibold">{p.title}</h4>
              <p className="mt-1 text-sm text-blue-200/80">Results: {p.results}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <a href="#cta" className="inline-flex items-center rounded-full bg-cyan-500/90 px-6 py-3 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.5)] transition hover:bg-cyan-400">
            Begin Mission
          </a>
        </div>
      </div>
    </section>
  )
}

export default Protocol
