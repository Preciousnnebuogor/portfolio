"use client";
import { FaBackward } from "react-icons/fa6";
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
      <About />
      <Service />
      <Work />
      <Contact />

      <a href={"/"}>
        <button
          className={`mb-2 p-2 rounded-full  transition ease-in-out fixed bottom-[20px] right-[20px]
        delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300`}
        >
          <FaBackward />
        </button>
      </a>
    </div>
  );
}
