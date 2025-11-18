import { motion } from 'framer-motion'

function Testimonials() {
  return (
    <section className="relative bg-black py-20 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,200,255,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          Results
        </motion.h3>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 text-sm text-blue-200/80 backdrop-blur-sm"
            >
              "Energy up, digestion smooth, focus like a laser. BodyBloc feels like software for the body."
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
