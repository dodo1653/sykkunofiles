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
    { name: 'Reddit', url: 'https://www.reddit.com/search/?q=sykkuno+allegations', icon: '⬡' },
    { name: 'Discord', url: 'https://discord.com/invite/sykkuno', icon: '⬢' }
  ]

  const mediaGallery = [
    { id: 1, type: 'image', title: 'HemomalVT Google Doc (Page 1)', date: 'April 10, 2026', source: 'HemomalVT', placeholder: true },
    { id: 2, type: 'image', title: 'Message Screenshots Compilation', date: 'April 10, 2026', source: 'HemomalVT', placeholder: true },
    { id: 3, type: 'image', title: 'Valkyrae Response Tweet', date: 'April 13, 2026', source: 'X/Twitter', placeholder: true },
    { id: 4, type: 'video', title: 'The Sykkuno Files - YouTube Analysis', date: 'April 11, 2026', source: 'WestJett', url: 'https://www.youtube.com/watch?v=eGK6ywJiD-8' },
    { id: 5, type: 'image', title: 'Sykkuno Streaming (Archival)', date: '2020-2025', source: 'Twitch', placeholder: true },
    { id: 6, type: 'image', title: 'HemomalVT Statement', date: 'April 14, 2026', source: 'X/Twitter', placeholder: true }
  ]

  const documents = [
    {
      id: 'DOC-001',
      title: 'The Google Doc Exposé',
      date: 'April 10, 2026',
      source: 'HemomalVT (VTuber)',
      summary: '32-page document accusing Sykkuno of being a "serial cheater, liar, and manipulator" with screenshots, timelines, and evidence',
      content: [
        'Engaged in romantic relationships with multiple women simultaneously',
        'Maintained long-term girlfriend since 2021 while telling others he was single',
        'Used "love bombing" tactics for rapid emotional bonding',
        'Sent money to women (PayPal payments documented)',
        'Took one woman to Paris during 2025 TFT tournament',
        'Audio recording allegedly shows admission to behaviors'
      ],
      tags: ['PRIMARY EVIDENCE', 'SCREENSHOTS', 'TIMELINE'],
      media: ['message_screenshot_1.png', 'timeline_chart.png']
    },
    {
      id: 'DOC-002',
      title: 'Voice Recording',
      date: 'April 10, 2026',
      source: 'HemomalVT',
      summary: 'Recorded phone call where Sykkuno allegedly admits to behaviors',
      content: [
        'Sykkuno acknowledges engaging in romantic conversations with multiple women',
        'Discusses prioritizing conversations with Hemomal over crying girlfriend',
        'Admits to questionable relationship behaviors',
        'Hemomal states "you didn\'t cheat on me" despite revelations'
      ],
      tags: ['AUDIO EVIDENCE', 'ADMISSION']
    },
    {
      id: 'DOC-003',
      title: 'Valkyrae\'s Response',
      date: 'April 13, 2026',
      source: 'X (Twitter)',
      summary: 'Close friend and fellow creator Rachell "Valkyrae" Hofstetter responds',
      content: [
        'Posted simply: "Disappointing :("',
        'Known friend and collaborator of Sykkuno',
        'One of few high-profile creators to publicly comment'
      ],
      tags: ['PUBLIC RESPONSE', 'CREATOR']
    },
    {
      id: 'DOC-004',
      title: 'Elfilea\'s Statement',
      date: 'April 2026',
      source: 'Social Media',
      summary: 'Another accuser comes forward with 5-year experience',
      content: [
        'Claims she was "used and lied to" over five years',
        'Details similar patterns of deception',
        'Part of growing list of women coming forward'
      ],
      tags: ['WITNESS STATEMENT', 'PATTERN']
    },
    {
      id: 'DOC-005',
      title: 'Pokimane Clip Resurfaces',
      date: 'April 2026',
      source: 'Twitch/YouTube Archives',
      summary: 'Old clip of Pokimane discussing Sykkuno\'s DM habits goes viral',
      content: [
        'Past conversation about Sykkuno\'s messaging behavior resurfaces',
        'Fans reinterpret in light of new allegations',
        'Adds to pattern of documented behavior'
      ],
      tags: ['ARCHIVE', 'PATTERN']
    },
    {
      id: 'DOC-006',
      title: 'Hemomal Clarification',
      date: 'April 14, 2026',
      source: 'X (Twitter)',
      summary: 'Hemomal clarifies use of "predator" term',
      content: [
        '"Predator isn\'t pedo. He preys on small female vtubers and lies to them"',
        'Clarifies term used to describe behavior toward smaller creators',
        'English not first language - clarification posted',
        'States she received hate messages and threats'
      ],
      tags: ['CLARIFICATION', 'STATEMENT']
    },
    {
      id: 'DOC-007',
      title: 'Fake Apology Screenshot',
      date: 'April 13, 2026',
      source: 'X/Reddit',
      summary: 'Viral "sorry not sorry" post confirmed false',
      content: [
        'Screenshot claimed Sykkuno posted "I didn\'t do anything wrong..."',
        'Spread rapidly before being confirmed fake',
        'Sykkuno still has not responded to any allegations'
      ],
      tags: ['FAKE', 'VIRAL', 'MISINFORMATION']
    },
    {
      id: 'DOC-008',
      title: 'Creator Community Reactions',
      date: 'April 11-14, 2026',
      source: 'Multiple Platforms',
      summary: 'Wider streaming community responds to allegations',
      content: [
        'Multiple creators refuse to comment publicly',
        'Some delete old Sykkuno collaboration videos',
        'Fans divided on accountability and belief',
        'Discussions about parasocial relationships intensify'
      ],
      tags: ['COMMUNITY', 'REACTIONS']
    }
  ]

  const subjects = [
    { name: 'Thomas "Sykkuno"', role: 'PRIMARY SUBJECT', status: 'ALLEGED', image: 'sykkuno_profile.jpg' },
    { name: 'HemomalVT', role: 'WHISTLEBLOWER', status: 'ACTIVE', image: 'hemomal_profile.jpg' },
    { name: 'Long-term Girlfriend', role: 'AFFECTED PARTY', status: 'UNNAMED', image: null },
    { name: 'Elfilea', role: 'WITNESS', status: 'STATEMENT', image: 'elfilea_profile.jpg' },
    { name: 'Valkyrae', role: 'RESPONDENT', status: 'COMMENTED', image: 'valkyrae_profile.jpg' }
  ]

  const timeline = [
    { date: '2021', event: 'Sykkuno allegedly begins long-term relationship while secretly engaging with others' },
    { date: '2023', event: 'Pokimane clip discussing Sykkuno\'s DM habits recorded (later resurfaces)' },
    { date: '2025', event: 'Takes woman to Paris during TFT tournament, sends €500 to help her move' },
    { date: 'April 10, 2026', event: 'HemomalVT releases 32-page Google Doc with evidence' },
    { date: 'April 10, 2026', event: 'Voice recording surfaces' },
    { date: 'April 11, 2026', event: 'News outlets pick up story - goes viral' },
    { date: 'April 11, 2026', event: 'WestJett YouTube video "The Sykkuno Files" gains 1M+ views' },
    { date: 'April 13, 2026', event: 'Valkyrae responds "Disappointing :("' },
    { date: 'April 13, 2026', event: 'Fake "sorry not sorry" screenshot spreads - later confirmed false' },
    { date: 'April 14, 2026', event: 'Hemomal clarifies "predator" meaning, denies minors involved' }
  ]

  const searchEngines = [
    { name: 'Search X/Twitter', url: `https://x.com/search?q=${searchQuery || 'sykkuno'}`, icon: '𝕏' },
    { name: 'Search TikTok', url: `https://www.tiktok.com/search?q=${searchQuery || 'sykkuno'}`, icon: '♪' },
    { name: 'Search YouTube', url: `https://www.youtube.com/results?search_query=${searchQuery || 'sykkuno'}`, icon: '▶' },
    { name: 'Search Reddit', url: `https://www.reddit.com/search/?q=${searchQuery || 'sykkuno'}`, icon: '⬡' },
    { name: 'Search Google', url: `https://www.google.com/search?q=${searchQuery || 'sykkuno'}`, icon: 'G' }
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

      {/* Header */}
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

      {/* Stats Bar */}
      <div className="bg-white/5 border-b border-white/10 py-3 px-8">
        <div className="max-w-6xl mx-auto flex gap-8 text-xs">
          <div><span className="text-white/50">DOCUMENTS:</span> <span className="text-white">{documents.length}</span></div>
          <div><span className="text-white/50">SUBJECTS:</span> <span className="text-white">{subjects.length}</span></div>
          <div><span className="text-white/50">MEDIA FILES:</span> <span className="text-white">{mediaGallery.length}</span></div>
          <div><span className="text-white/50">LAST UPDATED:</span> <span className="text-white">APRIL 14, 2026</span></div>
        </div>
      </div>

      {/* Search Bar */}
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
                href={engine.url}
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

      {/* Social Links */}
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
                className="text-xs hover:text-white text-white/50 flex items-center gap-1"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8">
        {/* Intro */}
        <section className="mb-12">
          <div className="bg-white/5 border border-white/20 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-red-400">⚠</span> INVESTIGATION SUMMARY
            </h2>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              On April 10, 2026, VTuber Hemomal released a detailed 32-page document accusing popular streamer Sykkuno (Thomas) 
              of being a "serial cheater, liar, and manipulator." The document includes screenshots, timelines, payment records, 
              and an audio recording. Sykkuno has not publicly responded to the allegations as of April 14, 2026.
            </p>
            <div className="flex gap-4 text-xs mb-4">
              <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">TOKEN: $SYYKUNO</span>
              <span className="bg-white/10 px-2 py-1 rounded">CHAIN: SOLANA</span>
            </div>
            <p className="text-xs text-white/40">
              NOTE: This archive compiles publicly reported information. Allegations are unverified unless otherwise noted. 
              This is for educational purposes only.
            </p>
          </div>
        </section>

        {/* Media Gallery */}
        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// MEDIA GALLERY</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mediaGallery.map((media) => (
              <div 
                key={media.id}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-colors"
              >
                <div className="aspect-video bg-white/10 flex items-center justify-center">
                  {media.type === 'video' ? (
                    <a href={media.url} target="_blank" rel="noopener noreferrer" className="text-center p-4">
                      <span className="text-3xl block mb-2">▶</span>
                      <span className="text-xs text-white/50">WATCH VIDEO</span>
                    </a>
                  ) : (
                    <div className="text-center p-4">
                      <span className="text-3xl block mb-2">🖼</span>
                      <span className="text-xs text-white/50">EVIDENCE IMAGE</span>
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold truncate">{media.title}</p>
                  <p className="text-xs text-white/40">{media.source} · {media.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subjects */}
        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// SUBJECTS OF INTEREST</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded hover:border-white/30 transition-colors">
                <div className="flex gap-3 mb-2">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-xl">
                    {subject.image ? '👤' : '👁'}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="font-bold">{subject.name}</span>
                      <span className={`text-xs px-2 py-1 rounded ${subject.status === 'ALLEGED' ? 'bg-yellow-500/20 text-yellow-400' : subject.status === 'COMMENTED' ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'}`}>
                        {subject.status}
                      </span>
                    </div>
                    <p className="text-xs text-white/50">{subject.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
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
                    <span> source: {doc.source}</span>
                    {doc.media && <span className="text-blue-400">📎 {doc.media.length} attachments</span>}
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

        {/* Timeline */}
        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// TIMELINE OF EVENTS</h3>
          <div className="border-l-2 border-white/20 ml-4 space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-6">
                <div className="absolute left-0 top-1 w-2 h-2 bg-white/40 rounded-full -translate-x-[5px]" />
                <div className="text-sm font-mono text-white/40 mb-1">{item.date}</div>
                <div className="text-sm text-white/70">{item.event}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h3 className="text-sm font-bold text-white/50 mb-4 tracking-widest">// PUBLIC SOURCES</h3>
          <div className="text-xs text-white/40 space-y-2 font-mono">
            <p>• GamePOW - "The Sykkuno Drama Controversy" (April 11, 2026)</p>
            <p>• High On Films - "Is Sykkuno's Wholesome Persona Crumbling?" (April 11, 2026)</p>
            <p>• Spilled.gg - "Sykkuno allegedly cheated on long-term girlfriend" (April 11, 2026)</p>
            <p>• Times of India - "Valkyrae responds to Sykkuno controversy" (April 13, 2026)</p>
            <p>• Inkl - "Was Sykkuno involved with minors?" (April 14, 2026)</p>
            <p>• NewsBreak - "What happened to Sykkuno?" (April 11, 2026)</p>
            <p>• WestJett YouTube - "The Sykkuno Files Just Dropped" (1.1M views)</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">
            SYYKUNO FILES ARCHIVE // $SYYKUNO // FOR EDUCATIONAL PURPOSES ONLY
          </p>
          <p className="text-xs text-white/20 mt-2">
            This site compiles publicly reported information. Allegations remain unverified.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App