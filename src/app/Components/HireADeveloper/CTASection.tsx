"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import gsap from 'gsap'
import { Check, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  requirements: z.string().min(10, "Please provide more details"),
  technology: z.string().min(1, "Technology selection is required"),
  duration: z.string().min(1, "Duration selection is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function CTASection() {
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

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const response = await fetch("/api/hiredeveloper", {
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
          duration: data.duration,
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

  return (
    <section id="hire" className="py-24 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-md mb-8 text-blue-100">
              Get started today and connect with top developers who can bring
              your vision to life. Fill out the form, and we'll get back to you
              within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <p className="text-lg">
                  Start your project in as little as 48 hours
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <p className="text-lg">
                  Work with pre-vetted, experienced developers
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <p className="text-lg">100% satisfaction guaranteed</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div ref={checkIconRef} className="mb-4 flex w-full justify-center">
                    <Check size={80} strokeWidth={3} color="white" className="bg-green-500 rounded-full p-2" />
                  </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We've received your request and will get back to you within 24
                  hours.
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
                    htmlFor="duration"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Duration (In months)
                  </label>
                  <select
                    {...register("duration")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select duration</option>
                    <option value="0-3">0-3</option>
                    <option value="3-6">3-6</option>
                    <option value="6-12">6-12</option>
                    <option value="12+">12+</option>
                  </select>
                  {errors.duration && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.duration.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Project Requirements
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
    </section>
  );
}
