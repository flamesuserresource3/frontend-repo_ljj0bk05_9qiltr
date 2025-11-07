import Header from './components/Header'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-teal-50 to-purple-50 text-slate-900">
      <Header />
      <Hero />
      <DashboardPreview />
      <Footer />
    </div>
  )
}

export default App
