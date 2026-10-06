import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";

export default function Home() {
  const location = useLocation();

  // Nav links arrive as /#section, including from project pages
  useEffect(() => {
    document.title = "Zahra Elair | AI Software Engineer";
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView();
    }
  }, [location.hash, location.key]);

  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
    </main>
  );
}
