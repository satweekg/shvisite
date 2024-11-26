import { Play } from "lucide-react";

export default function CTASection() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to level up your business?
      </h2>
      <p className="text-gray-600 mb-8">
        Start your 30-day free trial. Cancel anytime.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <Play className="w-4 h-4" /> View demo
        </button>
        <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Get started
        </button>
      </div>
    </div>
  );
}