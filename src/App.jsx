import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import SystemBlocs from './components/SystemBlocs'
import Creator from './components/Creator'
import BodyCode from './components/BodyCode'
import Protocol from './components/Protocol'
import Visuals from './components/Visuals'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle starfield background base */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.06),transparent_50%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.06),transparent_45%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.05),transparent_40%)]" />

      <header className="relative z-20 flex items-center justify-between px-6 py-5">
        <div className="text-cyan-200 font-bold tracking-wider">BodyBloc™</div>
        <nav className="hidden gap-6 text-sm text-blue-200/80 md:flex">
          <a href="#philosophy" className="hover:text-cyan-300">Philosophy</a>
          <a href="#system" className="hover:text-cyan-300">System</a>
          <a href="#protocol" className="hover:text-cyan-300">Protocol</a>
          <a href="#bodycode" className="hover:text-cyan-300">BodyCode</a>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <SystemBlocs />
        <Creator />
        <BodyCode />
        <Protocol />
        <Visuals />
        <Testimonials />
        <FinalCTA />
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-6 text-center text-xs text-blue-300/70">
        © {new Date().getFullYear()} BodyBloc — DNA × Cosmos × Sport
      </footer>
    </div>
  )
}

export default App
