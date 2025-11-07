import { CheckCircle2, Flame, MessageCircle, PlayCircle, Trophy } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-14">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Continue Roadmap</h3>
              <span className="text-sm text-slate-500">Web Developer • 32%</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {['Foundations','Tools','Projects'].map((t, i) => (
                <div key={t} className={`rounded-xl p-4 border ${i<1? 'border-teal-300 bg-teal-50':'border-slate-200 bg-slate-50'}`}>
                  <p className="text-sm text-slate-600">Stage</p>
                  <p className="font-medium">{t}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-sky-500 to-teal-500">
                <PlayCircle className="h-4 w-4" /> Next step
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white">
                <MessageCircle className="h-4 w-4 text-slate-600" /> Ask AI Mentor
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
            <h3 className="text-lg font-semibold">Upcoming Projects</h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {[
                {title:'Portfolio Landing', xp: 120},
                {title:'Todo App w/ API', xp: 180},
              ].map((p) => (
                <div key={p.title} className="rounded-xl border border-slate-200 p-4">
                  <p className="font-medium">{p.title}</p>
                  <p className="text-sm text-slate-500">Earn {p.xp} XP • Beginner</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Today's Task</h3>
              <span className="text-xs text-slate-500">15 min</span>
            </div>
            <p className="text-slate-600 mt-1">Practice: CSS selectors</p>
            <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-gradient-to-r from-sky-500 to-teal-500" />
            </div>
            <button className="mt-4 inline-flex items-center gap-2 text-teal-700 hover:text-teal-800">
              <CheckCircle2 className="h-4 w-4" /> Mark as done
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Streak</p>
                <p className="font-semibold">5 days 🔥</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-sky-200 via-teal-200 to-purple-200 flex items-center justify-center">
                <span className="text-slate-700 font-semibold">320 XP</span>
              </div>
              <div className="text-sm text-slate-600">
                <p>Keep it up! You're growing every day.</p>
                <button className="mt-2 inline-flex items-center gap-2 text-sky-700">
                  <Trophy className="h-4 w-4" /> View badges
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
