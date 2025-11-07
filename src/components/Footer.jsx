export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} RoadmapFinder · Friendly mentor + daily motivation</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="text-slate-600 hover:text-slate-900" href="#">Privacy</a>
          <a className="text-slate-600 hover:text-slate-900" href="#">Terms</a>
          <a className="text-slate-600 hover:text-slate-900" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
