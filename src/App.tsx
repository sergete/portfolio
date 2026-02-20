import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { Languages } from "@/components/sections/Languages";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="h-[100svh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background text-foreground transition-colors duration-300">
        <Hero />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Languages />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
