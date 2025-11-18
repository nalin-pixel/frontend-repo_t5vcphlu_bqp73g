import { motion } from 'framer-motion'

function Creator() {
  return (
    <section id="creator" className="relative bg-black py-24 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(0,180,255,0.08),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white"
          >
            The Creator
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-blue-200/90"
          >
            Sports Scientist × Sports Medicine × Performance Researcher. Writer × Copywriter × Strategic Innovator. Founder of BodyBloc™ & BodyCode™ System.
          </motion.p>
          <div className="mt-6 rounded-xl border border-cyan-400/20 bg-white/5 p-5 backdrop-blur">
            <p className="text-blue-200/80">أنت تبني الإنسان الجديد — منهج علمي وفلسفي يعيد تشكيل الجسد والعقل ضمن منظومة كونية.</p>
          </div>
        </div>
        <div className="relative h-80 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-cyan-500/10 to-transparent">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.15),transparent_40%)]" />
          <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full opacity-70">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            {/* Blueprint silhouette */}
            <path d="M200 40c-40 0-70 30-70 70 0 30 10 40 10 60s-10 30-10 50 20 40 70 40 70-20 70-40-10-30-10-50 10-30 10-60c0-40-30-70-70-70z" fill="none" stroke="url(#g1)" strokeWidth="1.2" />
            {/* Floating blocs */}
            <g>
              <rect x="60" y="60" width="20" height="20" rx="4" className="fill-cyan-300/20" />
              <rect x="310" y="80" width="18" height="18" rx="4" className="fill-cyan-300/20" />
              <rect x="90" y="220" width="16" height="16" rx="4" className="fill-cyan-300/20" />
              <rect x="330" y="230" width="22" height="22" rx="5" className="fill-cyan-300/20" />
            </g>
            {/* Grid */}
            <path d="M0 160h400 M200 0v320" stroke="#0ea5e9" strokeOpacity="0.15" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Creator
