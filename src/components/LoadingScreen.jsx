import { motion } from 'framer-motion'

const LoadingScreen = ({ progress }) => {
  const rotation = (progress / 100) * 180 - 90
  const jitter = progress > 80 ? (progress - 80) / 20 : 0

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: 'blur(40px)',
        scale: 1.05,
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
      }}
      className="fixed inset-0 z-[2000] flex items-center justify-center overflow-hidden"
      style={{ background: '#030303' }}
    >
      <div className="relative flex flex-col items-center">
        {/* Cortisol Gauge - Viral Style */}
        <div className="relative w-72 h-36 flex items-end justify-center">
          <svg className="absolute bottom-0 w-full overflow-visible" viewBox="0 0 200 100">
            <defs>
              {/* Gradient from green (low) to red (high) */}
              <linearGradient id="cortisolGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#eab308" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#f97316" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Background Track - Dark with subtle gradient */}
            <path
              d="M20,100 A80,80 0 0,1 180,100"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Zone Labels */}
            <text x="30" y="75" fill="rgba(34,197,94,0.5)" fontSize="6" fontFamily="monospace">LOW</text>
            <text x="155" y="75" fill="rgba(239,68,68,0.5)" fontSize="6" fontFamily="monospace">HIGH</text>
            
            {/* Active Progress Arc */}
            <motion.path
              d="M20,100 A80,80 0 0,1 180,100"
              fill="none"
              stroke="url(#cortisolGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="251.32"
              filter="url(#glow)"
              animate={{ 
                strokeDashoffset: 251.32 - (progress / 100) * 251.32 
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 60 }}
            />

            {/* Scale Markers */}
            {[0, 25, 50, 75, 100].map((mark) => {
              const ang = (mark / 100) * 180 - 180
              const x1 = 100 + Math.cos((ang * Math.PI) / 180) * 88
              const y1 = 100 + Math.sin((ang * Math.PI) / 180) * 88
              const x2 = 100 + Math.cos((ang * Math.PI) / 180) * 95
              const y2 = 100 + Math.sin((ang * Math.PI) / 180) * 95
              return (
                <line
                  key={mark}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                />
              )
            })}
          </svg>

          {/* Needle - Sleek & Sharp */}
          <motion.div
            className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 origin-bottom z-20"
            style={{ 
              width: '2px',
              height: '80px',
              background: 'linear-gradient(to top, #fff 0%, rgba(255,255,255,0.3) 100%)',
              boxShadow: '0 0 15px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.2)',
            }}
            animate={{ 
              rotate: rotation,
              x: [0, jitter, -jitter, 0],
            }}
            transition={{ 
              rotate: { type: 'spring', damping: 18, stiffness: 45 },
              x: { duration: 0.03, repeat: Infinity }
            }}
          >
            {/* Needle tip glow */}
            <div 
              className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
              style={{ 
                background: '#fff',
                boxShadow: '0 0 20px #fff, 0 0 40px rgba(255,255,255,0.8)',
              }}
            />
          </motion.div>

          {/* Pivot - Minimal dot */}
          <div 
            className="absolute bottom-[-8px] w-4 h-4 rounded-full z-30"
            style={{ 
              background: '#030303',
              border: '2px solid rgba(255,255,255,0.3)',
              boxShadow: '0 0 20px rgba(255,255,255,0.2)',
            }}
          />
        </div>

        {/* Status Text */}
        <motion.div
          className="mt-8 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p 
            className="text-[9px] uppercase tracking-[0.5em] font-bold"
            style={{ 
              color: 'rgba(255,255,255,0.3)',
              fontFamily: 'monospace',
            }}
          >
            {progress < 100 ? 'Calibrating...' : 'Ready'}
          </p>
        </motion.div>

        {/* Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80"
          style={{
            background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Scanline Effect - Subtle */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`,
        }}
      />
    </motion.div>
  )
}

export default LoadingScreen
