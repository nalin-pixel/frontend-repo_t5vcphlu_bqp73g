import { motion } from 'framer-motion'

function BodyCode() {
  return (
    <section id="bodycode" className="relative bg-black py-24 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,200,255,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          BODYCODE — The Book that Started the Universe
        </motion.h3>
        <p className="mt-3 max-w-3xl text-blue-200/90">تطوّر الفكرة: Mealkessa → EatCode → BodyCode → BodyBloc.</p>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
          {/* Book mockup */}
          <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-black to-slate-900 p-6">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.6),transparent_45%),radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.6),transparent_45%)]" />
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="h-40 w-28 rounded-lg border border-cyan-300/30 bg-black shadow-[0_0_40px_rgba(34,211,238,0.25)]" />
              <div className="absolute text-center">
                <h4 className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-2xl font-extrabold tracking-widest text-transparent">BODYCODE</h4>
                <p className="text-xs text-blue-200/70">DNA × Cosmos × Sport</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              'A black book with neon-blue glow — a blueprint for the new human.',
              'DNA × Cosmos visuals + performance science distilled.',
              'A living system that evolved into BodyBloc™.',
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-xl border border-cyan-400/20 bg-white/5 p-4 text-sm text-blue-200/80"
              >
                {line}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BodyCode
