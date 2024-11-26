"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Send,
  X,
  Terminal,
  Code2,
  Layout,
  Monitor,
  Smartphone,
  Compass,
  Database,
  Calendar,
  Check,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import gsap from 'gsap'

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  requirements: z.string().min(10, "Please provide more details"),
  technology: z.string().min(1, "Technology selection is required"),
});

type FormData = z.infer<typeof formSchema>;

type CourseDetailsType = {
  [key: string]: {
    title: string;
    time: string;
    description: string;
    topics?: string[];
    status?: string;
  }[];
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Data Science");
  const [activeModal, setActiveModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const checkIconRef = useRef(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    // Initial state
    gsap.set(checkIconRef.current, {
      scale: 0,
      opacity: 0
    });

    // Animation sequence
    const tl = gsap.timeline();
    
    tl.to(checkIconRef.current, {
      scale: 1.2,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    })
    .to(checkIconRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    })
    .from(checkIconRef.current, {
      strokeDashoffset: 100,
      strokeDasharray: 100,
      duration: 0.8,
      ease: "power2.out"
    });
  }, [isSubmitting]);


  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const response = await fetch("/api/training", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          company: data.company,
          technology: data.technology,
          message: data.requirements,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      reset();
      setIsSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabIcons:Record<string, React.ComponentType<{ className?: string }>>  = {
    "Data Science": Database,
    "Node Js": Terminal,
    "React Js": Code2,
    "Vue Js": Layout,
    ".Net": Monitor,
    "React Native": Smartphone,
    Angular: Compass,
  };

  const tabs = [
    { id: "Data Science", title: "Data Science" },
    { id: "Node Js", title: "Node Js" },
    { id: "React Js", title: "React Js" },
    { id: "Vue Js", title: "Vue Js" },
    { id: ".Net", title: ".Net" },
    { id: "React Native", title: "React Native" },
    { id: "Angular", title: "Angular" },
  ];

  const courseDetails:CourseDetailsType  = {
    "Data Science": [
      {
        title: "Python Programming",
        time: "Month 1",
        description: "Learn Python programming for data science applications.",
        topics: ["Python"],
        status: "Foundation",
      },
      {
        title: "Statistics & SQL",
        time: "Month 2-3",
        description:
          "Master statistics fundamentals and database querying with SQL.",
        topics: ["Statistics", "SQL"],
      },
      {
        title: "Machine Learning",
        time: "Month 4-5",
        description: "Learn machine learning algorithms and implementations.",
        topics: ["Machine Learning"],
      },
      {
        title: "Data Visualization",
        time: "Month 6",
        description:
          "Create powerful visualizations using Tableau and Advanced Excel.",
        topics: ["Tableau", "Advanced Excel"],
      },
      {
        title: "Capstone Project",
        time: "Month 7",
        description:
          "Apply your skills in a comprehensive data science project.",
        status: "Final Project",
      },
    ],
    "Node Js": [
      {
        title: "Frontend Fundamentals",
        time: "Month 1-2",
        description:
          "Master HTML, CSS, and Bootstrap fundamentals for building modern web interfaces.",
        topics: ["HTML", "CSS", "Bootstrap"],
      },
      {
        title: "JavaScript & TypeScript",
        time: "Month 3-4",
        description:
          "Deep dive into JavaScript programming and TypeScript for type-safe applications.",
        topics: ["Javascript", "TypeScript"],
      },
      {
        title: "Node.js & Frameworks",
        time: "Month 5-6",
        description:
          "Build server-side applications with Node.js and popular frameworks like Express.js and Nest.js.",
        topics: ["Node JS", "Express JS", "Nest Js"],
        status: "Popular",
      },
      {
        title: "Database Integration",
        time: "Month 7-8",
        description:
          "Learn to work with various databases and ORMs including MongoDB, MySQL, and Sequelize.",
        topics: ["MongoDB", "MySQL", "MySQL with sequelize"],
      },
      {
        title: "Capstone Project",
        time: "Month 9",
        description:
          "Apply your skills in a comprehensive project showcasing full-stack development capabilities.",
        status: "Final Phase",
      },
    ],
    "React Js": [
      {
        title: "Web Fundamentals",
        time: "Month 1-2",
        description:
          "Master HTML, CSS, and Bootstrap for modern web development.",
        topics: ["HTML", "CSS", "Bootstrap"],
      },
      {
        title: "JavaScript & TypeScript",
        time: "Month 3-4",
        description:
          "Learn JavaScript programming and TypeScript for robust applications.",
        topics: ["Javascript", "TypeScript"],
      },
      {
        title: "React Development",
        time: "Month 5-6",
        description:
          "Build dynamic user interfaces with React.js and modern React patterns.",
        topics: ["React js"],
        status: "Core",
      },
      {
        title: "Final Project",
        time: "Month 7",
        description:
          "Create a complete React application showcasing your frontend expertise.",
        status: "Project Phase",
      },
    ],
    "Vue Js": [
      {
        title: "Frontend Basics",
        time: "Month 1-2",
        description: "Learn HTML, CSS, and Bootstrap fundamentals.",
        topics: ["HTML", "CSS", "Bootstrap"],
      },
      {
        title: "JavaScript Foundations",
        time: "Month 3-4",
        description: "Master JavaScript and TypeScript programming.",
        topics: ["Javascript", "TypeScript"],
      },
      {
        title: "Vue.js Development",
        time: "Month 5-6",
        description: "Build reactive applications with Vue.js framework.",
        topics: ["Vue Js"],
        status: "Featured",
      },
      {
        title: "Capstone Project",
        time: "Month 7",
        description: "Develop a complete Vue.js application from scratch.",
        status: "Project",
      },
    ],
    ".Net": [
      {
        title: "C# Programming",
        time: "Month 1-2",
        description: "Master C# programming language and fundamentals.",
        topics: ["C#"],
        status: "Foundation",
      },
      {
        title: "ASP.NET Core & Web API",
        time: "Month 3-4",
        description: "Build web applications and APIs using ASP.NET Core.",
        topics: ["Asp.Net core with web api"],
      },
      {
        title: "Database Integration",
        time: "Month 5-6",
        description:
          "Work with various databases including MongoDB and SQL Server.",
        topics: ["MongoDB", "MySQL", "MySQL server"],
      },
    ],
    "React Native": [
      {
        title: "Web Technologies",
        time: "Month 1-2",
        description: "Learn essential web technologies and Bootstrap.",
        topics: ["HTML", "CSS", "Bootstrap"],
      },
      {
        title: "JavaScript & TypeScript",
        time: "Month 3-4",
        description: "Master JavaScript and TypeScript for mobile development.",
        topics: ["Javascript", "TypeScript"],
      },
      {
        title: "React & React Native",
        time: "Month 5-7",
        description:
          "Build cross-platform mobile applications with React Native.",
        topics: ["React js", "React Native"],
        status: "Advanced",
      },
      {
        title: "Mobile App Project",
        time: "Month 8",
        description:
          "Develop a complete mobile application using React Native.",
        status: "Project",
      },
    ],
    Angular: [
      {
        title: "Frontend Fundamentals",
        time: "Month 1-2",
        description: "Master HTML, CSS, and Bootstrap basics.",
        topics: ["HTML", "CSS", "Bootstrap"],
      },
      {
        title: "JavaScript & TypeScript",
        time: "Month 3-4",
        description: "Learn JavaScript and TypeScript programming.",
        topics: ["Javascript", "TypeScript"],
      },
      {
        title: "Angular Development",
        time: "Month 5-6",
        description:
          "Build enterprise-grade applications with Angular framework.",
        topics: ["Angular"],
        status: "Core",
      },
      {
        title: "Final Project",
        time: "Month 7",
        description:
          "Create a complete Angular application showcasing your skills.",
        status: "Project",
      },
    ],
  };

  return (
    <div className="p-4">
      <Navbar />{" "}
      <div className="text-center mb-12 mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Transform Your Career with Professional Tech Courses
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From web development to data science, master the skills that drive the
          digital world with our comprehensive courses.
        </p>
      </div>
      <div className="md:flex min-h-screen">
        <ul className="flex flex-col w-full md:w-1/3 p-4 space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
          {tabs.map((tab) => {
            const IconComponent = tabIcons[tab.id];
            return (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                    activeTab === tab.id
                      ? "bg-blue-900 text-white"
                      : "bg-white border text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <IconComponent className="w-4 h-4 me-2" />
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="p-6 bg-gray-50 rounded-lg w-full">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {activeTab} Course Structure
          </h3>
          {courseDetails[activeTab]?.map((course, index) => (
            <div key={index} className="mb-8">
              <ol className="relative border-s border-gray-200">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                    <Calendar className="w-3 h-3 text-blue-800" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                    {course.title}
                    {course.status && (
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                        {course.status}
                      </span>
                    )}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                    {course.time}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500">
                    {course.description}
                  </p>
                  {course.topics && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              </ol>
            </div>
          ))}
          <button
            onClick={() => setActiveModal(true)}
            className="bg-blue-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Apply now
          </button>
        </div>
      </div>
      {activeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full h-[550px] overflow-y-auto overflow-x-hidden">
            <div className="flex w-full justify-between">
              <h2 className="text-xl font-bold text-gray-800 ">
                Apply for {activeTab}
              </h2>
              <button
                onClick={() => {
                  setActiveModal(!activeModal);
                  setIsSubmitted(false);
                }}
                className="rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="bg-white rounded-xl p-8 ">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div ref={checkIconRef} className="mb-4 flex w-full justify-center">
                    <Check size={80} strokeWidth={3} color="white" className="bg-green-500 rounded-full p-2" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We've received your request and will get back to you within
                    24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {error && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      {...register("company")}
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Company Inc."
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="technology"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Technology
                    </label>
                    <select
                      {...register("technology")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Technology</option>
                      <option value="react">React</option>
                      <option value="node">Node.js</option>
                      <option value="next">Next.js</option>
                      <option value="vue">Vue.js</option>
                      <option value="mongodb">MongoDB</option>
                      <option value="nest">Nest.js</option>
                      <option value="react-native">React Native</option>
                    </select>
                    {errors.technology && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.technology.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="requirements"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Additional Message
                    </label>
                    <textarea
                      {...register("requirements")}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your project and the type of developer you're looking for..."
                    />
                    {errors.requirements && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.requirements.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Submit Request
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Tabs;
