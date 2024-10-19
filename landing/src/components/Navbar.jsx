import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scroll ? "bg-background shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl text-white font-extrabold text-primary hover:text-accent transition duration-300">
          Stellara
        </h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#features"
              className="text-white hover:text-primary transition duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-white hover:text-primary transition duration-300"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-primary transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
