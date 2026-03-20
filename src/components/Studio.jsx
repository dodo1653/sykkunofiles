import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Studio = () => {
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)
  const containerRef = useRef(null)
  
  const [watermark, setWatermark] = useState({
    opacity: 0.9,
    width: 120,
    height: 120,
    x: 85,
    y: 85,
    text: 'CORTISOL',
    needlePos: 50
  })
  const [isDraggingWatermark, setIsDraggingWatermark] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState('meter')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const assetImagesRef = useRef({})

  const assets = [
    { id: 'meter', name: 'Meter', icon: '◠', preview: null },
    { id: 'text', name: 'Text', icon: 'T', preview: null },
    { id: 'badge', name: 'Badge', icon: '◆', preview: null },
    { id: 'corner', name: 'Corner', icon: 'L', preview: null },
    { id: 'glitch', name: 'Glitch', icon: 'G', preview: null },
    { id: 'stamp', name: 'Stamp', icon: '★', preview: null },
    { id: 'asset1', name: 'Style 1', icon: '1', preview: '/ChatGPT Image Mar 19, 2026, 02_56_41 PM.png' },
    { id: 'asset2', name: 'Style 2', icon: '2', preview: '/ChatGPT Image Mar 19, 2026, 02_57_12 PM.png' },
    { id: 'asset3', name: 'Style 3', icon: '3', preview: '/ChatGPT Image Mar 19, 2026, 02_58_08 PM.png' },
    { id: 'asset4', name: 'Style 4', icon: '4', preview: '/ChatGPT Image Mar 19, 2026, 02_58_15 PM.png' },
  ]

  const saveToHistory = (newState) => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push({ ...watermark })
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
    if (newState) setWatermark(newState)
  }

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setWatermark({ ...history[historyIndex - 1] })
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) loadFile(file)
  }

  const loadFile = (file) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      setImage(event.target.result)
      setHistory([{ ...watermark }])
      setHistoryIndex(0)
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      loadFile(file)
    }
  }

  const handleImageUrl = () => {
    if (imageUrl) {
      setImage(imageUrl)
      setHistory([{ ...watermark }])
      setHistoryIndex(0)
    }
  }

  useEffect(() => {
    if (image && canvasRef.current) {
      drawCanvas()
    }
  }, [image, watermark, selectedAsset])

  useEffect(() => {
    const preloadImages = () => {
      assets.forEach(asset => {
        if (asset.preview && !assetImagesRef.current[asset.id]) {
          const img = new Image()
          img.crossOrigin = 'anonymous'
          img.src = asset.preview
          assetImagesRef.current[asset.id] = img
        }
      })
    }
    preloadImages()
  }, [])

  const drawCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const container = containerRef.current
    if (!container) return
    
    const img = new Image()
    img.onload = () => {
      const maxW = Math.min(img.width, container.clientWidth - 48)
      const maxH = Math.min(img.height, 500)
      const scale = Math.min(maxW / img.width, maxH / img.height, 1)
      canvas.width = img.width * scale
      canvas.height = img.height * scale
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      drawWatermark(ctx, canvas)
    }
    img.src = image
  }

  const drawWatermark = (ctx, canvas) => {
    const x = (watermark.x / 100) * canvas.width
    const y = (watermark.y / 100) * canvas.height
    const w = watermark.width
    const h = watermark.height
    
    ctx.save()
    ctx.globalAlpha = watermark.opacity

    if (selectedAsset === 'meter') {
      const radius = w / 2
      const cx = x
      const cy = y + radius * 0.3
      
      ctx.beginPath()
      ctx.arc(cx, cy, radius, Math.PI, 0)
      ctx.lineWidth = 8
      const gradient = ctx.createLinearGradient(cx - radius, cy, cx + radius, cy)
      gradient.addColorStop(0, '#22c55e')
      gradient.addColorStop(0.35, '#eab308')
      gradient.addColorStop(0.65, '#f97316')
      gradient.addColorStop(1, '#ef4444')
      ctx.strokeStyle = gradient
      ctx.lineCap = 'round'
      ctx.stroke()

      ctx.font = `bold ${w * 0.18}px "Space Mono", monospace`
      ctx.fillStyle = '#ffffff'
      ctx.textAlign = 'center'
      ctx.fillText(watermark.text, cx, cy - radius * 0.4)

      ctx.font = `${w * 0.1}px "Space Mono", monospace`
      ctx.fillStyle = '#22c55e'
      ctx.textAlign = 'left'
      ctx.fillText('LOW', cx - radius + 5, cy + 15)
      ctx.fillStyle = '#ef4444'
      ctx.textAlign = 'right'
      ctx.fillText('MAX', cx + radius - 5, cy + 15)

      const needleAngle = Math.PI + (watermark.needlePos / 100) * Math.PI
      const needleLength = radius * 0.85
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(cx + Math.cos(needleAngle) * needleLength, cy + Math.sin(needleAngle) * needleLength)
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 2
      ctx.stroke()
      
      ctx.beginPath()
      ctx.arc(cx, cy, 4, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.fill()

    } else if (selectedAsset === 'text') {
      ctx.font = `bold ${w * 0.35}px "Space Mono", monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.strokeStyle = '#000'
      ctx.lineWidth = 4
      ctx.strokeText(watermark.text, x, y)
      ctx.fillStyle = '#14b8a6'
      ctx.fillText(watermark.text, x, y)

    } else if (selectedAsset === 'badge') {
      const badgeW = w * 1.4
      const badgeH = h * 0.8
      ctx.strokeStyle = '#14b8a6'
      ctx.lineWidth = 3
      ctx.strokeRect(x - badgeW/2, y - badgeH/2, badgeW, badgeH)
      ctx.fillStyle = 'rgba(20, 184, 166, 0.1)'
      ctx.fillRect(x - badgeW/2, y - badgeH/2, badgeW, badgeH)
      ctx.font = `bold ${h * 0.2}px "Space Mono", monospace`
      ctx.fillStyle = '#14b8a6'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(watermark.text, x, y)

    } else if (selectedAsset === 'corner') {
      const cSize = Math.min(w, h) * 0.5
      ctx.strokeStyle = '#14b8a6'
      ctx.lineWidth = 3
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(x - cSize, y)
      ctx.lineTo(x, y)
      ctx.lineTo(x, y - cSize)
      ctx.stroke()
      ctx.font = `bold ${cSize * 0.4}px "Space Mono", monospace`
      ctx.fillStyle = '#14b8a6'
      ctx.textAlign = 'left'
      ctx.textBaseline = 'bottom'
      ctx.fillText(watermark.text, x + 5, y - cSize - 5)

    } else if (selectedAsset === 'glitch') {
      ctx.font = `bold ${w * 0.4}px "Space Mono", monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#ff006640'
      ctx.fillText(watermark.text, x + 3, y)
      ctx.fillStyle = '#00ffff40'
      ctx.fillText(watermark.text, x - 3, y)
      ctx.fillStyle = '#14b8a6'
      ctx.fillText(watermark.text, x, y)

    } else if (selectedAsset === 'stamp') {
      ctx.font = `bold ${w * 0.25}px "Space Mono", monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.strokeStyle = '#14b8a6'
      ctx.lineWidth = 2
      ctx.globalAlpha = watermark.opacity * 0.8
      const textWidth = ctx.measureText(watermark.text).width
      const stampW = textWidth + 20
      const stampH = w * 0.4
      ctx.beginPath()
      ctx.roundRect(x - stampW/2, y - stampH/2, stampW, stampH, 4)
      ctx.stroke()
      ctx.fillStyle = '#14b8a6'
      ctx.fillText(watermark.text, x, y + 1)

    } else if (assetImagesRef.current[selectedAsset]) {
      const img = assetImagesRef.current[selectedAsset]
      if (img.complete) {
        const scaleX = w / img.width
        const scaleY = h / img.height
        const scale = Math.min(scaleX, scaleY)
        const imgW = img.width * scale
        const imgH = img.height * scale
        ctx.drawImage(img, x - imgW/2, y - imgH/2, imgW, imgH)
      }
    }
    
    ctx.restore()
  }

  const exportImage = () => {
    setIsExporting(true)
    setTimeout(() => {
      const link = document.createElement('a')
      link.download = 'cortisol-asset.png'
      link.href = canvasRef.current.toDataURL('image/png')
      link.click()
      setIsExporting(false)
    }, 500)
  }

  const handleCanvasMouseDown = (e) => {
    if (!canvasRef.current) return
    setIsDraggingWatermark(true)
    saveToHistory()
    updateWatermarkPosition(e)
  }

  const handleCanvasMouseMove = (e) => {
    if (!isDraggingWatermark) return
    updateWatermarkPosition(e)
  }

  const handleCanvasMouseUp = () => {
    setIsDraggingWatermark(false)
  }

  const updateWatermarkPosition = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100))
    const y = Math.max(5, Math.min(95, ((e.clientY - rect.top) / rect.height) * 100))
    setWatermark(prev => ({ ...prev, x, y }))
  }

  const resetImage = () => {
    setImage(null)
    setImageUrl('')
    setHistory([])
    setHistoryIndex(-1)
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-['Space_Mono']">
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                <span className="text-[10px] font-bold text-teal-500">C</span>
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">Cortisol Studio</span>
            </a>
            <a href="/" className="text-[10px] text-white/30 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={undo}
              disabled={historyIndex <= 0}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors text-[10px] uppercase tracking-widest"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 10h10a5 5 0 0 1 5 5v2M3 10l4-4M3 10l4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Undo
            </button>
            <span className="text-[10px] text-white/20 uppercase tracking-widest">Asset Generator</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row max-w-6xl mx-auto w-full p-6 gap-6">
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sticky top-6">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-6">Customize</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 block">Style</label>
                <div className="grid grid-cols-5 gap-2">
                  {assets.map(asset => (
                    <button
                      key={asset.id}
                      onClick={() => setSelectedAsset(asset.id)}
                      className={`aspect-square rounded-xl flex flex-col items-center justify-center overflow-hidden gap-1 transition-all ${
                        selectedAsset === asset.id
                          ? 'bg-teal-500/20 border-2 border-teal-500'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {asset.preview ? (
                        <img src={asset.preview} alt={asset.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-sm text-teal-500">{asset.icon}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 block">Text</label>
                <input 
                  type="text" 
                  value={watermark.text}
                  onChange={(e) => setWatermark(prev => ({ ...prev, text: e.target.value.toUpperCase() }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-medium outline-none focus:border-teal-500/50 transition-colors"
                  placeholder="CORTISOL"
                  maxLength={12}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Width</label>
                    <span className="text-[10px] font-mono text-teal-500">{watermark.width}px</span>
                  </div>
                  <input 
                    type="range" min="40" max="400" value={watermark.width}
                    onChange={(e) => setWatermark(prev => ({ ...prev, width: parseInt(e.target.value) }))}
                    className="w-full accent-teal-500 bg-white/5 h-1 rounded-full"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Height</label>
                    <span className="text-[10px] font-mono text-teal-500">{watermark.height}px</span>
                  </div>
                  <input 
                    type="range" min="40" max="400" value={watermark.height}
                    onChange={(e) => setWatermark(prev => ({ ...prev, height: parseInt(e.target.value) }))}
                    className="w-full accent-teal-500 bg-white/5 h-1 rounded-full"
                  />
                </div>
              </div>

              {selectedAsset === 'meter' && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Needle</label>
                    <span className="text-[10px] font-mono text-teal-500">{watermark.needlePos}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="100" value={watermark.needlePos}
                    onChange={(e) => setWatermark(prev => ({ ...prev, needlePos: parseInt(e.target.value) }))}
                    className="w-full accent-teal-500 bg-white/5 h-1 rounded-full"
                  />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Opacity</label>
                  <span className="text-[10px] font-mono text-teal-500">{Math.round(watermark.opacity * 100)}%</span>
                </div>
                <input 
                  type="range" min="10" max="100" value={watermark.opacity * 100}
                  onChange={(e) => setWatermark(prev => ({ ...prev, opacity: parseInt(e.target.value) / 100 }))}
                  className="w-full accent-teal-500 bg-white/5 h-1.5 rounded-full"
                />
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 block">Position</label>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { x: 15, y: 15, label: 'TL' },
                    { x: 50, y: 15, label: 'TC' },
                    { x: 85, y: 15, label: 'TR' },
                    { x: 15, y: 50, label: 'ML' },
                    { x: 50, y: 50, label: 'MC' },
                    { x: 85, y: 50, label: 'MR' },
                    { x: 15, y: 85, label: 'BL' },
                    { x: 50, y: 85, label: 'BC' },
                    { x: 85, y: 85, label: 'BR' },
                  ].map(pos => (
                    <button
                      key={pos.label}
                      onClick={() => saveToHistory({ ...watermark, x: pos.x, y: pos.y })}
                      className={`w-8 h-8 rounded-lg text-[8px] font-bold transition-all ${
                        Math.abs(watermark.x - pos.x) < 5 && Math.abs(watermark.y - pos.y) < 5
                          ? 'bg-teal-500 text-black' 
                          : 'bg-white/5 text-white/40 hover:bg-white/10'
                      }`}
                    >
                      {pos.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <button 
                onClick={exportImage}
                disabled={!image || isExporting}
                className="w-full py-3.5 rounded-xl bg-teal-500 text-black font-bold text-[10px] uppercase tracking-[0.2em] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-teal-400 transition-colors"
              >
                {isExporting ? 'Generating...' : 'Download PNG'}
              </button>
              {image && (
                <button 
                  onClick={resetImage}
                  className="w-full mt-2 py-3 rounded-xl bg-white/5 text-white/40 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
                >
                  Start Over
                </button>
              )}
            </div>

            <p className="text-[9px] text-white/20 mt-6 leading-relaxed">
              Images are processed locally. Nothing is uploaded or stored.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col min-h-[500px]">
          {!image ? (
            <div 
              className={`flex-1 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center p-12 transition-all duration-300 ${
                isDragging ? 'border-teal-500 bg-teal-500/5' : 'border-white/10 bg-white/[0.02]'
              }`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m0 0l3-3m-3 3l-3-3M8 17H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Drop your image here</h3>
              <p className="text-xs text-white/30 mb-8">PNG, JPG, WEBP, GIF supported</p>
              
              <button 
                onClick={() => fileInputRef.current.click()}
                className="px-8 py-3 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Select File
              </button>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
              
              <div className="flex items-center gap-4 my-6">
                <div className="h-px w-16 bg-white/10" />
                <span className="text-[10px] text-white/30 uppercase">or</span>
                <div className="h-px w-16 bg-white/10" />
              </div>
              
              <div className="flex gap-2 w-full max-w-sm">
                <input 
                  type="url" 
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Paste image URL"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-xs outline-none focus:border-teal-500/50 transition-colors"
                />
                <button 
                  onClick={handleImageUrl}
                  disabled={!imageUrl}
                  className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest disabled:opacity-30 hover:bg-white/10 transition-colors"
                >
                  Load
                </button>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col"
            >
              <div ref={containerRef} className="flex-1 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden flex items-center justify-center relative p-6">
                <canvas 
                  ref={canvasRef}
                  className="max-w-full max-h-full object-contain cursor-crosshair"
                  onMouseDown={handleCanvasMouseDown}
                  onMouseMove={handleCanvasMouseMove}
                  onMouseUp={handleCanvasMouseUp}
                  onMouseLeave={handleCanvasMouseUp}
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-[9px] text-white/40 uppercase tracking-widest">
                  Click to position
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4 px-2">
                <span className="text-[10px] text-white/20 uppercase tracking-widest">Ready for export</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">Live Preview</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <footer className="border-t border-white/5 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">Cortisol Protocol Studio</p>
          <p className="text-[10px] text-white/10 uppercase tracking-widest">Not financial advice</p>
        </div>
      </footer>
    </div>
  )
}

export default Studio
