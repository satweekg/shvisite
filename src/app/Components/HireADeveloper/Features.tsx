import { Code2, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Expert Developers",
    description:
      "Access a pool of highly skilled developers with expertise across multiple technologies and domains.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Perfect Match",
    description:
      "Our advanced matching system ensures you find developers who perfectly align with your project needs.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast Onboarding",
    description:
      "Get your team up and running quickly with our streamlined onboarding process and support.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Risk-Free Guarantee",
    description:
      "Work with confidence knowing that our developers are pre-vetted and backed by our satisfaction guarantee.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4">Why Choose Shiv Infotech?</h2>
          <p className="text-lg text-gray-600">
            We make hiring developers simple, fast, and reliable with our comprehensive platform and
            support system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}