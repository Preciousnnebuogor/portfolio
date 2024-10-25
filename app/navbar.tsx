"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className={``}>
      <div className={`flex items-center justify-between px-20 mt-4`}>
        <div>
          <p className={`text-2xl font-bold pl-16 animate-pulse`}>
            <span className={`text-blue-300 `}>P</span>recious
          </p>
        </div>

        <div className={`flex items-center justify-between pr-16 space-x-3`}>
          <a href="/">
            <h3 className={`hover:text-blue-300`}>Home</h3>
          </a>
          <Link href={'#about'}>
            <h3 className={`hover:text-blue-300`}>About</h3>
          </Link>
          <a href="#service">
            <h3 className={`hover:text-blue-300`}>Services</h3>
          </a>
          <a href="#contact">
            <h3 className={`hover:text-blue-300`}>Contact</h3>
          </a>
          <a href="#work">
            <h3 className={`hover:text-blue-300`}>Portfolio</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
