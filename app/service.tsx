"use client";

import Navbar from "./navbar";

export default function Service() {
  return (
    <div id="service">
      <div className={`flex item-center justify-center w-full py-5 h-screen`}>
        <div className={`w-[80%] flex flex-col justify-between gap-x-4`}>
          <div
            className={`flex items-center justify-center text-2xl font-bold animate-bounce`}
          >
            <h1>My Services</h1>
          </div>
          <div className={`flex gap-4 justify-between h-[80%] `}>
            <div
              className={`bg-slate-900 hover:bg-blue-900 px-3 flex flex-col items-center justify-center`}
            >
              <img
                src="/nr.png"
                width="260"
                height="200"
                className={`hover:animate-bounce`}
              ></img>
              <p>
                Ensuring websites look and work well across different devices
                (mobile, tablet, desktop) by using responsive frameworks (like
                Bootstrap) or media queries.Making sure the website behaves
                consistently across all major web browsers (Chrome, Firefox,
                Safari, Edge, etc.).
              </p>
            </div>
            <div
              className={`bg-slate-900 hover:bg-blue-900 px-3 flex flex-col items-center justify-center`}
            >
              <img
                src="/nt.png"
                width="260"
                height="200"
                className={`hover:animate-bounce`}
              ></img>
              <p>
                Minimizing loading times by optimizing images, lazy loading,
                minifying CSS/JS, and implementing code-splitting. Ensuring that
                websites are accessible to all users, including people with
                disabilities, by following accessibility guidelines (e.g.,
                WCAG).
              </p>
            </div>
            <div
              className={`bg-slate-900 hover:bg-blue-900 px-3 flex flex-col items-center justify-center`}
            >
              <img
                src="/na.png"
                width="260"
                height="200"
                className={`hover:animate-bounce`}
              ></img>
              <p>
                CSS animations and transitions: Adding visual effects and
                animations to improve user engagement. JavaScript/jQuery
                animations: Creating interactive elements like sliders,
                carousels, modals, and pop-up features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
