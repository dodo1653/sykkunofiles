import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 800)
  }, [])

  const socialLinks = [
    { name: 'X', url: 'https://x.com/1SOLSOL' },
    { name: 'Telegram', url: 'https://t.me/1SOLSOL' },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-['Courier_New']">
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[2000] bg-black flex items-center justify-center"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm tracking-widest"
        >
          1 SOL. A DREAM. NO CEILING.
        </motion.div>
      </motion.div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <span className="text-sm font-mono tracking-widest text-white/60">$1SOL</span>
          <div className="flex gap-6 text-sm">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors font-mono"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-8">
            <h1 className="text-4xl md:text-6xl font-light leading-tight text-white/90 font-['Courier_New']">
              1 SOL<br/>
              <span className="text-white/50">A DREAM</span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-12">
            <p className="text-lg text-white/60 font-mono">
              You started with nothing but 1 SOL and a vision.<br/>
              While they sleep, you grind.<br/>
              While they doubt, you build.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="grid grid-cols-2 gap-8 max-w-sm mx-auto mb-12">
            <div className="text-center">
              <p className="text-xs text-white/30 font-mono tracking-widest mb-1">STARTING</p>
              <p className="text-2xl font-mono">1 SOL</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-white/30 font-mono tracking-widest mb-1">CEILING</p>
              <p className="text-2xl font-mono">∞</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs text-white/30 font-mono tracking-widest mb-2">CONTRACT ADDRESS</p>
            <p className="text-xs font-mono text-white/50 break-all select-all">Eh2Yo9BtFwTmzj4vUsLHZ2o6eGP9iMRCdmFhr4s1pump</p>
          </motion.div>
        </div>
      </section>

      {/* The Hustle */}
      <section className="py-24 px-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-white/30 font-mono tracking-widest mb-8 text-center">THE MANIFESTO</p>
          <div className="space-y-6 text-center">
            <p className="text-white/70 font-mono">
              They told you 1 SOL wasn't enough.<br/>
              <span className="text-white/40">You proved them wrong.</span>
            </p>
            <p className="text-white/70 font-mono">
              You didn't wait for a lucky break.<br/>
              <span className="text-white/40">You made your own luck.</span>
            </p>
            <p className="text-white/70 font-mono">
              While they checked charts every 5 minutes,<br/>
              <span className="text-white/40">You were building the future.</span>
            </p>
            <p className="text-white/70 font-mono">
              1 SOL. No rich dad. No institutional backing.<br/>
              <span className="text-white/40">Just grind and conviction.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-white/30 font-mono tracking-widest mb-8 text-center">THE JOURNEY</p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="text-white/30 font-mono">01</span>
              <div>
                <p className="text-white/70 font-mono">1 SOL in the wallet</p>
                <p className="text-xs text-white/40">The beginning. Nothing but potential.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-white/30 font-mono">02</span>
              <div>
                <p className="text-white/70 font-mono">The decision</p>
                <p className="text-xs text-white/40">Most would spend it. You invested it.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-white/30 font-mono">03</span>
              <div>
                <p className="text-white/70 font-mono">The grind</p>
                <p className="text-xs text-white/40">Sleepless nights. No vacations. Pure focus.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-white/30 font-mono">04</span>
              <div>
                <p className="text-white/70 font-mono">The breakthrough</p>
                <p className="text-xs text-white/40">1 SOL became 10. 10 became 100. No ceiling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-light text-white/60 font-['Courier_New'] mb-4">
            "Not financial advice.<br/>
            Just a reminder that<br/>
            you started with 1 SOL."
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-white/30 font-mono tracking-widest mb-8">TOKEN INFO</p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-xs text-white/30 font-mono tracking-widest mb-2">TICKER</p>
              <p className="text-2xl font-mono">$1SOL</p>
            </div>
            <div>
              <p className="text-xs text-white/30 font-mono tracking-widest mb-2">CHAIN</p>
              <p className="text-2xl font-mono">SOLANA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-white/30 font-mono tracking-widest mb-8">OFFICIAL LINKS</p>
          <div className="flex justify-center gap-8">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors font-mono"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-white/20 font-mono">
            1 SOL. A DREAM. NO CEILING.
          </p>
          <p className="text-xs text-white/10 mt-2">
            made by <a href="https://x.com/dzzox1" target="_blank" rel="noopener noreferrer" className="hover:text-white">@dzzox1</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App