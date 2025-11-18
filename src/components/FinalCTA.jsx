import { motion } from 'framer-motion'

function FinalCTA() {
  return (
    <section id="cta" className="relative bg-black py-24 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,255,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl"
        >
          Your evolution begins now.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#protocol" className="rounded-full bg-cyan-500/90 px-6 py-3 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.5)] transition hover:bg-cyan-400">Start the Rebuild</a>
          <a href="#system" className="rounded-full border border-cyan-300/40 bg-white/5 px-6 py-3 font-semibold text-cyan-100 backdrop-blur-sm transition hover:bg-white/10">Explore the System</a>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA
