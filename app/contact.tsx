"use client";
import { CgMail } from "react-icons/cg";
import { HiPhone } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Navbar from "./navbar";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const scriptURL =
    process.env.REACT_APP_GOOGLE_SCRIPT_URL || "https://fallback-url.com";
    
    // const form = document.forms["submit-to-google-sheet"];

  const onSubmit = (e:any) => {
    e.preventDefault();
    console.log("Script URL:", scriptURL);
    if (!scriptURL) {
    console.error("Missing scriptURL! Check your environment variable.");
    return; // Stop the function if the URL is not valid.
    // e.preventDefault();
    }
    axios
      .post(scriptURL, {
        name,
        email,
        message,
      })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
  };
  return (
    <div id="contact">
      <div
        className={`flex item-center justify-center w-full py-5 h-screen mt-4`}
      >
        <div className={`w-[80%] flex flex-col justify-between gap-x-4`}>
          <div className={`flex items-center justify-between`}>
            <div className={`w-[40%] mt-0 pt-0 h-full`}>
              <div
                className={`flex flex-col items-center justify-center mb-14`}
              >
                <p className={`font-bold text-3xl animate-bounce`}>
                  Contact Me
                </p>
              </div>

              <div className={`flex items-center justify-start gap-2 mb-7`}>
                <CgMail className={`text-red-700`} />
                <a
                  href="osemekepreciousnnebuogor@gmail.com"
                  className={`hover:text-red-700 text-xs`}
                >
                  osemekepreciousnnebuogor@gmail.com
                </a>
              </div>
              <div className={`flex items-center justify-start gap-2 mb-7`}>
                <HiPhone className={`text-red-700`} />
                <p className={`hover:text-red-700 text-xs`}>
                  +234 8011 058 4931
                </p>
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
                <form onSubmit={onSubmit}>

              <input
                placeholder="Your Name"
                type="text"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={`w-full p-2 outline-none bg-slate-900 mb-3`}
              />
              <input
                placeholder="Your Email"
                type="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full p-2 outline-none bg-slate-900 mb-3`}
              />
              <textarea
                placeholder="Your Message"
                name="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={`w-full p-2 outline-none bg-slate-900 mb-3 h-[200px]`}
              />
              <button
                className={`mt-4 p-3 rounded  transition ease-in-out delay-150
                 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 `}>
                Submit
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
