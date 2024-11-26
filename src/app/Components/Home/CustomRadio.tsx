"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Radio = () => {
  const [activeButton, setActiveButton] = useState("Dedicated SDLC");

  const handleButtonClick = (buttonLabel: string) => {
    setActiveButton(buttonLabel);
  };

  const phases = [
    {
      title: "Requirements",
      description: "Gathering and documenting user needs.",
    },
    {
      title: "Design",
      description: "Creating architectural and detailed design plans.",
    },
    {
      title: "Implementation",
      description: "Writing and integrating the code.",
    },
    { title: "Testing", description: "Verifying and validating the product." },
    { title: "Deployment", description: "Releasing the product to users." },
    { title: "Maintenance", description: "Ongoing support and updates." },
  ];

  return (
    <StyledWrapper>
      <div className="flex justify-center">
        <div className="toggle-wrapper">
          <div
            className={`switch ${
              activeButton === "Dedicated SDLC" ? "left" : "right"
            }`}
          ></div>
          <button
            className={`btn ${
              activeButton === "Dedicated SDLC" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Dedicated SDLC")}
          >
            Dedicated SDLC
          </button>
          <button
            className={`btn ${
              activeButton === "Fixed Priced SDLC" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Fixed Priced SDLC")}
          >
            Fixed Priced SDLC
          </button>
        </div>
      </div>

      {activeButton === "Dedicated SDLC" ? (
        <>
          <div className="lg:hidden p-2 m-4">
            <div className="cards-container mx-auto p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4 p-2">
              {/* Card 1 */}
              <motion.div
                key="card1"
                className="card bg-white shadow-md p-5 rounded-lg flex flex-col justify-center items-center w-full h-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="font-bold text-lg mb-2">
                  SHARE YOUR BUSINESS REQUIREMENTS
                </h2>
                <p className="text-sm">
                  Provide us with your requirements and we will provide you with
                  the best of our resources that would meet your requirements.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                key="card2"
                className="card bg-white shadow-md p-5 rounded-lg flex flex-col justify-center items-center w-full h-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="font-bold text-lg mb-2">
                  DEFINE TECHNOLOGY STACK
                </h2>
                <p className="text-sm">
                  What's the technology you want developer(s) for? We have
                  highly experienced developers in almost every technology.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                key="card3"
                className="card bg-white shadow-md p-5 rounded-lg flex flex-col justify-center items-center w-full h-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="font-bold text-lg mb-2">GET DEVELOPER CVS</h2>
                <p className="text-sm">
                  Get the best developers CV in your mail who are ready to work
                  and can meet your expectations and requirements.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                key="card4"
                className="card bg-white shadow-md p-5 rounded-lg flex flex-col justify-center items-center w-full h-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="font-bold text-lg mb-2">
                  SCHEDULE TECHNICAL INTERVIEW
                </h2>
                <p className="text-sm">
                  You can schedule an interview for your sake of concern and
                  validate the candidate we would be providing you.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="mazi-container pb-5 hidden lg:block">
            <div className="mazi-wrapper">
              <div className="">
                <div className="cards">
                  <div className="card left-t shadow-md">
                    <h2 className="font-bold sizing mb-2">
                      SHARE YOUR BUSINESS REQUIREMENTS
                    </h2>
                    <p className="justify-text">
                      Provide us with your requirements and we will provide you
                      with the best of our resource that would meet your
                      requirements.
                    </p>
                  </div>
                  <div className="card left-b shadow-md">
                    <h2 className="font-bold sizing mb-2">
                      DEFINE TECHNOLOGY STACK
                    </h2>
                    <p className="justify-text">
                      What's the technology you want developer(s) for? We have
                      highly experienced developers in almost every technology.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="xl:flex h-full w-full hidden"> */}
              <div className="sec-md-30 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="408.598"
                  height="513.23"
                  viewBox="0 0 408.598 513.23"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_30"
                        data-name="Rectangle 30"
                        width={108}
                        height={108}
                        transform="translate(73 523)"
                        fill="#8247e5"
                      />
                    </clipPath>
                  </defs>
                  <g id="how-it-works-bg" transform="translate(-750 -2540)">
                    <g
                      id="logo-icon"
                      transform="translate(833 2017)"
                      clipPath="url(#clip-path)"
                    >
                      <g
                        id="Group_36"
                        data-name="Group 36"
                        transform="translate(83.336 523)"
                      >
                        <path
                          id="Path_106"
                          data-name="Path 106"
                          d="M1079.107,592.009V649.6l20.242,20.242V611.585Z"
                          transform="translate(-1079.107 -592.009)"
                          fill="#03228f"
                        />
                        <path
                          id="Path_107"
                          data-name="Path 107"
                          d="M1099.349,592.009V649.6l-20.242,20.242V611.585Z"
                          transform="translate(-1012.072 -592.009)"
                          fill="#03228f"
                        />
                        <path
                          id="Path_108"
                          data-name="Path 108"
                          d="M1079.107,592.009v87.758l20.242,20.242V611.585Z"
                          transform="translate(-1045.59 -592.009)"
                          fill="#03228f"
                        />
                      </g>
                    </g>
                    <g className="all-path">
                      <g className="no1">
                        <path
                          id="Path_109"
                          data-name="Path 109"
                          d="M925.135,2566.549v209.384H754.115"
                          transform="translate(0 35)"
                          fill="none"
                          stroke="#03228f"
                          strokeWidth={2}
                        />
                        <circle
                          id="Ellipse_12"
                          data-name="Ellipse 12"
                          cx="4.5"
                          cy="4.5"
                          r="4.5"
                          transform="translate(750 2806)"
                          fill="#8247e5"
                        />
                      </g>
                      <g className="no2">
                        <path
                          id="Path_309"
                          data-name="Path 309"
                          d="M766.98,2566.549v209.384H926.6"
                          transform="translate(227.885 32.966)"
                          fill="none"
                          stroke="#03228f"
                          strokeWidth={2}
                        />
                        <circle
                          id="Ellipse_18"
                          data-name="Ellipse 18"
                          cx="4.5"
                          cy="4.5"
                          r="4.5"
                          transform="translate(1149.598 2803.966)"
                          fill="#8247e5"
                        />
                      </g>
                      <g className="no3">
                        <path
                          id="Path_110"
                          data-name="Path 110"
                          d="M963.781,2600.978v394.874H924.015"
                          transform="translate(-14 52.878)"
                          fill="none"
                          stroke="#03228f"
                          strokeWidth={2}
                        />
                        <circle
                          id="Ellipse_13"
                          data-name="Ellipse 13"
                          cx="4.5"
                          cy="4.5"
                          r="4.5"
                          transform="translate(905.515 3044.23)"
                          fill="#8247e5"
                        />
                      </g>
                      <g className="no4">
                        <path
                          id="Path_308"
                          data-name="Path 308"
                          d="M924.015,2600.978v394.874h38.771"
                          transform="translate(48.61 52.878)"
                          fill="none"
                          stroke="#03228f"
                          strokeWidth={2}
                        />
                        <circle
                          id="Ellipse_17"
                          data-name="Ellipse 17"
                          cx="4.5"
                          cy="4.5"
                          r="4.5"
                          transform="translate(1006.895 3044.23)"
                          fill="#8247e5"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              {/* </div> */}
              <div className="">
                <div className="cards">
                  <div className="card right-t shadow-md">
                    <h2 className="font-bold sizing mb-2">
                      GET DEVELOPER CVS.
                    </h2>
                    <p className="justify-text">
                      Get the best developers CV in your mail who are ready to
                      work and can meet your expectations and requirements.
                    </p>
                  </div>
                  <div className="card right-b shadow-md">
                    <h2 className="font-bold sizing mb-2">
                      SCHEDULE TECHNICAL INTERVIEW.
                    </h2>
                    <p className="justify-text">
                      You can schedule an interview for your sake of concern and
                      validate the candidate we would be providing you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-full w-full flex flex-col justify-center items-center p-5 bg-white my-10">
            <div className="flex flex-wrap gap-6 justify-center">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  className="card bg-white shadow-md p-5 rounded-lg flex flex-col justify-center items-center w-64 h-auto text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    <p className="pb-2">{index + 1}.</p>
                    <p>{phase.title}</p>
                  </h2>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-wrapper {
    display: flex;
    position: relative;
    background: #e0e0e0;
    border-radius: 2em;
    width: 400px;
    height: 50px;
    align-items: center;
  }
  .switch {
    position: absolute;
    top: 0.125em;
    bottom: 0.125em;
    width: 50%;
    padding: 20px;
    border-radius: 2em;
    background: #000;
    transition: transform 0.3s ease;
  }
  .switch.left {
    transform: translateX(0%);
  }
  .switch.right {
    transform: translateX(100%);
  }
  .btn {
    flex: 1;
    z-index: 1;
    background: transparent;
    border: none;
    color: #000;
    font-size: 1rem;
    padding: 20px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    transition: color 0.3s ease;
  }
  .btn.active {
    color: #fff;
  }
`;

export default Radio;
