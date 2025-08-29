"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Luk menu ved scroll
      if (menuOpen) setMenuOpen(false);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`bg-[#eaf6fb] w-full fixed top-0 left-0 z-50 shadow-sm transition-all duration-300`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "py-2" : "py-6"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center transition-all duration-300">
            <img
              src="/icons/logo-stempel-stor.png"
              alt="CleanSpace logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-16" : "h-20"
              }`}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 text-base font-medium text-brand-blue">
            <a
              href="#services"
              className="hover:text-brand-dark cursor-pointer"
            >
              Services
            </a>
            <a href="#about" className="hover:text-brand-dark cursor-pointer">
              Om os
            </a>
            <a href="#contact" className="hover:text-brand-dark cursor-pointer">
              Kontakt
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            <a href="#contact" className="btn-primary cursor-pointer">
              Få et tilbud
            </a>
            <a href="#contact" className="btn-secondary cursor-pointer">
              Kontakt os
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-brand-blue cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobilmenu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-[#eaf6fb] w-full border-t border-gray-200 shadow-lg"
          >
            <nav className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-brand-blue">
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-brand-dark cursor-pointer"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-brand-dark cursor-pointer"
              >
                Om os
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-brand-dark cursor-pointer"
              >
                Kontakt
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-40 text-center cursor-pointer"
              >
                Få et tilbud
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-secondary w-40 text-center cursor-pointer"
              >
                Kontakt os
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className={`${scrolled ? "h-16" : "h-24"} md:h-24`} />
    </>
  );
}
