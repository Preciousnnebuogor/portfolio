"use client";
import { CgMail } from "react-icons/cg";
import { HiPhone } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";





export default function Contact() {
  return (
    <div
      className={`flex item-center justify-center w-full py-5 h-screen mt-4`}
    >
      <div className={`w-[80%] flex flex-col justify-between gap-x-4`}>
        <div className={`flex items-center justify-between`}>
          <div className={`w-[40%] mt-0 pt-0 h-full`}>
            <div className={`flex flex-col items-center justify-center mb-14`}>
              <p className={`font-bold text-3xl animate-bounce`}>
                Contact Me
              </p>
            </div>

            <div className={`flex items-center justify-start gap-2 mb-7`}>
              <CgMail className={`text-red-700`} />
              <a
                href="osemekepreciousnnebuogor@gmail.com"
                className={`hover:text-red-700`}
              >
                osemekepreciousnnebuogor@gmail.com
              </a>
            </div>
            <div className={`flex items-center justify-start gap-2 mb-7`}>
              <HiPhone className={`text-red-700`} />
              <p className={`hover:text-red-700`}>+234 8011 058 4931</p>
            </div>
            <div className={`flex items-center justify-start gap-2 mb-7`}>
              <a href="https://x.com/Preciou24147291?t=JRMRhs3-zb0OaT9LyhTIPA&s=09">
                <FaDiscord className={`text-red-700 hover:animate-bounce`} />
              </a>
              <a href="https://www.linkedin.com/in/precious-osemeke-932b81223">
                <FaLinkedin className={`text-red-700 hover:animate-bounce`} />
              </a>
              <a href="https://www.facebook.com/precious.osemeke?mibextid=ZbWKwL">
                <FaFacebook className={`text-red-700 hover:animate-bounce`} />
              </a>
              <a href="https://github.com/Preciousnnebuogor">
                <FaGithub className={`text-red-700 hover:animate-bounce`} />
              </a>

              <a href="https://x.com/Preciou24147291">
                <FaXTwitter className={`text-red-700 hover:animate-bounce`} />
              </a>
            </div>
            <a href={"/Resume.pdf"} download={"Resume.pdf"}>
              <button
                className={`mt-4 p-3 rounded  transition ease-in-out delay-150
                 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 `}
              >
                Download CV
              </button>
            </a>
          </div>

          <div className={`w-[60%]`}>
            <input
              placeholder="Your Name"
              type="text"
              required
              className={`w-full p-2 outline-none bg-slate-900 mb-3`}
            />
            <input
              placeholder="Your Email"
              type="email"
              required
              className={`w-full p-2 outline-none bg-slate-900 mb-3`}
            />
            <textarea
              placeholder="Your Message"
              required
              className={`w-full p-2 outline-none bg-slate-900 mb-3 h-[200px]`}
            />
            <button
              className={`mt-4 p-3 rounded  transition ease-in-out delay-150
                 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 `}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
