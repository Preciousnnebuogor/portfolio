"use client";

import About from "./about";
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
    </div>
  );
}
