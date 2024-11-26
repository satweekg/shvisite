"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import ContactCard from "../Components/Contact/Contact-Card";
import FAQ from "../Components/Contact/Faq";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      {" "}
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-10">
        {/* <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Contact our friendly team
          </h1>
          <p className="text-lg text-gray-600">Let us know how we can help.</p>
        </div> */}

        <div className="text-center mb-12 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contact our friendly team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let us know how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          <ContactCard
            icon={<MessageCircle className="w-6 h-6" />}
            title="Chat to consultation"
            description="Speak to our friendly team."
            action={{
              text: "contact@shivinfotech.co",
              href: "mailto:contact@shivinfotech.co",
            }}
          />
          <ContactCard
            icon={<MessageCircle className="w-6 h-6" />}
            title="Chat to HR"
            description="Career & training related queries
"
            action={{
              text: "hr@shivinfotech.co",
              href: "mailto:hr@shivinfotech.co",
            }}
          />
          <ContactCard
            icon={<MapPin className="w-6 h-6" />}
            title="Visit us"
            description="Visit our office HQ."
            action={{
              text: "View on Google Maps",
              href: "https://maps.app.goo.gl/YyxKLvhT78pMoX3v6",
            }}
          />
          <ContactCard
            icon={<Phone className="w-6 h-6" />}
            title="Call us"
            description="Mon-Fri from 10am to 7pm."
            action={{
              text: "+91 8511222502",
              href: "tel:8511222502",
            }}
          />
        </div>
        <div className="grid md:grid-cols-2 w-full gap-2">
        <ContactForm />
        <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
