"use client";
export default function Navbar() {
  return (
    <div className={``}>
      <div className={`flex items-center justify-between px-20 mt-4`}>
        <div>
          <p className={`text-2xl font-bold pl-16`}>
            <span className={`text-blue-300 `}>P</span>recious
          </p>
        </div>

        <div className={`flex items-center justify-between pr-16 space-x-3`}>
          <h3 className={`hover:text-blue-300`}>Home</h3>
          <h3 className={`hover:text-blue-300`}>About</h3>
          <h3 className={`hover:text-blue-300`}>Services</h3>
          <h3 className={`hover:text-blue-300`}>portfolio</h3>
          <h3 className={`hover:text-blue-300`}>Contact</h3>
        </div>
      </div>
    </div>
  );
}
