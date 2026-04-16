import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 800)
  }, [])

  const socialLinks = [
    { name: 'X', url: 'https://x.com/sykkunofiles1' },
    { name: 'TikTok', url: 'https://www.tiktok.com/discover/sykkuno' },
    { name: 'YouTube', url: 'https://www.youtube.com/results?search_query=sykkuno+scandal' },
    { name: 'Reddit', url: 'https://www.reddit.com/search/?q=sykkuno+allegations' }
  ]

  const evidenceLinks = [
    { id: 1, title: 'Google Doc - Hemomal Full Exposé (32 pages)', url: 'https://docs.google.com/document/d/1bICoQMqFHZ172P8AbZeF0-GCM4pXA-0M8jR82GiLcLs/preview' },
    { id: 2, title: 'WestJett: The Sykkuno Files Just Dropped (1.1M views)', url: 'https://www.youtube.com/watch?v=eGK6ywJiD-8' },
    { id: 3, title: 'SmugAlana: Sykkuno exposed as serial cheater (88K views)', url: 'https://www.youtube.com/watch?v=NqcX1xP8hOs' },
    { id: 4, title: 'Mujin: From viral star to serial cheater (4M+ views)', url: 'https://www.youtube.com/watch?v=C3GMAX8Bfmc' },
    { id: 5, title: 'kxl: The Sykkuno Files Explained', url: 'https://www.youtube.com/watch?v=6_Hr_w5PeOw' },
    { id: 6, title: 'GamePOW: The Sykkuno Drama Controversy', url: 'https://gamepow.co/the-sykkuno-drama-controversy-vtuber-hemomal-releases-a-google-doc-exposing-sykkuno/' },
    { id: 7, title: 'Spilled.gg: Sykkuno allegedly cheated', url: 'https://spilled.gg/sykkuno-girlfriend-women-call-messages/' },
    { id: 8, title: 'High On Films: Wholesome Persona Crumbling', url: 'https://www.highonfilms.com/sykkunos-wholesome-persona-crumbles-hemomalvt-controversy/' },
    { id: 9, title: 'Times of India: Valkyrae responds', url: 'https://timesofindia.indiatimes.com/world/us-streamers/valkyrae-responds-to-sykkuno-controversy-after-hemomal-document-and-voice-recording-go-viral/articleshow/130243907.cms' },
    { id: 10, title: 'Poprant: Fake "sorry not sorry" debunked', url: 'https://poprant.indiatimes.com/trending/sorry-not-sorry-did-sykkuno-break-his-silence-after-shocking-cheating-allegations-viral-photo-leaves-internet-confused-heres-the-truth/articleshow/130210105.html' },
    { id: 11, title: 'Inkl: Were minors involved?', url: 'https://inkl.com/news/was-sykkuno-involved-with-minors-hemomal-clears-confusion-in-viral-controversy' },
    { id: 12, title: 'Tribune: Viral sentiment analysis', url: 'https://tribune.com.pk/story/2602505/did-sykkuno-address-cheating-allegations-viral-sorry-not-sorry-post-stirs-sentiment' }
  ]

  const subjects = [
    { name: 'Thomas "Sykkuno"', role: 'PRIMARY', status: 'ALLEGED', bio: '34yo, 3.4M Twitch followers, "wholesome king" persona' },
    { name: 'HemomalVT', role: 'WHISTLEBLOWER', status: 'ACTIVE', bio: 'VTuber who released 32-page exposé with evidence' },
    { name: 'Valkyrae', role: 'RESPONDENT', status: 'COMMENTED', bio: 'Close friend - posted "Disappointing :("' },
    { name: 'Elfilea', role: 'WITNESS', status: 'STATEMENT', bio: '5-year victim, corroborates the story' },
    { name: 'Girlfriend', role: 'AFFECTED', status: 'SILENT', bio: 'Lived with Sykkuno since 2021' }
  ]

  const timeline = [
    { date: '2021', event: 'Long-term relationship began while secretly messaging multiple women' },
    { date: 'Dec 2025', event: 'Paris trip with woman during TFT tournament, €500-€1,550 payments' },
    { date: 'April 10, 2026', event: 'Hemomal releases 32-page Google Doc with screenshots and audio' },
    { date: 'April 11, 2026', event: 'WestJett video hits 1M+ views, #Sykkuno trends on X' },
    { date: 'April 13, 2026', event: 'Valkyrae responds "Disappointing :("' },
    { date: 'April 14, 2026', event: 'Hemomal clarifies "predator" means preying on smaller VTubers' },
    { date: 'NOW', event: 'Sykkuno has NOT responded - full silence' }
  ]

  const viralStats = [
    { platform: 'YouTube', video: 'The Sykkuno Files', views: '1.1M' },
    { platform: 'YouTube', video: 'Mujin Exposé', views: '4M+' },
    { platform: 'X/Twitter', hashtag: '#Sykkuno', posts: '24K+' }
  ]

  return (
    <div className="min-h-screen bg-black text-white font-['Courier_New']" style={{ cursor: 'default' }}>
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-auto"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm tracking-widest"
        >
          LOADING SYYKUNO FILES...
        </motion.div>
      </motion.div>

      <header className="border-b border-white/20 py-4 px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-2xl">FOLDER</span>
            <div>
              <h1 className="text-lg font-bold">SYYKUNO FILES</h1>
              <p className="text-xs text-white/50">DOCUMENT ARCHIVE // APRIL 2026</p>
            </div>
          </div>
          <div className="text-xs text-red-400">
            ACTIVE INVESTIGATION
          </div>
        </div>
      </header>

      <div className="bg-white/5 border-b border-white/10 py-3 px-8">
        <div className="max-w-4xl mx-auto flex gap-6 text-xs">
          <div><span className="text-white/50">VIRAL REACH:</span> <span className="text-white">5M+</span></div>
          <div><span className="text-white/50">EVIDENCE:</span> <span className="text-white">{evidenceLinks.length}</span></div>
          <div><span className="text-white/50">UPDATED:</span> <span className="text-white">APRIL 14, 2026</span></div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto p-8">
        <section className="mb-10">
          <div className="bg-white/5 border border-white/20 p-5 rounded-lg">
            <h2 className="text-lg font-bold mb-3">CASE SUMMARY</h2>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              April 10, 2026: VTuber Hemomal released a 32-page document exposing Sykkuno (Thomas, 34) as a 
              "serial cheater, liar, and manipulator." Evidence includes screenshots, PayPal payment records, 
              timeline, and voice recording. Sykkuno has NOT responded publicly - complete silence.
            </p>
            <div className="flex gap-3 text-xs">
              <span className="bg-white/10 px-2 py-1 rounded">$SYYKUNO</span>
              <span className="bg-white/10 px-2 py-1 rounded">SOLANA</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">EVIDENCE LINKS</h3>
          <div className="space-y-2">
            {evidenceLinks.map((link) => (
              <a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 p-3 rounded transition-all cursor-pointer"
                style={{ pointerEvents: 'auto' }}
              >
                <span className="text-sm text-white/80 hover:text-white">{link.title}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">SUBJECTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {subjects.map((subject, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-3 rounded">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-sm">{subject.name}</span>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded">{subject.status}</span>
                </div>
                <p className="text-xs text-white/50">{subject.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">TIMELINE</h3>
          <div className="border-l border-white/20 ml-4 space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-4">
                <div className="absolute left-0 top-1 w-2 h-2 bg-white/40 rounded-full" />
                <div className="text-sm text-white/40 mb-0.5">{item.date}</div>
                <div className="text-sm text-white/60">{item.event}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">SEARCH SOCIAL MEDIA</h3>
          <div className="flex flex-wrap gap-2">
            <a href="https://x.com/search?q=sykkuno" target="_blank" rel="noopener noreferrer" className="text-xs bg-white/10 hover:bg-white/20 px-3 py-2 rounded cursor-pointer" style={{ pointerEvents: 'auto' }}>Search X</a>
            <a href="https://www.tiktok.com/discover/sykkuno" target="_blank" rel="noopener noreferrer" className="text-xs bg-white/10 hover:bg-white/20 px-3 py-2 rounded cursor-pointer" style={{ pointerEvents: 'auto' }}>Search TikTok</a>
            <a href="https://www.youtube.com/results?search_query=sykkuno+scandal" target="_blank" rel="noopener noreferrer" className="text-xs bg-white/10 hover:bg-white/20 px-3 py-2 rounded cursor-pointer" style={{ pointerEvents: 'auto' }}>Search YouTube</a>
            <a href="https://www.reddit.com/search/?q=sykkuno+allegations" target="_blank" rel="noopener noreferrer" className="text-xs bg-white/10 hover:bg-white/20 px-3 py-2 rounded cursor-pointer" style={{ pointerEvents: 'auto' }}>Search Reddit</a>
            <a href="https://www.google.com/search?q=sykkuno+scandal" target="_blank" rel="noopener noreferrer" className="text-xs bg-white/10 hover:bg-white/20 px-3 py-2 rounded cursor-pointer" style={{ pointerEvents: 'auto' }}>Search Google</a>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">VIRAL STATS</h3>
          <div className="flex gap-4">
            {viralStats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-3 rounded flex-1">
                <div className="text-xs text-white/40">{stat.platform}</div>
                <div className="text-sm font-bold">{stat.views || stat.posts}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-white/5 border-b border-white/10 py-3 px-8 mb-8">
          <div className="max-w-4xl mx-auto flex gap-4 text-xs">
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white cursor-pointer"
                style={{ pointerEvents: 'auto' }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <footer className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/30">SYYKUNO FILES // EDUCATIONAL PURPOSES ONLY</p>
        </footer>
      </main>
    </div>
  )
}

export default App