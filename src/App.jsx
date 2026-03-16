import { useEffect, useState, useRef } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import Art from './components/Art'
import LiveSection from './components/LiveSection'
import Token from './components/Token'
import About from './components/About'
import Community from './components/Community'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CinematicTransition from './components/CinematicTransition'

function App() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [particleOpacity, setParticleOpacity] = useState(0)
  const canvasRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    document.body.appendChild(script)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0
      audioRef.current.play().then(() => {
        setIsPlaying(true)
        setParticleOpacity(0.5)
        let vol = 0
        const fadeIn = () => {
          vol += 0.03
          if (audioRef.current && vol < 0.5) {
            audioRef.current.volume = vol
            requestAnimationFrame(fadeIn)
          }
        }
        fadeIn()
      }).catch(() => {})
    }
  }, [])

  useEffect(() => {
    if (particleOpacity <= 0 || !canvasRef.current) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    
    const particles = []
    const particleCount = 50
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 1.5 + 0.5,
        baseRadius: Math.random() * 1.5 + 0.5,
      })
    }
    
    let animationId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        
        p.radius = p.baseRadius + Math.sin(Date.now() * 0.002 + i) * 0.3
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particleOpacity * 0.5})`
        ctx.fill()
        
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${particleOpacity * 0.12 * (1 - dist / 100)})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        })
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [particleOpacity])

  const toggleAudio = () => {
    if (!audioRef.current) return
    
    const targetPlaying = !isPlaying
    
    if (targetPlaying) {
      audioRef.current.volume = 0
      audioRef.current.play().then(() => {
        setIsPlaying(true)
        setParticleOpacity(0.5)
        let vol = 0
        const fadeIn = () => {
          vol += 0.03
          if (audioRef.current && vol < 0.5) {
            audioRef.current.volume = vol
            requestAnimationFrame(fadeIn)
          }
        }
        fadeIn()
      }).catch(() => {})
    } else {
      setIsPlaying(false)
      setParticleOpacity(0)
      let vol = audioRef.current.volume
      const fadeOut = () => {
        vol -= 0.03
        if (audioRef.current && vol > 0) {
          audioRef.current.volume = vol
          requestAnimationFrame(fadeOut)
        } else if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current.volume = 0
        }
      }
      fadeOut()
    }
  }

  return (
    <div className="min-h-screen relative">
      {particleOpacity > 0 && (
        <canvas 
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: -1 }}
        />
      )}
      
      <audio ref={audioRef} src="/tiktok-audio.mp3" preload="auto" loop />
      
      <button
        onClick={toggleAudio}
        className="fixed z-50 flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300"
        style={{
          top: '50%',
          left: '1.5rem',
          transform: 'translateY(-50%)',
          background: isPlaying ? 'rgba(20, 184, 166, 0.12)' : 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(20, 184, 166, 0.25)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="relative flex items-center justify-center w-5 h-5">
          {isPlaying ? (
            <div className="flex gap-[2px] items-end h-4">
              <span className="w-[2px] bg-teal-400 rounded-full animate-equalizer" style={{ height: '40%', animationDelay: '0ms' }} />
              <span className="w-[2px] bg-teal-400 rounded-full animate-equalizer" style={{ height: '70%', animationDelay: '150ms' }} />
              <span className="w-[2px] bg-teal-400 rounded-full animate-equalizer" style={{ height: '50%', animationDelay: '300ms' }} />
              <span className="w-[2px] bg-teal-400 rounded-full animate-equalizer" style={{ height: '80%', animationDelay: '450ms' }} />
            </div>
          ) : (
            <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
        <span 
          className="text-xs font-light text-teal-400 overflow-hidden transition-all duration-200" 
          style={{ 
            fontFamily: '"Space Mono", monospace', 
            width: isPlaying ? '50px' : '45px',
            opacity: isPlaying ? 1 : 0.6
          }}
        >
          {isPlaying ? 'playing' : 'paused'}
        </span>
      </button>

      <CinematicTransition />
      <Navbar />
      <Hero />
      <Art />
      <LiveSection />
      <Token />
      <About />
      <Community />
      <Footer />
      <a 
        href="https://x.com/dazzoxx"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 transition-all duration-300 hover:opacity-70"
        style={{ opacity: 0.4 }}
      >
        <span className="text-[9px] font-light tracking-wide" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
          website by <span style={{ color: 'rgba(255,255,255,0.55)' }}>@dazzoxx</span>
        </span>
      </a>
    </div>
  )
}

export default App
