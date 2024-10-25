"use client";

import { useState } from "react";
import Navbar from "./navbar";

export default function About() {
  const [skillShow, setSkillShow] = useState(true);
  const [expShow, setExpShow] = useState(false);
  const [eduShow, setEduShow] = useState(false);
  return (
    <div id="about">
      <div className={`flex item-center justify-center w-full py-5 h-screen`}>
        <div className={`w-[80%] flex justify-between gap-x-14`}>
          <div
            className={`bg-slate-900 w-[30%] flex items-center justify-center`}
          >
            <img src="/new.jpg" className={`w-[100%] h-full`} />
          </div>

          <div className={`w-[60%]`}>
            <div
              className={`flex items-center justify-center font-bold text-2xl mb-4 animate-bounce`}
            >
              <h1>About Me</h1>
            </div>

            <div className={` `}>
              <p>
                Precious is a frontend developer with expertise in modern web
                technologies, including React, JavaScript, Next.js, and
                TypeScript. With a strong foundation in building dynamic and
                responsive user interfaces, Precious leverages these tools to
                create efficient, scalable, and maintainable web applications.
                Skilled in both JavaScript and TypeScript, Precious is adept at
                developing complex frontend solutions, ensuring high performance
                and seamless user experiences across platforms.
              </p>
            </div>

            <div className={`flex item-center mt-4 gap-x-5`}>
              <button
                className={`hover:text-blue-300`}
                onClick={() => {
                  setSkillShow(true);
                  setEduShow(false);
                  setExpShow(false);
                }}
              >
                Skills
              </button>
              <button
                className={`hover:text-blue-300`}
                onClick={() => {
                  setExpShow(true);
                  setSkillShow(false);
                  setEduShow(false);
                }}
              >
                Experience
              </button>

              <button
                className={`hover:text-blue-300`}
                onClick={() => {
                  setEduShow(true);
                  setExpShow(false);
                  setSkillShow(false);
                }}
              >
                Education
              </button>
            </div>
            <div className={`flex item-center  mt-4 `}>
              {skillShow && (
                <div>
                  <div className={`mt-2 text-xs`}>
                    <h1 className={`text-red-700`}>Tools</h1>
                    <p>Javascript,TypeScript,React,Next.Js,Tailwindcss,Css</p>
                  </div>

                  <div className={`mt-2 text-xs`}>
                    <h1 className={`text-red-700`}>Web Development</h1>
                    <p>Frontend Developer</p>
                  </div>
                  <div className={`mt-2 text-xs`}>
                    <h1 className={`text-red-700`}>Application</h1>
                    <p>Web Development</p>
                  </div>
                </div>
              )}

              {expShow && (
                <div>
                  <div className={`mt-2 text-xs`}>
                    <h1 className={`text-red-700`}>First Quater</h1>
                    <p>HTML, CSS</p>
                  </div>

                  <div className={`mt-2 text-xs`}>
                    <h1 className={`text-red-700`}>Second Quater</h1>
                    <p>JavaScript, React, Git</p>
                  </div>
                  <div className={`mt-2 text-xs`}>
                    <h1 className={`text-red-700`}>Third Quater</h1>
                    <p>TypeScript, Next.js, Github</p>
                  </div>
                </div>
              )}

              {eduShow && (
                <div>
                  <div className={`mt-2 text-xs`}>
                    <h1 className={`text-red-700`}>2020</h1>
                    <p>Bachelor Degree in Delta State University</p>
                  </div>

                  <div className={`mt-2 text-xs`}>
                    <h1 className={`text-red-700`}>2022</h1>
                    <p>Programming</p>
                  </div>
                  <div className={`mt-2 text-xs`}>
                    <h1 className={`text-red-700`}>2023</h1>
                    <p>Frontend Development</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
