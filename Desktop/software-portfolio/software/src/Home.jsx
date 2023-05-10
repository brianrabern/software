import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiGooglescholar,
  SiMongodb,
  SiFastapi,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiDaisyui,
  SiSvg,
  SiBootstrap,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import bdr2 from "./bdr2.png";

export default function Home() {
  return (
    <main className="px-10">
      <section>
        <nav className="py-8 mb-12 flex justify-between items-center">
          <ul className="justify-end">
            <li>
              {" "}
              <input
                data-set-theme="business"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
              <input
                data-set-theme="coffee"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
              <input
                data-set-theme="dark"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
              <input
                data-set-theme="black"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
              <input
                data-set-theme="cyberpunk"
                data-act-class="ACTIVECLASS"
                type="radio"
                name="theme"
                className="radio"
              />
              <input
                data-set-theme="bumblebee"
                data-act-class="ACTIVECLASS"
                t
                type="radio"
                name="theme"
                className="radio"
              />
            </li>
          </ul>
          <ul className="flex">
            <li className="bg-secondary px-4 py-2 rounded-full ml-8 text-sm text-default">
              <Link to="/resume">resume</Link>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-primary font-medium">
            Brian Rabern
          </h2>
          <h3 className="text-2xl py-2">
            <code className="h-10 flex items-center justify-center text-info">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("01110011 01101111")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("software engineer")

                    .start();
                }}
              />
            </code>
          </h3>
          <p className="text-lg leading-8 text-accent">
            With ten years of experience as a philosophy and logic professor
            using formal methods to model meaning and human communication, I’m
            now applying my skills to the technology sector. I bring a unique
            perspective to the development process where I create products that
            are not only functional but also deeply meaningful to users.
          </p>
        </div>

        <div className="flex relative bg-base-300 rounded-full w-62 h-40 overflow-hidden">
          <img src={bdr2} alt="Brian Rabern" />{" "}
          <div className="px-10 text-4xl flex flex-wrap justify-center items-center gap-4 py-3 text-accent">
            <a href="https://github.com/brianrabern">
              <AiFillGithub className="hover:text-purple-500" />
            </a>
            <a href="https://gitlab.com/brianrabern">
              <AiFillGitlab className="hover:text-warning" />
            </a>
            <a href="https://linkedin.com/in/brian-rabern">
              {" "}
              <AiFillLinkedin className="hover:text-blue-500" />
            </a>
            <a href="https://scholar.google.com/citations?user=vzRA2EMAAAAJ&hl=en">
              <SiGooglescholar className="hover:text-green-500" />
            </a>
            <a href="https://twitter.com/brian_rabern">
              <AiFillTwitterCircle className="hover:text-info" />
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div>
          <h3 className="text-2xl py-2">
            <code className="h-10 flex items-center justify-center text-info">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .pauseFor(5000)
                    .deleteAll()
                    .typeString("projects")

                    .start();
                }}
              />
            </code>
          </h3>

          <p className="flex items-center justify-center py-2 text-lg leading-8 text-accent">
            Below are some of the projects I've worked on recently.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10 bg-secondary flex-1">
            <h3 className="text-default text-2xl font-medium pb-2">MunroGo</h3>
            <div className="mb-2 text-warning">
              [<a href="https://gitlab.com/elijahram/munro-go">code</a>] [
              <a href="https://elijahram.gitlab.io/munro-go">live</a>]
            </div>
            <iframe
              src="https://www.youtube.com/embed/WH_QtAKQunQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-80"
            ></iframe>

            <p className="py-2 text-default mt-3">
              A mountain-climbing app that allows users to log and track climbs
              and statistics using FastAPI and React.
            </p>
            <div className="justify-end items-center text-2xl flex space-x-4 text-default flex-wrap mt-3">
              <SiPython />
              <SiJavascript />
              <SiMongodb />
              <SiFastapi />
              <SiReact />
              <SiRedux />
              <SiTailwindcss />
              <SiDaisyui />
            </div>
          </div>
          <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10  bg-secondary flex-1">
            <h3 className="text-default text-2xl font-medium pb-2">
              vennPlayground
            </h3>
            <div className="mb-2 text-warning">
              [<a href="https://github.com/brianrabern/vennPlayground">code</a>]
              [<a href="https://brianrabern.github.io/vennPlayground/">live</a>]
            </div>
            <iframe
              src="https://youtube.com/embed/WQIxw2IvQTI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-80"
            ></iframe>

            <p className="py-2 text-default mt-3">
              An interface for generating and semantically evaluating Venn
              Diagrams utilizing React components and SVG technology.
            </p>
            <div className="justify-end items-center text-2xl flex space-x-4 text-default flex-wrap mt-3">
              <SiSvg />
              <SiJavascript />
              <SiHtml5 />
              <FaCss3 />
              <SiBootstrap />
              <SiReact />
            </div>
          </div>
          <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10  bg-secondary flex-1">
            <h3 className="text-default text-2xl font-medium pb-2">
              Hofstadter's MU Playground
            </h3>
            <div className="mb-2 text-warning">
              [<a href="https://github.com/brianrabern/vennPlayground">code</a>]
              [<a href="https://brianrabern.github.io/vennPlayground/">live</a>]
            </div>
            <iframe
              src="https://youtube.com/embed/bu6oVyBziM0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-80"
            ></iframe>

            <p className="py-2 text-default mt-3">
              A user-friendly interface implementing the logic for Hofstadter’s
              proof system employing React components.
            </p>
            <div className="justify-end items-center text-2xl flex space-x-4 text-default flex-wrap mt-3">
              <SiReact />
              <SiJavascript />
              <SiHtml5 />
              <FaCss3 />
            </div>
          </div>
          <div className="justify-center text-center shadow-lg p-10 rounded-xl my-10  bg-secondary flex-1">
            <h3 className="text-default text-2xl font-medium pb-2">Elogic</h3>
            <div className="mb-2 text-warning">
              [<a href="https://info.elogic.land/">license info</a>]
            </div>
            <iframe
              src="https://youtube.com/embed/vuYXTmYnnaw"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-80"
            ></iframe>

            <p className="py-2 text-default mt-3">
              A web-based application for teaching the syntax and semantics of
              first-order logic, with multiple exercise environments including a
              symbolisation interface, a model evaluator, and a natural
              deduction environment for constructing proofs.
            </p>
            <div className="justify-end items-center text-2xl flex space-x-4 text-default flex-wrap mt-3">
              <SiTypescript />
              <SiReact />
              <SiTailwindcss />
              <SiFirebase />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10"></section>
    </main>
    // </div>
  );
}
