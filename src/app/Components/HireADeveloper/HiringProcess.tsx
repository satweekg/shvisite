import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Tell us your needs",
    description: "Share your project requirements, technical needs, and team preferences.",
  },
  {
    title: "Meet top matches",
    description: "We'll introduce you to pre-vetted developers who match your criteria.",
  },
  {
    title: "Interview and select",
    description: "Conduct technical interviews with your preferred candidates.",
  },
  {
    title: "Start building",
    description: "Begin working with your new team member with our full support.",
  },
];

export default function HiringProcess() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple Hiring Process</h2>
          <p className="text-lg text-gray-600">
            Get started with your new developer in just a few simple steps. Our streamlined process
            makes hiring easy and efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}