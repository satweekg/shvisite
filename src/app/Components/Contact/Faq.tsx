"use client";

import { useState } from "react";
import { Clock, CreditCard, HelpCircle, Mail, MessageCircle, Settings, Users, ChevronDown } from "lucide-react";

const faqs = [
  {
    icon: <Clock className="w-5 h-5" />,
    question: "Is there a free consultation available?",
    answer:
      "Yes, we offer a free 30-minute consultation call to discuss your project requirements and how we can help you achieve your goals. Book a call here.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    question: "Can I change my project requirements during development?",
    answer: "Yes, we are flexible and can accommodate changes to your project as it evolves.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    question: "What is your project support policy?",
    answer: "We provide ongoing support and maintenance for your project, ensuring it runs smoothly after delivery.",
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    question: "Do you provide custom software development?",
    answer: "Yes, we specialize in creating custom software solutions tailored to your business needs.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    question: "How does billing work for software development projects?",
    answer: "We offer flexible billing options including fixed-price contracts, time-and-materials, or monthly retainer plans depending on the project scope.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently asked questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                    {faq.icon}
                  </div>
                  <span className="font-medium">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}