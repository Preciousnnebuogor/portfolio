"use client"

import { useState } from "react";

export default function Work(){
    const [showless, setShowless] = useState(false);
    return (
      <div id="work">
        <div
          className={`flex item-center justify-center w-full py-5 h-screen mt-4`}
        >
          <div className={`w-[80%] flex flex-col justify-between gap-x-4`}>
            <div
              className={`flex items-center justify-center text-2xl font-bold animate-bounce`}
            >
              <p>My Work</p>
            </div>
            {showless ? (
              <div className={`flex gap-4 justify-between h-[80%] `}>
                <div
                  className={`bg-slate-900 hover:bg-blue-900 px-3 flex flex-col items-center justify-center hover:animate-pulse`}
                >
                  <img src="/homed.png" width="220" height="50"></img>
                </div>
                <div
                  className={`bg-slate-900 hover:bg-blue-900 px-3 flex flex-col items-center justify-center hover:animate-pulse`}
                >
                  <img src="/imga.jpg" width="260" height="50"></img>
                </div>
                <div
                  className={`bg-slate-900 hover:bg-blue-900 px-3 flex flex-col items-center justify- hover:animate-pulse`}
                >
                  <img src="/img1.png" width="220" height="50"></img>
                </div>{" "}
              </div>
            ) : (
              <div className={`flex gap-4 justify-between h-[80%] `}>
                <div
                  className={`bg-slate-900 hover:bg-blue-900 px-3 flex flex-col items-center justify-center hover:animate-pulse`}
                >
                  <img src="/a copy.png" width="220" height="10"></img>
                </div>

                <div
                  className={`bg-slate-900 hover:bg-blue-900 px-3 flex flex-col items-center justify-center hover:animate-pulse`}
                >
                  <img src="/imgb.jpg" width="260" height="50"></img>
                </div>
                <div
                  className={`bg-slate-900 hover:bg-blue-900 px-3 flex flex-col items-center 
                    justify-center hover:animate-pulse`}
                >
                  <img src="/img2.png" width="220" height="50"></img>
                </div>
              </div>
            )}

            <div className={` flex items-center justify-center mt-4`}>
              <button
                className={`mb-2 p-2 rounded  transition ease-in-out 
                delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300`}
                onClick={() => {
                  if (!showless) {
                    setShowless(true);
                  } else {
                    setShowless(false);
                  }
                }}
              >
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}