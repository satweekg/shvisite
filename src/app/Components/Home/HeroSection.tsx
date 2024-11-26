import React, { useEffect, useRef } from "react";
import { useState } from "react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";

function Hero() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const leftNoteRef = useRef(null);
  const progressRef = useRef(null);
  const iconsRef = useRef(null);

  const techStack = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      name: "Angular",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      name: "Vue",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
      name: "Wordpress",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        descriptionRef.current,
        buttonRef.current,
      ],
      {
        y: 100,
        opacity: 0,
      }
    );

    gsap.set([leftNoteRef.current, progressRef.current, iconsRef.current], {
      scale: 0.8,
      opacity: 0,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
    })
      .to(
        subtitleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        descriptionRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        buttonRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.6"
      );

    tl.to(
      [leftNoteRef.current, progressRef.current, iconsRef.current],
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.4"
    );
  }, []);

  return (
    <section className="relative min-h-screen bg-[#f1f1f1] mx-2 md:mx-4 rounded-lg flex items-center justify-center px-4 md:px-6 py-12 md:py-20 overflow-hidden mt-2 md:mt-20">
      {/* Ripple/Light Effect */}
      <div
        className="absolute w-24 md:w-40 h-24 md:h-40 bg-blue-200 rounded-full opacity-30 pointer-events-none"
        style={{
          top: cursorPosition.y - 80,
          left: cursorPosition.x - 80,
          transition: "transform 0.1s, opacity 0.2s",
          boxShadow:
            "10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.6)",
        }}
      ></div>

      {/* Content */}
      <div className="absolute w-full h-full max-w-7xl mx-auto">
        {/* Left Note - Hidden on mobile, visible from medium screens */}
        <div
          ref={leftNoteRef}
          className="hidden md:block absolute left-4 lg:left-10 top-20 cursor-pointer transition-transform  duration-300 ease-in-out"
        >
          <div className="bg-yellow-100 p-4 md:p-6 rounded-lg shadow-lg w-40 md:w-48 transform -rotate-12 hover-effect hover:rotate-11 hover:bg-yellow-200">
            <p className="text-xs md:text-sm text-gray-700">
              P.S. We're coffee-powered coders! Don't just think outside the
              box; let's reprogram it!
            </p>
          </div>
        </div>

        {/* Progress Bars - Adjusted for mobile */}
        <div
          ref={progressRef}
          className="absolute left-4 lg:left-10 bottom-10 md:bottom-20 cursor-pointer"
        >
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-lg w-48 md:w-64 transform transition-transform duration-300 hover:scale-105">
            <div className="space-y-2 md:space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs md:text-sm">
                    Clients Satisfaction
                  </span>
                  <span className="text-xs md:text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-blue-900 h-1.5 md:h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs md:text-sm">Worldwide Feedback</span>
                  <span className="text-xs md:text-sm">9.8/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-blue-900 h-1.5 md:h-2 rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Icons - Adjusted position for mobile */}
        <div
          ref={iconsRef}
          className="absolute right-4 lg:right-10 bottom-10 md:bottom-20 z-20"
        >
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-lg hidden md:block">
            <div className="grid grid-cols-3 gap-2">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-gray-100 rounded-lg p-2 transform transition-transform duration-300 hover:scale-110 flex flex-col items-center justify-center"
                >
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                </div>
              ))}
            </div>
            <a
              href="/about"
              className="justify-end flex w-full px-2 pt-2 text-black"
            >
              more <ChevronRight />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content - Improved responsive text sizing */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 flex flex-col items-center justify-center text-center">
            <span ref={titleRef}>Who We Are?</span>
            <span
              ref={subtitleRef}
              className="block text-gray-400 mt-2 text-2xl sm:text-3xl md:text-4xl"
            >
              The future of IT service
            </span>
          </h1>
          <p
            ref={descriptionRef}
            className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto text-center px-4"
          >
            We are a digital transformation software development company that
            provides cutting-edge engineering solutions based on the client's
            requirements.
          </p>
          <button
            ref={buttonRef}
            onClick={() => (window.location.href = "/contact")}
            className="bg-blue-900 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
