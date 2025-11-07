import { Rocket, Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 via-teal-400 to-purple-400 blur-md opacity-60 rounded-full" />
            <div className="relative h-10 w-10 rounded-full bg-white shadow flex items-center justify-center">
              <Rocket className="h-5 w-5 text-sky-500" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight">RoadmapFinder</span>
              <Sparkles className="h-4 w-4 text-purple-500" />
            </div>
            <p className="text-xs text-slate-500 -mt-0.5">Your AI tech mentor</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100">Calm</span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100">Motivating</span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100">Beginner‑friendly</span>
        </div>
      </div>
    </header>
  )
}
