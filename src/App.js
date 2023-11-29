import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Partners from "./Components/partners";
import Lenis from "@studio-freight/lenis";
import Testimonials from "./Components/testimonials";
import Achievement from "./Components/Achievement";
import { Footer } from "./Components/Footer";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      wheelMultiplier: 0.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Projects />
      <Achievement />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
