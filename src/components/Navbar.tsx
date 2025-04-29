import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 text-white hover:opacity-80 transition-opacity duration-300 group"
          >
            <img src="/logo.svg" alt="Ahmad Azzam Fuadie Logo" className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" />
            {/* Keep the "Hi Azzam" text next to the logo */}
            <span className="text-xl font-poppins font-semibold transition-colors duration-300 group-hover:text-primary-foreground">Hi Azzam</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white font-medium transition-colors relative group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-110 hover:text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 transition-all duration-500 ease-in-out bg-background/95 backdrop-blur-md shadow-lg ${
            isMenuOpen
              ? "opacity-100 top-full visible"
              : "opacity-0 top-[calc(100%-20px)] invisible"
          }`}
        >
          <div className="flex flex-col px-6 pt-2 pb-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-200 hover:text-primary py-2 font-medium transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

