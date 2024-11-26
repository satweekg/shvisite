"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Refs for animation targets
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const backdropRef = useRef(null);
  const menuItemsRef = useRef<Array<HTMLDivElement | null>>([]);
  
  // Refs for desktop nav links
  const navLinks = useRef<HTMLAnchorElement[]>([]);
  const addToNavLinks = (el:HTMLAnchorElement | null) => {
    if (el && !navLinks.current.includes(el)) {
      navLinks.current.push(el);
    }
  };


  // Mobile menu animations
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    const menuItems = menuItemsRef.current;
    const backdrop = backdropRef.current;

    gsap.set(menuItems, { x: -30, opacity: 0 });
    gsap.set(backdrop, { opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(backdrop, {
      opacity: 1,
      duration: 0.3,
    })
    .to(mobileMenuRef.current, {
      clipPath: "circle(150% at top right)",
      duration: 0.5,
      ease: "power3.inOut",
    })
    .to(menuItems, {
      x: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.3");

    if (isMenuOpen) {
      tl.play();
    } else {
      gsap.to(mobileMenuRef.current, {
        clipPath: "circle(0% at top right)",
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(backdrop, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [isMenuOpen]);

  // Menu items hover animation
  const handleMenuItemHover = (index:number, isEntering:any) => {
    gsap.to(menuItemsRef.current[index], {
      x: isEntering ? 10 : 0,
      color: isEntering ? "#1e3a8a" : "#4b5563",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Products", href: "/products" },
    { text: "Hire Developers", href: "/hire-a-developer" },
    { text: "Training", href: "/training" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-md z-50">
      {/* Backdrop overlay */}
      <div
        ref={backdropRef}
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image alt="logo" src={"/logo.png"} height={120} width={150} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div ref={linksRef} className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                ref={addToNavLinks}
                className="text-gray-600 hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Login button */}
          

          {/* Mobile Menu button */}
          <div className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-900 focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-full md:hidden bg-white shadow-2xl h-screen transition-transform duration-300 z-40`}
        style={{
          clipPath: "circle(0% at top right)",
        }}
      >
        <div className="px-4 pt-24 pb-8 h-full">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div
                key={item.href}
                ref={(el) => {
                  menuItemsRef.current[index] = el
                }}
                onMouseEnter={() => handleMenuItemHover(index, true)}
                onMouseLeave={() => handleMenuItemHover(index, false)}
                className="group"
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-gray-600 rounded-lg  transition-all duration-300"
                >
                  <span className="text-lg font-medium">{item.text}</span>
                </Link>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;