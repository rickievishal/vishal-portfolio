import Lenis from "lenis";
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  Variants,
} from "framer-motion";
import { TbMenu } from "react-icons/tb";
import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import GradualBlur from "../Components/GradualBlur/GradualBlur";
import { CgClose } from "react-icons/cg";
import react from "../assets/images/reactIcon.svg";
import mongo from "../assets/images/MongoDBLogo.png";
import node from "../assets/images/nodejs.png";
import emoji from "../assets/images/hero-emoji.png";
import texture from "../assets/images/photoTexture.jpg";
import CurvedLoop from "../Components/CurvedLoop/CurvedLoop";
import fireProject from "../assets/images/fireProject.png";
import docker from "../assets/images/dockerLogo.png";

const HomePage = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const stacks = [react, mongo, node, docker];
  useEffect(() => {
    const cursormove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", cursormove);
    return () => {
      window.removeEventListener("mousemove", cursormove);
    };
  }, []);
  // Easing function for smooth scroll (ease in and out)
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  // Custom scroll-to-top function
  const scrollToTop = () => {
    const start = window.scrollY;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const duration = 1000; // Adjust this value for speed

    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const scrollDistance = easeInOutQuad(timeElapsed / duration) * start;

      window.scrollTo(0, start - scrollDistance);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const variants = {
    default: {
      x: cursorX,
      y: cursorY,
      backgroundColor: "rgb(230,230,230,0.5)",
      scale: 1,
      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        backgroundColor: { duration: 0 },
        mixBlendMode: { duration: 0.3 },
        scale: { duration: 0.4, ease: "easeInOut" }, // Smooth scale
      },
    },
    texthoverphone: {
      x: cursorX,
      y: cursorY,
      scale: 5,
      mixBlendMode: "difference", // Adjust mixBlendMode value here
      backgroundColor: "#FF145C",
      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        mixBlendMode: { duration: 0 },
        scale: { duration: 0.5, ease: "easeInOut" },
      },
    },
    texthoverdiscord: {
      x: cursorX,
      y: cursorY,
      scale: 5,
      mixBlendMode: "difference",
      backgroundColor: "#5166EE",
      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        mixBlendMode: { duration: 0 },
        scale: { duration: 0.5, ease: "easeInOut" },
      },
    },
    texthovertwitter: {
      x: cursorX,
      y: cursorY,
      scale: 5,
      mixBlendMode: "difference",
      backgroundColor: "white",
      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        mixBlendMode: { duration: 0 },
        scale: { duration: 0.5, ease: "easeInOut" },
      },
    },
    texthoverlinkedin: {
      x: cursorX,
      y: cursorY,
      scale: 5,
      mixBlendMode: "difference",
      backgroundColor: "#0067BF",
      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        mixBlendMode: { duration: 0 },
        scale: { duration: 0.5, ease: "easeInOut" },
      },
    },
    textenter: {
      x: cursorX,
      y: cursorY,
      backgroundColor: "#FF145C",

      mixBlendMode: "difference",
      scale: 5,
      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        mixBlendMode: { duration: 0 },
        scale: { duration: 0.2, ease: "easeInOut" },
      },
    },
    projectenter: {
      x: cursorX,
      y: cursorY,
      backgroundColor: "pink",
      mixBlendMode: "difference",
      scale: 4,
      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        mixBlendMode: { duration: 0 },
        scale: { duration: 0.2, ease: "easeInOut" },
      },
    },
  };

  const setvarient = (varientname) => {
    setVarientname(varientname);
  };
  const [varientname, setVarientname] = useState("default");

  return (
    <section
      className="tracking-tighter"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <GradualBlur
        target="page"
        position="top"
        height="8rem"
        strength={1}
        divCount={10}
        curve="bezier"
        exponential={true}
        opacity={1}
        className="z-[0px]"
      />
      <GradualBlur
        target="page"
        position="bottom"
        height="8rem"
        strength={1}
        divCount={10}
        curve="bezier"
        exponential={true}
        opacity={1}
        className="z-[0px]"
      />
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ "--blur": "0px" }}
              animate={{ "--blur": "20px" }}
              exit={{ "--blur": "0px" }}
              transition={{ duration: 0.6, ease: "circInOut" }}
              style={{
                backdropFilter: "blur(var(--blur))",
                WebkitBackdropFilter: "blur(var(--blur))", // Safari support
              }}
              className="w-screen h-screen fixed top-0 left-0 z-[60]"
            >
              <motion.div
                initial={{ scale: 3, opacity: 0, filter: "blur(20px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                exit={{ scale: 3, opacity: 0, filter: "blur(20px)" }}
                transition={{ duration: 0.6, ease: "circInOut" }}
                className="mx-auto max-w-lg w-full h-full"
              >
                <div className="w-full h-full py-[50px] px-4">
                  <div className="flex justify-end items-end">
                    <CgClose
                      className="text-white text-[30pt]"
                      onClick={() => {
                        setIsMenuOpen(false);
                        document.body.style.overflow = "auto";
                      }}
                    />
                  </div>
                  <ol className="w-full flex flex-col ">
                    <li className="text-white text-[30pt]">
                      <p className="text-left">Resume</p>
                    </li>
                    <li className="text-white text-[30pt]">
                      <p className="text-left">Home</p>
                    </li>
                    <li className="text-white text-[30pt]">
                      <p className="text-left">Home</p>
                    </li>
                  </ol>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="w-screen min-h-screen flex flex-col relative overflow-hidden text-white">
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            position: "fixed", // fixed relative to viewport, not parent
            borderRadius: "9999px",
            width: "32px",
            height: "32px",
            pointerEvents: "none", // ensures the fake cursor doesn’t block real hover
          }}
          animate={varientname}
          variants={{
            default: {
              backgroundColor: "rgba(230,230,230,0.5)",
              scale: 1,
            },
            textenter: {
              backgroundColor: "#FF145C",
              mixBlendMode: "difference",
              scale: 4,
            },
            texthoverphone: {
              backgroundColor: "#FF145C",
              scale: 5,
              mixBlendMode: "difference",
            },
            texthoverdiscord: {
              backgroundColor: "#5166EE",
              scale: 5,
              mixBlendMode: "difference",
            },
            texthovertwitter: {
              backgroundColor: "white",
              scale: 5,
              mixBlendMode: "difference",
            },
            texthoverlinkedin: {
              backgroundColor: "#0067BF",
              scale: 5,
              mixBlendMode: "difference",
            },
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 15,
          }}
          className="z-[60] lg:block hidden"
        />

        <div
          className="fixed top-0 w-full flex items-center justify-center px-4 py-2 z-[20]"
          style={{ zIndex: 50 }}
        >
          <nav
            className="max-w-7xl w-full h-[55px] flex items-center justify-between px-[7px] py-[7px] rounded-r-full rounded-l-full border-[1px] border-white/10 backdrop:blur-3xl z-[30] backdrop-saturate-[200%] bg-[rgba(139,139,139,0.22)]"
            style={{ zIndex: 50 }}
          >
            <ul>
              <li className="px-[7px]">itsmevishal.dev</li>
            </ul>
            <ol className="block lg:hidden">
              <TbMenu
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  setIsMenuOpen(true);
                }}
                className="text-[20pt] mx-[7px]"
              />
            </ol>
            <ol className="flex gap-x-2 h-full hidden lg:flex">
              <li className="h-full bg-[rgba(159,159,159,0.42)] rounded-r-full rounded-l-full border-[1px] border-[rgb(189,189,189)] border-t-[rgb(143,143,143)] border-b-0 backdrop-saturate-200 hover:bg-[rgba(205,205,205,0.42)] transition-all duration-300 ease-in-out">
                <button className="h-full flex flex-row items-center justify-center px-[15px]">
                  <GoDownload className="mr-2" /> Resume
                </button>
              </li>
            </ol>
          </nav>
        </div>

        <section className="w-full min-h-[calc(80vh-150px)] max-w-7xl mx-auto mt-[70px] lg:mt-[150px] py-20 flex flex-col justify-start items-center">
          {/* <div className=" text-white text-[80pt] leading-[80pt]">👨🏾‍💻</div> */}
          <div className="w-[120px]">
            <img className="w-full" src={emoji} alt="" />
          </div>
          <div
            className="text-white text-[50pt] hidden sm:block  font-thin"
            onMouseEnter={() => setvarient("textenter")}
            onMouseLeave={() => setvarient("default")}
          >
            வணக்கம்.ನಮಸ್ಕಾರ.hello
          </div>
          <div
            className="text-white text-[40pt] block sm:hidden  font-thin"
            onMouseEnter={() => setvarient("textenter")}
            onMouseLeave={() => setvarient("default")}
          >
            Hello
          </div>
          <div className="text-white text-lg pop  flex flex-col justify-center items-center">
            <p className="font-thin text-[13pt]">hey there im Vishal</p>
            <p className="w-[300px] text-center text-sm mt-2 font-thin">
              Nextjs | nodejs | electronics | brand pursuing Electronics and
              Communications Engineering @MEPCO frontend dev @esubaleka.com{" "}
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-white pop font-thin mt-[50px]">
            <div>Stacks</div>
            <div className="w-full flex justify-center items-center mt-8 gap-x-3">
              {stacks.map((imgUrl) => (
                <div className="w-[60px] h-[60px] border-[1px] border-white/20 rounded-xl overflow-hidden ">
                  <img className="w-full h-full object-cover" src={imgUrl} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className=" h-[300px] lg:h-[600px] w-full relative bg-[rgb(26,26,26)]">
          <div className="w-full h-[150px] bg-gradient-to-b from-black to-transparent absolute top-0 left-0"></div>
          <div className="w-full h-[150px] bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0"></div>
          <div className="w-full -top-[200px] lg:top-0 absolute  text-[rgb(72,255,0)]">
            <CurvedLoop
              marqueeText="Pre-Final Year ✦ Engineering ✦ Designs ✦ freelance ✦"
              speed={3}
              curveAmount={-100}
              direction="left"
              interactive={false}
              className=" absolute   text-[rgb(72,255,0)] rotate-3"
            />
          </div>
          <div className="w-full absolute -top-[300px] lg:-top-[300px]  text-[rgb(72,255,0)]">
            <CurvedLoop
              marqueeText="Design ✦ Versatile ✦ Elgant ✦ It just works ✦"
              speed={3}
              curveAmount={200}
              interactive={false}
              direction="right"
              className="absolute top-0  text-[rgb(72,255,0)]"
            />
          </div>
        </div>
        <section className="w-full">
          <div className="w-full max-w-7xl mx-auto py-20 flex flex-col lg:flex-row justify-center items-center gap-x-4">
            <div className="w-full flex flex-col items-center justify-center lg:justify-content-end lg:items-end">
              <p className="leading-tight">hey, I'm Vishal</p>
              <h1 className="text-[40pt] lg:text-[60pt] leading-[70px] text-center lg:text-right text-[#f1f1f1] text-wrap ">
                I ❤️ buiding cool stuffs.
              </h1>
            </div>
            <div className="w-full flex justify-center items-center mt-4 lg:mt-0 lg:justify-start lg:items-start">
              <div className="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] bg-[#d1d1d1] relative overflow-hidden rounded-[30px] ">
                <img
                  src={texture}
                  className="w-full h-full object-cover absolute left-0 right-0"
                />
                <div className="absolute top-[10px] left-[10px]">
                  <div className="w-[300px] h-[290px] lg:w-[380px] lg:h-[350px] bg-black rounded-[20px] shadow-sm overflow-hidden">
                    <img
                      className="w-full h-full object-cover saturate-0"
                      src="https://imageio.forbes.com/specials-images/imageserve/5b8576db31358e0429c734e3/0x0.jpg?format=jpg&crop=2170,2172,x211,y900,safe&height=416&width=416&fit=bounds"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="w-full max-7xl mx-auto py-20 flex flex-col px-4">
            <h1 className="text-[50pt] text-[#f1f1f1]">Projects</h1>
            <div className="w-full lg:h-[300px] max-w-lg lg:max-w-4xl mx-auto flex flex-col mt-10 relative overflow-hidden rounded-[30px] lg:flex-row justify-start items-start p-[10px]">
              <img
                src={texture}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt=""
              />
              <div className="w-full lg:min-w-[300px] lg:max-w-[300px] h-[280px] bg-black rounded-[20px] overflow-hidden shadow-lg  z-0">
                <img
                  className=" w-full h-full object-cover"
                  src={fireProject}
                  alt=""
                />
              </div>
              <div className="w-full flex flex-col justify-start items-start lg:mx-10 text-[rgb(27,27,27)] z-20">
                <h1 className=" text-[30pt] leading-[35px] mt-4 text-left">
                  AI - Movified Name Genrator{" "}
                </h1>
                <p className="text-left text-wrap mt-2">
                  A web application that generates unique and creative names for
                  movies using artificial intelligence. Built with React for the
                  frontend and firebase for the backend, this project leverages
                  Gemini to generate cool names.
                </p>
                <p className="my-5">Tech Stack: React, Firebase, Gemini API</p>
                <a
                  className="px-4 py-2 rounded-r-full rounded-l-full bg-[#1d1d1d] text-white hover:bg-[#2a2a2a] hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://firefirefire.vercel.app/"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-[calc(100vh-200px)] flex flex-col justify-center items-center relative">
          <img src="" alt="" />
          <div className="w-full">
            <h2 className="elegant text-[40pt] leading-[50px]">
              " Design is not just what it looks like and feels like.
              <br /> Design is how it works. "
            </h2>
            <div className="flex items-center justify-center">
              <p className="text-white text-lg pop mt-10">Steve Jobs</p>
            </div>
          </div>
        </section>
        <div className="w-full bg-black text-white py-[100px] pop">
          <div className="w-full max-w-7xl px-[20px] mx-auto grid grid-col-1 lg:grid-cols-2 overflow-hidden">
            <div
              className="col-span-1 grid grid-cols-5 sm:scale-75 lg:scale-100 "
              onMouseEnter={() => setvarient("texthoverphone")}
              onMouseLeave={() => setvarient("default")}
            >
              <div className="col-span-3 flex flex-col justify-center items-end">
                <p className=" text-[35pt] sm:text-[45pt] lg:text-[60pt]  leading-tight font-thin text-[#FF145C]">
                  Phone
                </p>
                <p className="text-lg leading-tight font-thin">
                  +91 9443919192
                </p>
                <p className="text-lg font-thin leading-tight">
                  feel free to reach me out.
                </p>
              </div>
              <div className="col-span-2 text-white flex justify-start items-start">
                <GoArrowRight className="text-[#FF145C] -rotate-45 text-[180pt]" />
              </div>
            </div>
            <div
              className="col-span-1 grid grid-cols-5 sm:scale-75 lg:scale-100 overflow-hidden "
              onMouseEnter={() => setvarient("texthovertwitter")}
              onMouseLeave={() => setvarient("default")}
            >
              <div className="col-span-3 flex flex-col justify-center items-end">
                <p className="text-[35pt] sm:text-[45pt] lg:text-[60pt] leading-tight font-thin">
                  Twitter
                </p>
                <p className="text-blue-500 leading-tight text-sm hover:underline hover:cursor-pointer font-normal">
                  @vishalToo5
                </p>
                <p className="text-lg font-thin leading-tight">
                  follow me in Twitter.
                </p>
              </div>
              <div className="col-span-2 text-[#D2D2D2] flex justify-start items-start">
                <GoArrowRight className=" -rotate-45 text-[180pt]" />
              </div>
            </div>
            <div
              className="col-span-1 grid grid-cols-5 sm:scale-75 lg:scale-100 overflow-hidden"
              onMouseEnter={() => setvarient("texthoverdiscord")}
              onMouseLeave={() => setvarient("default")}
            >
              <div className="col-span-3 flex flex-col justify-center items-end">
                <p className="text-[35pt] sm:text-[45pt] lg:text-[60pt] leading-tight font-thin">
                  Discord
                </p>
                <p className="text-blue-500 leading-tight text-sm hover:underline hover:cursor-pointer font-normal">
                  @vishal6505
                </p>
                <p className="text-lg font-thin leading-tight">
                  feel free to reach me out.
                </p>
              </div>
              <div className="col-span-2  flex justify-start items-start">
                <GoArrowRight className="text-[#5166EE] -rotate-45 text-[180pt]" />
              </div>
            </div>
            <div
              className="col-span-1 grid grid-cols-5 sm:scale-75 lg:scale-100 overflow-hidden"
              onMouseEnter={() => setvarient("texthoverlinkedin")}
              onMouseLeave={() => setvarient("default")}
            >
              <div className="col-span-3 flex flex-col justify-center items-end">
                <p className="text-[35pt] sm:text-[45pt] lg:text-[60pt] leading-tight font-thin">
                  Linkedin
                </p>
                <p className="text-blue-500 leading-tight text-sm hover:underline hover:cursor-pointer font-normal ">
                  @vishal-thangamariappan
                </p>
                <p className="text-lg font-thin leading-tight">
                  feel free to reach me out.
                </p>
              </div>
              <div className="col-span-2  flex justify-start items-start">
                <i className="bx bx-right-arrow-alt -rotate-45 text-[160pt] "></i>
                <GoArrowRight className="text-[#0067BF] -rotate-45 text-[180pt]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl pt-[100px] pb-[200px] mx-auto flex justify-center items-center pop relative ">
          <div className=" w-[220px] group-hover:w-[100px] group group-hover:h-[100px] duration-300 ease-in-out h-[50px] bg-[#6D6D6D] rounded-r-full rounded-l-full flex justify-center items-center text-lg font-thin text-white pr-[40px] relative overflow-hidden">
            <p className="min-w-[220] group-hover:opacity-0 group-hover:translate-y-[100%]  duration-1000  transition-all ease-in-out  z-10 text-white">
              scroll back to top
            </p>
            <div
              className="w-[42px] h-[42px] group-hover:w-[220px] group-hover:h-[220px] group-hover:right-0 rounded-full group-hover:bg-green-500 duration-500 bg-[#D9D9D9] absolute right-[4px] flex justify-center items-center hover:bg-[rgb(255,255,255)] z-20 "
              onClick={scrollToTop}
            >
              <GoArrowRight className="text-[#8E8E8E] group-hover:text-white -rotate-90 text-[25pt] group-hover:text-[40pt] duration-300 z-20" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center text-white pop font-thin z-[60]">
          <p>all rights reserved @vishal</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
