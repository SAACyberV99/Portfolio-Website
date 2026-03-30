import About from "@/components/About"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import Contact from "@/components/Contact"
import NavBar from "@/components/NavBar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <main className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[999] opacity-[0.04]"
      />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills /> 
      <Contact />
      <Footer />
    </main>
  );
}
