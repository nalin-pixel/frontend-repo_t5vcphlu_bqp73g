import { motion } from 'framer-motion'
import { Atom, Planet, Dna, Dumbbell, Box, Star } from 'lucide-react'

const blocs = [
  { name: 'The DNA Bloc', icon: Dna, desc: 'Genetic habits, biological code.' },
  { name: 'The Rhythm Bloc', icon: Planet, desc: 'Circadian cycles, cosmic timing.' },
  { name: 'The Movement Bloc', icon: Dumbbell, desc: 'Biomechanics, kinetic intelligence.' },
  { name: 'The Fuel Bloc', icon: Atom, desc: 'Nutrition, microbiome, gut–brain axis.' },
  { name: 'The Identity Bloc', icon: Box, desc: 'Mental architecture, self-systems.' },
  { name: 'Astro-Performance Bloc', icon: Star, desc: 'Long cycles, energy management.' },
  { name: 'The Focus Bloc', icon: Star, desc: 'Attention, clarity, neural rhythm.' },
  { name: 'The Recovery Bloc', icon: Planet, desc: 'Sleep architecture and repair.' },
  { name: 'The Breath Bloc', icon: Atom, desc: 'Gas exchange, CO2 tolerance.' },
  { name: 'The Signal Bloc', icon: Box, desc: 'Hormonal rhythms and cues.' },
  { name: 'The Strength Bloc', icon: Dumbbell, desc: 'Force production, tendon health.' },
  { name: 'The Field Bloc', icon: Planet, desc: 'Environment, light, temperature.' },
]

function SystemBlocs() {
  return (
    <section id="system" className="relative bg-black py-20 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(0,200,255,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          The BodyBloc System — 12 Cosmic Blocs
        </motion.h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blocs.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-white/10 to-transparent p-5 backdrop-blur-sm hover:border-cyan-300/40"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-cyan-400/10 p-2 ring-1 ring-cyan-300/20">
                  <b.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{b.name}</h3>
                  <p className="mt-1 text-sm text-blue-200/80">{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SystemBlocs
