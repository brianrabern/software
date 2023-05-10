import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
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
  SiSvg,
  SiBootstrap,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiDjango,
} from "react-icons/si";
import { FaCss3, FaGlobe } from "react-icons/fa";
import { BsCaretDownSquareFill, BsCaretUpSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Resume = () => {
  const [isExpandedTech, setIsExpandedTech] = useState(false);
  const [isExpandedLinks, setIsExpandedLinks] = useState(false);

  const handleClick = () => {
    setIsExpandedTech(!isExpandedTech);
  };
  const handleClickLinks = () => {
    setIsExpandedLinks(!isExpandedLinks);
  };

  return (
    <main className="px-10">
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
            <Link to="/">home</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h2 className="text-3xl py-2 text-default font-medium">
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString("Brian Rabern, PhD")

                .start();
            }}
          />
        </h2>
        <div className="shadow-lg p-5 rounded-xl my-5 bg-accent flex-1">
          <p className="text-sm text-base-100 mb-1">Contact</p>
          <code className="px-5 text-base-100">brian.rabern@gmail.com</code>
          <br />
          <code className="px-5  text-base-100">
            <a href="https://brianrabern.net">brianrabern.net</a>
          </code>
          <p className="px-5 mt-2 text-base-100">541-672-4056</p>

          <p className="px-5 text-base-100">Bend, OR</p>
        </div>

        <div>
          <div className="text-2xl shadow-lg px-4 rounded-xl my-5 bg-info">
            <p className="text-sm text-accent-focus py-5">Technical Skills</p>
            <div className="flex space-x-4 py-3 px-5 text-accent-focus">
              <SiPython />
              <SiJavascript />
              <SiFastapi />
              <SiDjango />
              <SiMongodb />
              <SiPostgresql />
              <SiSvg />
              <SiDocker />
            </div>
            <div className="flex space-x-4 py-3 px-5 text-accent-focus">
              <SiReact />
              <SiRedux />
              <SiHtml5 />
              <FaCss3 />
              <SiTailwindcss />
              <SiBootstrap />
              <SiGit />
            </div>
            <button className="justify-end mt-5" onClick={handleClick}>
              {isExpandedTech ? (
                <BsCaretUpSquareFill className="text-accent-focus bg-info text-sm" />
              ) : (
                <BsCaretDownSquareFill className="text-accent-focus bg-info text-sm" />
              )}
            </button>

            {isExpandedTech && (
              <div className="text-lg text-accent-focus px-10 py-3">
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>FastAPI</li>
                  <li>Django</li>
                  <li>MongoDB</li>
                  <li>SQL</li>
                  <li>SVG</li>
                  <li>Docker</li>
                  <li>Git</li>
                  <li>React</li>
                  <li>Redux Toolkit</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Tailwind</li>
                  <li>LaTeX</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="text-2xl shadow-lg px-4 rounded-xl my-5 bg-accent">
            <p className="text-sm text-base-300 py-5">
              Socials and Repositories
            </p>
            <div className="flex space-x-4 py-3 px-5 text-base-100">
              <AiFillGithub />
              <AiFillGitlab />
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <SiGooglescholar />
            </div>

            <button className="justify-end mt-5" onClick={handleClickLinks}>
              {isExpandedLinks ? (
                <BsCaretUpSquareFill className="text-base-100 bg-acccent text-sm" />
              ) : (
                <BsCaretDownSquareFill className="text-base-100 bg-accent text-sm" />
              )}
            </button>

            {isExpandedLinks && (
              <div className="text-lg text-base-100 px-10 py-3">
                <ul>
                  <li>
                    <a href="https://linkedin.com/in/brian-rabern">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://github.com/brianrabern">GitHub</a>
                  </li>

                  <li>
                    {" "}
                    <a href="https://gitlab.com/brianrabern">GitLab</a>
                  </li>

                  <li>
                    {" "}
                    <a href="https://scholar.google.com/citations?user=vzRA2EMAAAAJ&hl=en">
                      GoogleScholar
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a href="https://philpeople.org/profiles/brian-rabern">
                      PhilPapers
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/brian_rabern">Twitter</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="py-5" />
      <section>
        <h2 className="text-xl font-medium text-accent ">
          Professional Experience
        </h2>

        {/* exper1 */}
        <div>
          <div className="py-3 px-5">
            <p className="font-medium text-default">
              Full Stack Engineer and Co-Founder
            </p>
            <p className=" text-gray-600">Elogic, Ltd.</p>
            <p className="text-gray-600">2020-present</p>
          </div>

          <ul className="px-10 list-disc text-gray-600">
            <li>
              Developed a web application for teaching the syntax and semantics
              of first-order logic, with multiple exercise environments
              including a symbolisation interface, a model evaluator, and an
              interface for constructing proofs.
            </li>
            <li>
              Deployed on Google Cloud Platform interfacing with the Z3 theorem
              prover.
            </li>
            <li>
              Licensed for use at major universities including Yale, Edinburgh,
              and Vassar.
            </li>
          </ul>
        </div>

        {/* exper2 */}
        <div>
          <div className="py-3 px-5">
            <p className="font-medium text-default">Professor</p>
            <p className=" text-gray-600">University of Edinburgh</p>
            <p className="text-gray-600">2013-present</p>
          </div>

          <ul className="px-10 list-disc text-gray-600">
            <li>Published 30+ articles in top-tier peer reviewed journals.</li>
            <li>
              Managed large teaching team for Symbolic Logic with 400+ students.
            </li>
            <li>
              Received award for Outstanding Innovation in Digital Teaching
              (2020).
            </li>
          </ul>
        </div>
      </section>
      {/* education */}
      <section>
        <h2 className="text-xl text-accent font-medium mt-5">Education</h2>

        {/* edu1 */}
        <div>
          <div className="py-3 px-5">
            <p className="font-medium text-default">
              Advanced Software Engineering Certificate.
            </p>
            <p className=" text-gray-600">Hack Reactor</p>
            <p className="text-gray-600">2023</p>
          </div>

          <ul className="px-10 list-disc text-gray-600">
            <li>
              Mastered domain-driven web development with JavaScript and Python.
              Constructed full-stack architectures with microservices and
              RESTful APIs.
            </li>
          </ul>
        </div>

        {/* edu2 */}
        <div>
          <div className="py-3 px-5">
            <p className="font-medium text-default">PhD, Philosophy</p>
            <p className=" text-gray-600">Australian National University,</p>
            <p className="text-gray-600">2012</p>
          </div>

          <ul className="px-10 list-disc text-gray-600">
            <li> Research: Philosophy of language and logic. </li>
            <li>
              Dissertation:{" "}
              <a href="https://philpapers.org/rec/BRIMAC-3">
                The semantics of contextual shifting and sensitivity.
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="py-3 px-5">
            <p className="font-medium text-default">MA, Philosophy</p>
            <p className=" text-gray-600">University of Colorado, Boulder</p>
          </div>
          <div className="py-3 px-5">
            <p className="font-medium text-default">BA, Philosophy</p>
            <p className=" text-gray-600">University of Oregon</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl text-accent font-medium mt-5">
          Recent Development Experience
        </h2>

        {/* app1*/}
        <div>
          <div className="py-3 px-5">
            <p className="font-medium text-default flex gap-3 items-center">
              MunroGo <AiFillGitlab className="hover:text-accent" />
              <FaGlobe className="hover:text-info" />
            </p>
            <p className="text-gray-600">
              A comprehensive guide to Scotland's 282 Munros that tracks climbs
              and statistics. Leveraged OpenWeather, Wikipedia, and GoogleMaps
              APIs for real-time weather conditions, images, and maps.
            </p>
          </div>

          <ul className="px-10 list-disc text-gray-600">
            <li>
              Python, JavaScript, FastAPI, React, Redux, MongoDB, Tailwind
            </li>
          </ul>
        </div>
        {/* app2*/}
        <div>
          <div className="py-3 px-5">
            <p className="font-medium text-default flex gap-3 items-center">
              vennPlayground <AiFillGithub className="hover:text-warning" />
              <FaGlobe className="hover:text-info" />
            </p>
            <p className="text-gray-600">
              An interface for generating and semantically evaluating Venn
              Diagrams with a proof-checker. Designed an intuitive and dynamic
              interface employing React components and SVG technology.
            </p>
          </div>

          <ul className="px-10 list-disc text-gray-600">
            <li>JavaScript, React, SVG, HTML5, CSS3, Bootstrap</li>
          </ul>
        </div>
        {/* app3*/}
        <div>
          <div className="py-3 px-5">
            <p className="font-medium text-default flex gap-3 items-center">
              MuPlayground
              <FaGlobe className="hover:text-info" />
            </p>
            <p className="text-gray-600">
              A user-friendly interface implementing the logic for Hofstadter’s
              proof system employing React components. Developed a gamified
              version of Hofstadter’s MIU-system as a single-page React
              application.
            </p>
          </div>

          <ul className="px-10 list-disc text-gray-600">
            <li>JavaScript, React, HTML5, CSS3</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl text-accent font-medium mt-5">
          Recent Publications
        </h2>
        {/* app1*/}
        <div>
          <div className="py-3 px-5">
            <p className="font-medium text-default flex gap-3 items-center">
              <a
                className="hover:text-info"
                href="https://doi.org/10.1007/s10992-022-09675-3"
              >
                Pure quotation in linguistic context
              </a>{" "}
            </p>
            <p className="text-gray-600">
              Journal of Philosophical Logic, (2023), 52: 393-413
            </p>
          </div>
          <div className="py-3 px-5">
            <p className="font-medium text-default flex gap-3 items-center">
              <a
                className="hover:text-info"
                href="https://doi.org/10.3765/sp.15.12"
              >
                Scorekeeping in a chess game
              </a>{" "}
            </p>
            <p className="text-gray-600">
              Semantics and Pragmatics, (2022), 15:12, (w/ B. Pickel).
            </p>
          </div>
          <div className="py-3 px-5">
            <p className="font-medium text-default flex gap-3 items-center">
              <a
                className="hover:text-info"
                href="https://doi.org/10.1080/0020174X.2018.1470568"
              >
                Binding bound variables in epistemic contexts
              </a>{" "}
            </p>
            <p className="text-gray-600">Inquiry, (2021), 64 (5-6): 533-563</p>
          </div>
          <div className="py-3 px-5">
            <p className="font-medium text-default flex gap-3 items-center">
              See all publications on my
              <a
                className="text-info hover:text-accent"
                href="https://philpeople.org/profiles/brian-rabern"
              >
                PhilPapers
              </a>{" "}
              profile
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
