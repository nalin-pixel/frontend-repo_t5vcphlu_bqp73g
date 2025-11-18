import { motion } from 'framer-motion'

function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-black text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,180,255,0.08),transparent_40%)]"/>
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          BioCosmic Identity — Manifesto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 max-w-3xl text-blue-200/90"
        >
          بتصميم نظيف: BodyBloc = منظومة تعيد بناء الإنسان عبر مزج العلم والكون والأداء. نُهندس الهوية طبقة بطبقة.
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'DNA Rewiring', desc: 'إعادة برمجة العادات الجينية ورفع كفاءة الشفرة الحيوية.' },
            { title: 'Tempo & Biomechanics', desc: 'الإيقاع الحركي، الزخم، والميكانيكا الحيوية للأداء الرياضي.' },
            { title: 'Cosmic Perspective', desc: 'دورات الزمن، الإيقاع الكوني، والمزامنة مع الحركة الكبرى.' },
            { title: 'Nutrition Intelligence', desc: 'محور الأمعاء-الدماغ، تغذية ذكية تعظّم الطاقة والتركيز.' },
            { title: 'Identity Engineering', desc: 'إعادة بناء الذات Bloc by Bloc بهيكلة عقلية جديدة.' },
            { title: 'Athletic Philosophy', desc: 'فلسفة علمية رياضية تعيد تعريف الأداء والإنسان.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-cyan-400/20 bg-white/5 p-5 backdrop-blur-sm"
            >
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="mt-1 text-blue-200/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy
