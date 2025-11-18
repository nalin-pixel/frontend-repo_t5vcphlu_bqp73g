import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D DNA cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cosmic gradients and stars overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,255,0.08),transparent_45%),_radial-gradient(circle_at_80%_30%,rgba(0,80,255,0.08),transparent_40%),_radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-balance bg-gradient-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
        >
          Enter the BodyBloc Universe.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 max-w-3xl text-lg text-blue-100/90 sm:text-xl"
        >
          Where biology, astronomy, and performance converge to rebuild the human being.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#protocol" className="group rounded-full bg-cyan-500/90 px-6 py-3 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.5)] transition hover:bg-cyan-400">
            Start the Reconstruction
          </a>
          <a href="#bodycode" className="rounded-full border border-cyan-300/40 bg-white/5 px-6 py-3 font-semibold text-cyan-100 backdrop-blur-sm transition hover:bg-white/10">
            Explore the BodyCode
          </a>
        </motion.div>

        {/* Bio-cosmic silhouette visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid w-full max-w-4xl grid-cols-4 gap-2"
        >
          {[
            'bg-gradient-to-b from-cyan-400/80 to-cyan-600/20', // DNA
            'bg-gradient-to-b from-blue-400/70 to-blue-600/20', // Muscles
            'bg-gradient-to-b from-indigo-400/70 to-indigo-700/10', // Stars
            'bg-gradient-to-b from-white/70 to-cyan-100/10', // Geometric blocks
          ].map((bg, i) => (
            <div key={i} className={`relative aspect-[3/5] overflow-hidden rounded-xl ${bg}`}>
              <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.6)_50%,transparent_60%)]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'><defs><linearGradient id=\'g\' x1=\'0\' x2=\'1\'><stop offset=\'0%\' stop-color=\'%23ffffff11\'/><stop offset=\'100%\' stop-color=\'%23ffffff00\'/></linearGradient></defs><path d=\'M60,10 C120,40 80,80 140,110\' stroke=\'%23a5f3fc55\' stroke-width=\'2\' fill=\'none\'/></svg>')] bg-center bg-no-repeat" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
