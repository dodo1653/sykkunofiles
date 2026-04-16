import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 800)
  }, [])

  const socialLinks = [
    { name: 'X', url: 'https://x.com/sykkunofiles1', icon: '𝕏' },
    { name: 'TikTok', url: 'https://www.tiktok.com/discover/sykkuno', icon: '♪' },
    { name: 'YouTube', url: 'https://www.youtube.com/results?search_query=sykkuno+scandal', icon: '▶' },
    { name: 'Reddit', url: 'https://www.reddit.com/search/?q=sykkuno+allegations', icon: '⬡' }
  ]

  const viralStats = [
    { platform: 'YouTube', video: 'The Sykkuno Files', views: '1.1M', likes: '39.1K' },
    { platform: 'YouTube', video: 'SmugAlana Exposed', views: '88K', likes: '3.6K' },
    { platform: 'YouTube', video: 'kxl Explained', views: '2.9K', likes: '51' },
    { platform: 'X/Twitter', hashtag: '#Sykkuno', posts: '24K+' },
    { platform: 'Reddit', hashtag: 'r/LivestreamFail', posts: 'Multiple viral threads' }
  ]

  const evidenceLinks = [
    { id: 1, title: '📄 FULL GOOGLE DOC - Hemomal Exposé (32 pages)', url: 'https://docs.google.com/document/d/1bICoQMqFHZ172P8AbZeF0-GCM4pXA-0M8jR82GiLcLs/preview', views: 'MILLIONS' },
    { id: 2, title: '▶ WestJett YouTube: "The Sykkuno Files Just Dropped" (1.1M views)', url: 'https://www.youtube.com/watch?v=eGK6ywJiD-8', views: '1.1M' },
    { id: 3, title: '▶ SmugAlana: "Sykkuno exposed as serial cheater" (88K views)', url: 'https://www.youtube.com/watch?v=NqcX1xP8hOs', views: '88K' },
    { id: 4, title: '▶ kxl: "The Sykkuno Files Explained" (2.9K views)', url: 'https://www.youtube.com/watch?v=6_Hr_w5PeOw', views: '2.9K' },
    { id: 5, title: '▶ Mujin: "How to go from viral star to serial cheater" (4M+ views)', url: 'https://www.youtube.com/watch?v=C3GMAX8Bfmc', views: '4M+' },
    { id: 6, title: '📰 GamePOW: The Sykkuno Drama Controversy', url: 'https://gamepow.co/the-sykkuno-drama-controversy-vtuber-hemomal-releases-a-google-doc-exposing-sykkuno/', views: 'VIRAL' },
    { id: 7, title: '📰 Spilled.gg: Sykkuno allegedly cheated', url: 'https://spilled.gg/sykkuno-girlfriend-women-call-messages/', views: 'VIRAL' },
    { id: 8, title: '📰 High On Films: Wholesome Persona Crumbling', url: 'https://www.highonfilms.com/sykkunos-wholesome-persona-crumbles-hemomalvt-controversy/', views: 'VIRAL' },
    { id: 9, title: '📰 Times of India: Valkyrae Responds', url: 'https://timesofindia.indiatimes.com/world/us-streamers/valkyrae-responds-to-sykkuno-controversy-after-hemomal-document-and-voice-recording-go-viral/articleshow/130243907.cms', views: 'VIRAL' },
    { id: 10, title: '📰 Poprant: "Sorry Not Sorry" Fake Post Debunked', url: 'https://poprant.indiatimes.com/trending/sorry-not-sorry-did-sykkuno-break-his-silence-after-shocking-cheating-allegations-viral-photo-leaves-internet-confused-heres-the-truth/articleshow/130210105.html', views: 'VIRAL' },
    { id: 11, title: '📰 Inkl: Were Minors Involved?', url: 'https://inkl.com/news/was-sykkuno-involved-with-minors-hemomal-clears-confusion-in-viral-controversy', views: 'VIRAL' },
    { id: 12, title: '📰 Tribune: Viral Sentiment Analysis', url: 'https://tribune.com.pk/story/2602505/did-sykkuno-address-cheating-allegations-viral-sorry-not-sorry-post-stirs-sentiment', views: 'VIRAL' }
  ]

  const subjects = [
    { name: 'Thomas "Sykkuno"', role: 'PRIMARY SUBJECT', status: 'ALLEGED', bio: '34yo, 3.4M Twitch followers, known as "wholesome king", software developer turned streamer' },
    { name: 'HemomalVT', role: 'WHISTLEBLOWER', status: 'ACTIVE', bio: 'VTuber who released 32-page document with screenshots, timelines, payments, and audio recording' },
    { name: 'Valkyrae', role: 'RESPONDENT', status: 'COMMENTED', bio: 'Top creator, close friend - posted "Disappointing :(" - one of few to respond' },
    { name: 'Elfilea', role: 'WITNESS', status: 'STATEMENT', bio: '5-year victim, says "used and lied to", corroborates Hemomal story' },
    { name: 'Girlfriend (Unnamed)', role: 'AFFECTED', status: 'SILENT', bio: 'Lived with Sykkuno since 2021, discovered affairs in April 2026' }
  ]

  const timeline = [
    { date: '2021', event: 'Sykkuno begins living with long-term girlfriend while secretly messaging multiple women' },
    { date: 'Dec 2025', event: 'Sykkuno takes woman to Paris during TFT tournament, sends €500-€1,550 via PayPal' },
    { date: 'April 10, 2026', event: 'HemomalVT releases 32-page Google Doc with screenshots, timeline, and audio recording' },
    { date: 'April 10, 2026', event: 'Voice recording surfaces where Sykkuno allegedly admits to behaviors' },
    { date: 'April 11, 2026', event: 'WestJett video hits 1M+ views within hours - goes massively viral' },
    { date: 'April 11, 2026', event: '#Sykkuno trends on X with 24K+ posts, Reddit threads explode' },
    { date: 'April 12, 2026', event: 'Multiple YouTubers release analysis videos (4M+ total views)' },
    { date: 'April 13, 2026', event: 'Valkyrae responds "Disappointing :(" - becomes top engagement' },
    { date: 'April 13, 2026', event: 'Fake "sorry not sorry" screenshot spreads - confirmed fabrication' },
    { date: 'April 14, 2026', event: 'Hemomal clarifies "predator" - means preying on smaller VTubers, not minors' },
    { date: 'PRESENT', event: 'Sykkuno has NOT responded publicly - full silence' }
  ]

  const searchEngines = [
    { name: '🔍 Search X', url: 'https://x.com/search?q=' },
    { name: '🎵 Search TikTok', url: 'https://www.tiktok.com/search?query=' },
    { name: '▶ Search YouTube', url: 'https://www.youtube.com/results?search_query=' },
    { name: '⬡ Search Reddit', url: 'https://www.reddit.com/search/?q=' },
    { name: 'G Search Google', url: 'https://www.google.com/search?q=' }
  ]

  const keyEvidence = [
    '32-page Google Doc with full timeline',
    'Voice recording of admission (17+ minutes)',
    'PayPal payment screenshots (€500-€1,550)',
    'Discord DM screenshots',
    'Paris trip proof (Dec 2025)',
    '5+ women coming forward',
    'xQc old advice clip resurfaces'
  ]

  return (
    <div className="min-h-screen bg-black text-white font-['Courier_New']" style={{ pointerEvents: 'auto' }}>
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[2000] bg-black flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm tracking-widest"
        >
          SYYKUNO FILES // LOADING EVIDENCE...
        </motion.div>
      </motion.div>

      <header className="border-b border-white/20 py-4 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-3xl">📁</span>
            <div>
              <h1 className="text-xl font-bold tracking-wider">SYYKUNO FILES</h1>
              <p className="text-xs text-white/50">THE EXPOSÉ THAT BROKE THE INTERNET</p>
            </div>
          </div>
          <div className="text-xs text-red-400 font-bold">
            🔴 LIVE INVESTIGATION
          </div>
        </div>
      </header>

      <div className="bg-white/5 border-b border-white/10 py-3 px-8">
        <div className="max-w-6xl mx-auto flex gap-6 text-xs">
          <div><span className="text-white/50">VIRAL REACH:</span> <span className="text-red-400">5M+ VIEWS</span></div>
          <div><span className="text-white/50">X TRENDING:</span> <span className="text-red-400">24K+ POSTS</span></div>
          <div><span className="text-white/50">VIDEOS:</span> <span className="text-white">12+ ANALYSIS</span></div>
          <div><span className="text-white/50">VICTIMS:</span> <span className="text-white">5+ WOMEN</span></div>
        </div>
      </div>

      <div className="bg-red-900/20 border-b border-red-500/30 py-4 px-8">
        <div className="max-w-6xl mx-auto">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search the evidence across the web..."
            className="w-full bg-black border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-red-500"
          />
          <div className="flex flex-wrap gap-2 mt-3">
            {searchEngines.map((engine, i) => (
              <a 
                key={i}
                href={engine.url + (searchQuery || 'sykkuno+scandal')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-white/10 hover:bg-red-900/30 px-3 py-1.5 rounded border border-white/10 hover:border-red-500/50 transition-colors"
              >
                {engine.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/5 border-b border-white/10 py-3 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xs text-white/50">OFFICIAL:</div>
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-red-400 text-white/50 transition-colors"
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto p-8">
        <section className="mb-12">
          <div className="bg-red-900/10 border border-red-500/30 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-red-400">⚠</span> THE CASE SUMMARY
            </h2>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              <strong>April 10, 2026:</strong> VTuber Hemomal released a 32-page document exposing Sykkuno (Thomas, 34) as a 
              "serial cheater, liar, and manipulator." The document includes screenshots, payment records (PayPal €500-€1,550), 
              timeline, and a voice recording where he allegedly admits to everything. Sykkuno has NOT responded publicly 
              as of today - complete silence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs mt-4">
              <div className="bg-black/50 p-3 rounded">
                <p className="text-white/40 mb-1">TOKEN</p>
                <p className="text-xl font-bold">$SYYKUNO</p>
              </div>
              <div className="bg-black/50 p-3 rounded">
                <p className="text-white/40 mb-1">CHAIN</p>
                <p className="text-xl font-bold">SOLANA</p>
              </div>
              <div className="bg-black/50 p-3 rounded">
                <p className="text-white/40 mb-1">VIDEOS CREATED</p>
                <p className="text-xl font-bold">12+</p>
              </div>
              <div className="bg-black/50 p-3 rounded">
                <p className="text-white/40 mb-1">TOTAL VIEWS</p>
                <p className="text-xl font-bold">5M+</p>
              </div>
              <div className="bg-black/50 p-3 rounded">
                <p className="text-white/40 mb-1">X POSTS</p>
                <p className="text-xl font-bold">24K+</p>
              </div>
              <div className="bg-black/50 p-3 rounded">
                <p className="text-white/40 mb-1">SYKKUNO RESPONSE</p>
                <p className="text-xl font-bold text-red-400">NONE</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-bold text-red-400 mb-4 tracking-widest">// 🔴 PRIMARY EVIDENCE (CLICK TO VIEW)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {evidenceLinks.map((link) => (
              <a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 border border-white/10 hover:border-red-500/50 p-4 rounded-lg transition-all hover:bg-red-900/10"
              >
                <div className="flex justify-between items-start">
                  <span className="font-bold text-sm">{link.title}</span>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">{link.views}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// SUBJECTS OF INTEREST</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold">{subject.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${subject.status === 'ALLEGED' ? 'bg-yellow-500/20 text-yellow-400' : subject.status === 'COMMENTED' ? 'bg-blue-500/20 text-blue-400' : subject.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' : 'bg-white/10'}`}>
                    {subject.status}
                  </span>
                </div>
                <p className="text-xs text-white/50 mb-1">{subject.role}</p>
                <p className="text-xs text-white/40">{subject.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// KEY EVIDENCE POINTS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {keyEvidence.map((evidence, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-3 rounded text-center">
                <span className="text-sm text-white/70">{evidence}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// TIMELINE OF EVENTS</h3>
          <div className="border-l-2 border-red-500/30 ml-4 space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-6">
                <div className="absolute left-0 top-1 w-2 h-2 bg-red-500 rounded-full -translate-x-[5px]" />
                <div className="text-sm font-mono text-red-400 mb-1">{item.date}</div>
                <div className="text-sm text-white/70">{item.event}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// VIRAL STATS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {viralStats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded">
                <div className="flex justify-between">
                  <span className="font-bold">{stat.platform}</span>
                  <span className="text-red-400">{stat.views || stat.posts}</span>
                </div>
                <p className="text-xs text-white/50 mt-1">{stat.video || stat.hashtag}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">SYYKUNO FILES // EDUCATIONAL PURPOSES ONLY</p>
          <p className="text-xs text-white/20 mt-2">Compiling publicly available information since April 2026</p>
        </footer>
      </main>
    </div>
  )
}

export default App