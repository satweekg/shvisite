import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jay Shah",
    role: "Founder",
    company: "J Technolabs",
    image: "https://jtechnolab.com/assets/images/logo/J%20TECHNOLABS%20-%20PNG.png",
    review:
      "Their commitment to understanding our needs and delivering tailored, efficient software solutions stood out.",
  },
  {
    id: 2,
    name: "Try Me Fashion Hub",
    role: "Founder",
    company: "Try Me Fashion Hub",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jiFCbElhZ5luDRkcqNqyE9I3k9ZZ8LToqg&s",
    review:
      "I highly recommend for any organization looking for reliable and high-quality development services. Mr. Nilesh and his team were consistently responsive, communicative, and proactive in addressing our needs, making the entire development process smooth and efficient.",
  },
  {
    id: 3,
    name: "Joan Climent",
    role: "Product Manager",
    company: "USA",
    image: "https://shivinfotech.co/images/Testimonials/Joan.jpg",
    review:
      "I really had a good experience working with the team on an e-commerce Web application development. The team is really flexible in adopting changes and has good processes in place. Highly recommended for app development.",
  },
];

const Testimonials = () => {
  useEffect(() => {
    // GSAP animation
    const sections = document.querySelectorAll(".testimonial-item");
    gsap.fromTo(
      sections,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".testimonials-slider",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
      }
    );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why leading companies choose us as their trusted technology
            partner.
          </p>
        </div>

        <Slider {...settings} className="testimonials-slider -mx-4 py-4 h-full">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4 testimonial-item">
              <div className="bg-white rounded-xl p-8 h-full shadow-md hover:shadow-xl">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-6 relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover border-4 border-blue-100"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 text-center mb-6 line-clamp-3">
                    "{testimonial.review}"
                  </blockquote>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-blue-900 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .testimonials-slider .slick-track {
          display: flex !important;
        }
        .testimonials-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        .testimonials-slider .slick-slide > div {
          display: flex;
          height: 100%;
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
