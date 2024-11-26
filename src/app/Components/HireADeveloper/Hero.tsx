import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative mt-20 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBmaWxsPSIjNjM2M0YxIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-40 z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Hire Elite Tech Talent to 
            <span className="text-blue-900"> Drive Your Vision Forward</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of IT solutions designed to help
            your business thrive in the digital age. From web development to
            cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-col justify-center mt-4 sm:flex-row gap-4">
            <Link
              href="#hire"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-900 hover:bg-blue-900 transition-colors"
            >
              Hire Developers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Why Us
            </Link>
          </div>
          <div className="flex justify-center mt-4 items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="text-gray-600">Developers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">98%</p>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">24/7</p>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
