import './App.css'
import DaftarSuratComp from './components/DaftarSuratComp'
import FeatureSection from './components/FeatureSection'
import FooterComp from './components/FooterComp'
import NavbarComp from './components/NavbarComp'
import SuratPopulerComp from './components/SuratPopulerComp'

function App() {
  return (
    <div className="min-h-screen ">
        <NavbarComp />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-10">
        <section className="bg-white rounded-xl shadow-md p-6 md:p-10">
          <FeatureSection />
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10">
          <SuratPopulerComp />
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10">
          <DaftarSuratComp />
        </section>
      </main>

      <footer className="bg-green-600 text-white mt-16 shadow-inner">
        <FooterComp />
      </footer>
    </div>
  );
}

export default App