import { motion } from 'framer-motion'

function Visuals() {
  return (
    <section className="relative bg-black py-24 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(0,200,255,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          DNA × COSMOS × SPORT
        </motion.h3>
        <p className="mt-2 max-w-3xl text-blue-200/90">Your body is a universe. We rebuild it bloc by bloc.</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            'linear-gradient(135deg, rgba(34,211,238,0.25), rgba(59,130,246,0.15))',
            'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(147,51,234,0.12))',
            'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(34,211,238,0.12))',
          ].map((bg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative h-56 overflow-hidden rounded-2xl border border-cyan-400/20"
              style={{ backgroundImage: bg }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.15),transparent_50%)]" />
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'><circle cx=\'40\' cy=\'80\' r=\'2\' fill=\'%23ffffff\'/><circle cx=\'160\' cy=\'30\' r=\'2\' fill=\'%23ffffff\'/><path d=\'M20 120 C80 60 120 140 180 80\' stroke=\'%23a5f3fc66\' stroke-width=\'2\' fill=\'none\'/></svg>')]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Visuals
