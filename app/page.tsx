"use client";

import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Navbar from "./navbar";
import Service from "./service";
import Work from "./work";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Service/>
      <Work/>
      <Contact/>
    </div>
  );
}
