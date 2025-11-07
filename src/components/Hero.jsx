import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-gradient-to-br from-sky-200 via-teal-200 to-purple-200 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-gradient-to-br from-purple-200 via-sky-200 to-teal-200 rounded-full blur-3xl opacity-70" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center text-xs font-medium text-sky-700 bg-sky-50 rounded-full px-3 py-1 mb-4">New • AI Mentor built-in</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Your AI tech mentor to grow step-by-step
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Never feel lost. RoadmapFinder guides you with simple roadmaps, bite‑sized tasks, and friendly motivation. Learn at your pace with clear next steps.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-white bg-gradient-to-r from-sky-500 via-teal-500 to-purple-500 shadow hover:opacity-95 transition">
              Start my journey 🚀
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="px-5 py-3 rounded-full border border-slate-200 text-slate-700 bg-white/80 hover:bg-white shadow-sm">
              Explore roadmaps
            </button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex -space-x-2">
              <span className="h-6 w-6 rounded-full bg-sky-200 border border-white" />
              <span className="h-6 w-6 rounded-full bg-teal-200 border border-white" />
              <span className="h-6 w-6 rounded-full bg-purple-200 border border-white" />
            </div>
            <p>Trusted by beginners starting in web, data, and design</p>
          </div>
        </div>
        <div>
          <div className="rounded-2xl p-4 bg-white shadow-lg border border-slate-200">
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Foundations', color: 'from-sky-400 to-teal-400' },
                { title: 'Tools', color: 'from-teal-400 to-purple-400' },
                { title: 'Projects', color: 'from-purple-400 to-sky-400' },
                { title: 'Interview', color: 'from-sky-400 to-purple-400' },
              ].map((s) => (
                <div key={s.title} className="rounded-xl p-4 bg-gradient-to-br text-white shadow relative overflow-hidden">
                  <div className={`absolute inset-0 opacity-90 bg-gradient-to-br ${s.color}`} />
                  <div className="relative">
                    <p className="text-sm opacity-90">Stage</p>
                    <p className="font-semibold">{s.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">Today's Task</p>
                <p className="text-sm text-slate-500">15 min</p>
              </div>
              <p className="text-slate-600 mt-1">Watch: HTML basics and build a tiny page</p>
              <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-sky-500 to-teal-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
