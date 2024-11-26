"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const StatisticsSection = () => {
  // Refs for animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const numbersRef = useRef<Array<HTMLDivElement | null>>([]);

  // Intersection Observer to trigger animations
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Statistics Data
  const statistics = [
    {
      id: 1,
      title: "Projects Completed",
      value: 120,
      icon: `📁`,
    },
    {
      id: 2,
      title: "Happy Clients",
      value: 80,
      icon: `😊`,
    },
    {
      id: 3,
      title: "Google Reviews",
      value: 77,
      rating: 4.8,
      link: "https://www.google.com/search?q=shiv+infotech&rlz=1C1VDKB_enIN1111IN1111&oq=shiv+infotech+&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyCggCEAAYsQMYgAQyDwgDEC4YQxixAxiABBiKBTIGCAQQRRg8MgYIBRBFGD0yBggGEEUYPTIGCAcQRRhB0gEIMjg4MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x395e8460ff4fa315:0x29f8f057210eaa5f,1,,,,",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" class="w-4 h-5">
               <path fill="#4285F4" d="M24 9.5c3.54 0 6.74 1.27 9.27 3.37l6.9-6.9C36.18 2.42 30.37 0 24 0 14.63 0 6.59 5.43 2.67 13.32l7.98 6.21C12.37 11.2 17.73 9.5 24 9.5z"></path>
               <path fill="#34A853" d="M46.64 24.63c0-1.67-.15-3.29-.42-4.85H24v9.19h12.73c-.55 2.92-2.19 5.41-4.65 7.07l7.36 5.73c4.3-3.97 6.8-9.83 6.8-16.14z"></path>
               <path fill="#FBBC05" d="M10.65 28.62c-.61-1.59-.96-3.29-.96-5.04s.35-3.45.96-5.04l-7.98-6.21C1.07 15.25 0 19.45 0 24s1.07 8.75 2.67 12.67l7.98-6.21z"></path>
               <path fill="#EA4335" d="M24 48c6.36 0 11.71-2.12 15.62-5.79l-7.36-5.73c-2.06 1.38-4.71 2.2-8.26 2.2-6.27 0-11.63-3.62-14.29-8.85l-7.98 6.21C6.59 42.57 14.63 48 24 48z"></path>
             </svg>`,
    },
    {
      id: 4,
      title: "Clutch Reviews",
      value: 11,
      rating: 5,
      link: "https://clutch.co/profile/shiv-infotech#reviews",
      icon: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwUS0-UmkRoRTGUrkmA_USP64FV0Q4kP0jRBsCVYyuN3XANXvWhxRE2761UpxE38Wv3Q&usqp=CAU" alt="clutch">`,
    },
  ];

  // Set up GSAP animations when section comes into view
  useEffect(() => {
    if (inView) {
      // Initial setup - hide elements
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 50
      });
      
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.8
      });
      
      gsap.set(numbersRef.current, {
        textContent: 0,
        opacity: 0
      });

      // Create main timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      // Animate heading
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      });

      // Animate cards
      tl.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.8
      }, "-=0.4");

      // Animate numbers
      statistics.forEach((stat, index) => {
        tl.to(numbersRef.current[index], {
          opacity: 1,
          textContent: stat.value,
          duration: 2,
          snap: { textContent: 1 },
        }, "-=0.5");
      });
    }
  }, [inView]);

  // Combine refs for intersection observer
  const setRefs = (element:any) => {
    sectionRef.current = element;
    inViewRef(element);
  };

  return (
    <section ref={setRefs} className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 ref={headingRef} className="text-3xl mb-6">Our Achievements</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {statistics.map((stat, index) => (
            <div
              key={stat.id}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-[300px] cursor-pointer"
              onClick={() => {stat?.link && window.open(String(stat?.link), "_blank")}}
            >
              <div className="flex items-center mb-4">
                <span 
                  dangerouslySetInnerHTML={{ __html: stat.icon }} 
                  className="w-6 h-6 flex justify-center items-center rounded-full mr-2"
                />
                <p className="text-lg font-medium text-gray-800">
                  {stat.title}
                </p>
                {stat?.link && (
                  <div className="ml-auto flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="orange"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-1"
                    >
                      <path d="M12 .587l3.668 7.425L24 9.168l-6 5.848 1.417 8.265L12 18.771l-7.417 4.51L6 15.016 0 9.168l8.332-1.156z" />
                    </svg>
                    <span className="text-gray-800">{stat?.rating}</span>
                  </div>
                )}
              </div>
              <div className="text-start">
                <p 
                  ref={(el) => {
                    numbersRef.current[index] = el
                  }}
                  className="text-4xl font-semibold text-gray-900 mb-2"
                >
                  0
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;