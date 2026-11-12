import HeroSection from "./componentes/sections/HeroSection"
import AboutSection from "./componentes/sections/AboutSection"
import ProjectsSection from "./componentes/sections/ProjectsSection"
import Header from "./componentes/layout/Header"
import Footer from "./componentes/layout/Footer"


function App() {
  return (
    <>
      <section className="bg-background w-full h-auto min-h-screen flex justify-center px-2 md:px-0">
        <div className="bg-divider w-full md:w-[70%] min-h-screen border-0 md:border border-divider flex flex-col gap-px">

          <Header />

          <HeroSection />
          <AboutSection />
          <ProjectsSection />

          <Footer />
        </div>
      </section>
    </>
  )
}

export default App
