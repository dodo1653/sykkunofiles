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

  const mediaGallery = [
    { id: 1, type: 'link', title: 'Hemomal Google Doc', date: 'April 10, 2026', source: 'HemomalVT', url: 'https://docs.google.com/document/d/1X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5/edit' },
    { id: 2, type: 'link', title: 'Valkyrae Tweet "Disappointing :("', date: 'April 13, 2026', source: 'X/Twitter', url: 'https://x.com/Valkyrae/status/1909981234567890' },
    { id: 3, type: 'video', title: 'The Sykkuno Files - YouTube (1.1M views)', date: 'April 11, 2026', source: 'WestJett', url: 'https://www.youtube.com/watch?v=eGK6ywJiD-8' },
    { id: 4, type: 'link', title: 'Sykkuno Wikipedia', date: '2020-2026', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Sykkuno' },
    { id: 5, type: 'link', title: 'GamePOW Article', date: 'April 11, 2026', source: 'GamePOW', url: 'https://gamepow.co/the-sykkuno-drama-controversy-vtuber-hemomal-releases-a-google-doc-exposing-sykkuno/' },
    { id: 6, type: 'link', title: 'Spilled.gg Report', date: 'April 11, 2026', source: 'Spilled.gg', url: 'https://spilled.gg/sykkuno-girlfriend-women-call-messages/' },
    { id: 7, type: 'link', title: 'High On Films Analysis', date: 'April 11, 2026', source: 'High On Films', url: 'https://www.highonfilms.com/sykkunos-wholesome-persona-crumbles-hemomalvt-controversy/' },
    { id: 8, type: 'link', title: 'Times of India - Valkyrae Responds', date: 'April 13, 2026', source: 'Times of India', url: 'https://timesofindia.indiatimes.com/world/us-streamers/valkyrae-responds-to-sykkuno-controversy-after-hemomal-document-and-voice-recording-go-viral/articleshow/130243907.cms' }
  ]

  const subjects = [
    { name: 'Thomas "Sykkuno"', role: 'PRIMARY SUBJECT', status: 'ALLEGED', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sykkuno_at_Animethon_2022_%28cropped%29.jpg/440px-Sykkuno_at_Animethon_2022_%28cropped%29.jpg', bio: '34yo streamer, 3.4M Twitch followers, known as "wholesome king"' },
    { name: 'HemomalVT', role: 'WHISTLEBLOWER', status: 'ACTIVE', image: null, bio: 'VTuber who released 32-page exposé document' },
    { name: 'Valkyrae', role: 'RESPONDENT', status: 'COMMENTED', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Valkyrae_in_2022.jpg/440px-Valkyrae_in_2022.jpg', bio: 'Top creator, close friend, posted "Disappointing :("' },
    { name: 'Elfilea', role: 'WITNESS', status: 'STATEMENT', image: null, bio: '5-year victim, claims "used and lied to"' },
    { name: 'Long-term Girlfriend', role: 'AFFECTED PARTY', status: 'UNNAMED', image: null, bio: 'Lived with Sykkuno since 2021, discovered affairs' }
  ]

  const documents = [
    {
      id: 'DOC-001',
      title: 'The Google Doc Exposé',
      date: 'April 10, 2026',
      source: 'HemomalVT',
      summary: '32-page document accusing Sykkuno of being a "serial cheater, liar, and manipulator"',
      content: [
        'Multiple simultaneous relationships while having girlfriend',
        'Love bombing tactics on smaller creators',
        'PayPal payments documented',
        'Paris trip during 2025 TFT tournament',
        'Audio recording of admission'
      ],
      tags: ['PRIMARY', 'SCREENSHOTS', 'TIMELINE']
    },
    {
      id: 'DOC-002',
      title: 'Voice Recording',
      date: 'April 10, 2026',
      source: 'HemomalVT',
      summary: 'Phone call where Sykkuno allegedly admits to behaviors',
      content: [
        'Admits to multiple romantic conversations',
        'Discusses prioritizing Hemomal over crying girlfriend',
        'Admission to questionable behaviors'
      ],
      tags: ['AUDIO', 'ADMISSION']
    },
    {
      id: 'DOC-003',
      title: 'Valkyrae\'s Response',
      date: 'April 13, 2026',
      source: 'X/Twitter',
      summary: 'Close friend responds publicly',
      content: ['Posted: "Disappointing :("', 'One of few creators to comment'],
      tags: ['RESPONSE', 'CREATOR']
    },
    {
      id: 'DOC-004',
      title: 'Elfilea\'s Statement',
      date: 'April 2026',
      source: 'Social Media',
      summary: '5-year victim comes forward',
      content: ['5-year timeline of deception', 'Similar patterns to other victims'],
      tags: ['WITNESS', 'PATTERN']
    },
    {
      id: 'DOC-005',
      title: 'Hemomal Clarification',
      date: 'April 14, 2026',
      source: 'X/Twitter',
      summary: 'Clarifies "predator" meaning',
      content: ['Not about minors', 'About preying on smaller VTubers'],
      tags: ['CLARIFICATION']
    },
    {
      id: 'DOC-006',
      title: 'Fake Apology Incident',
      date: 'April 13, 2026',
      source: 'X/Reddit',
      summary: '"Sorry not sorry" screenshot confirmed fake',
      content: ['Fabricated post spread virally', 'Sykkuno never responded'],
      tags: ['FAKE', 'VIRAL']
    }
  ]

  const timeline = [
    { date: '2021', event: 'Long-term relationship began while secretly engaging with others' },
    { date: '2025', event: 'Paris trip with woman during TFT tournament, €500 payment' },
    { date: 'April 10, 2026', event: 'Hemomal releases 32-page Google Doc + audio recording' },
    { date: 'April 11, 2026', event: 'Story goes viral, WestJett video hits 1M+ views' },
    { date: 'April 13, 2026', event: 'Valkyrae posts "Disappointing :(", fake apology spreads' },
    { date: 'April 14, 2026', event: 'Hemomal clarifies "predator" meaning, denies minors involved' }
  ]

  const searchEngines = [
    { name: 'X', url: 'https://x.com/search?q=', icon: '𝕏' },
    { name: 'TikTok', url: 'https://www.tiktok.com/search?query=', icon: '♪' },
    { name: 'YouTube', url: 'https://www.youtube.com/results?search_query=', icon: '▶' },
    { name: 'Reddit', url: 'https://www.reddit.com/search/?q=', icon: '⬡' },
    { name: 'Google', url: 'https://www.google.com/search?q=', icon: 'G' }
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
          LOADING SYYKUNO FILES...
        </motion.div>
      </motion.div>

      <header className="border-b border-white/20 py-4 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-2xl">📁</span>
            <div>
              <h1 className="text-lg font-bold">SYYKUNO FILES</h1>
              <p className="text-xs text-white/50">DOCUMENT ARCHIVE // APRIL 2026</p>
            </div>
          </div>
          <div className="text-xs text-white/40">
            STATUS: <span className="text-red-400">ACTIVE INVESTIGATION</span>
          </div>
        </div>
      </header>

      <div className="bg-white/5 border-b border-white/10 py-3 px-8">
        <div className="max-w-6xl mx-auto flex gap-8 text-xs">
          <div><span className="text-white/50">DOCUMENTS:</span> <span className="text-white">{documents.length}</span></div>
          <div><span className="text-white/50">MEDIA:</span> <span className="text-white">{mediaGallery.length}</span></div>
          <div><span className="text-white/50">SUBJECTS:</span> <span className="text-white">{subjects.length}</span></div>
          <div><span className="text-white/50">UPDATED:</span> <span className="text-white">APRIL 14, 2026</span></div>
        </div>
      </div>

      <div className="bg-white/10 border-b border-white/10 py-4 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 mb-3">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search the Sykkuno drama across social media..."
              className="flex-1 bg-black border border-white/20 px-4 py-2 text-sm focus:outline-none focus:border-white/40"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {searchEngines.map((engine, i) => (
              <a 
                key={i}
                href={engine.url + (searchQuery || 'sykkuno')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded flex items-center gap-1"
              >
                <span>{engine.icon}</span>
                <span>{engine.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/5 border-b border-white/10 py-3 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xs text-white/50">OFFICIAL LINKS:</div>
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-white text-white/50 flex items-center gap-1"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto p-8">
        <section className="mb-12">
          <div className="bg-white/5 border border-white/20 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-red-400">⚠</span> INVESTIGATION SUMMARY
            </h2>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              On April 10, 2026, VTuber Hemomal released a 32-page document accusing Sykkuno (Thomas) of being a 
              "serial cheater, liar, and manipulator." Includes screenshots, payment records, and audio recording. 
              Sykkuno has not responded publicly as of April 14, 2026.
            </p>
            <div className="flex gap-4 text-xs mb-4">
              <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">TOKEN: $SYYKUNO</span>
              <span className="bg-white/10 px-2 py-1 rounded">CHAIN: SOLANA</span>
            </div>
            <p className="text-xs text-white/40">
              Educational purposes only. Allegations unverified.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// MEDIA & LINKS ({mediaGallery.length})</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mediaGallery.map((media) => (
              <a 
                key={media.id}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/40 transition-colors text-center"
              >
                <div className="text-3xl mb-2">
                  {media.type === 'video' ? '▶' : media.type === 'link' ? '🔗' : '🖼'}
                </div>
                <p className="text-xs font-bold">{media.title}</p>
                <p className="text-xs text-white/40 mt-1">{media.source}</p>
                <p className="text-xs text-white/30 mt-1">{media.date}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// SUBJECTS OF INTEREST</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                    {subject.image ? (
                      <img src={subject.image} alt={subject.name} className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'}} />
                    ) : (
                      <span className="text-2xl">👁</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-sm">{subject.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${subject.status === 'ALLEGED' ? 'bg-yellow-500/20 text-yellow-400' : subject.status === 'COMMENTED' ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10'}`}>
                        {subject.status}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 mb-1">{subject.role}</p>
                    <p className="text-xs text-white/40">{subject.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// EVIDENCE DOCUMENTS ({documents.length})</h3>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                <div className="bg-white/10 px-4 py-2 flex justify-between items-center">
                  <span className="font-mono text-sm">{doc.id} - {doc.title}</span>
                  <div className="flex gap-2">
                    {doc.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-white/10 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-4 text-xs text-white/50 mb-3">
                    <span>📅 {doc.date}</span>
                    <span>📍 {doc.source}</span>
                  </div>
                  <p className="text-sm text-white/70 mb-3">{doc.summary}</p>
                  <ul className="text-sm text-white/60 space-y-1">
                    {doc.content.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-white/30">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// TIMELINE</h3>
          <div className="border-l-2 border-white/20 ml-4 space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-6">
                <div className="absolute left-0 top-1 w-2 h-2 bg-white/40 rounded-full -translate-x-[5px]" />
                <div className="text-sm font-mono text-white/40 mb-1">{item.date}</div>
                <div className="text-sm text-white/70">{item.event}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// SOURCES</h3>
          <div className="text-xs text-white/40 space-y-1 font-mono">
            <p>• GamePOW - The Sykkuno Drama Controversy (April 11, 2026)</p>
            <p>• High On Films - Is Sykkuno's Wholesome Persona Crumbling? (April 11, 2026)</p>
            <p>• Spilled.gg - Sykkuno allegedly cheated (April 11, 2026)</p>
            <p>• Times of India - Valkyrae responds (April 13, 2026)</p>
            <p>• WestJett YouTube - The Sykkuno Files (1.1M views)</p>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">SYYKUNO FILES // $SYYKUNO // EDUCATIONAL ONLY</p>
        </footer>
      </main>
    </div>
  )
}

export default App