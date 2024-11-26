"use client";
import { useEffect, useRef, useState } from "react";
import { Check, Send } from "lucide-react";
import gsap from 'gsap'

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const checkIconRef = useRef(null)
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
  }, [status]);

  return (
    <div className=" mx-auto mb-24 px-4 sm:px-6 mt-20">
      <div className="bg-white rounded-2xl border p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Send us a message
        </h2>
        <p className="text-gray-600 mb-8">
          We'd love to hear from you. Please fill out this form.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                required
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                required
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                disabled={status === "submitting"}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              required
              disabled={status === "submitting"}
            />
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {status === "success" && (
              <>
                <div
                  ref={checkIconRef}
                  className="mb-4 flex w-full justify-center"
                >
                  <Check
                    size={80}
                    strokeWidth={3}
                    color="white"
                    className="bg-green-500 rounded-full p-2"
                  />
                </div>
                <div className="text-green-600 bg-green-50 px-4 py-3 rounded-lg">
                  Message sent successfully! We'll get back to you soon.
                </div>
              </>
            )}
            {status === "error" && (
              <div className="text-red-600 bg-red-50 px-4 py-3 rounded-lg">
                {errorMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
