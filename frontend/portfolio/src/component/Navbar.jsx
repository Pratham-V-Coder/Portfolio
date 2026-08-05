import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Me" },
    { to: "/contact", label: "Contact" },
    { to: "/education", label: "Education" },
    { to: "/certificates", label: "Certificate" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Left - Name */}
        <Link
          to="/"
          className="text-white font-semibold text-lg whitespace-nowrap flex-shrink-0"
        >
          Pratham's <span className="text-purple-500 font-bold">Portfolio</span>
        </Link>

        {/* Right - Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile - Hamburger only */}
        <div className="md:hidden flex items-center">
          <button
            ref={btnRef}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex flex-col items-center justify-center gap-1.5 w-9 h-9"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px bg-white block transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`w-5 h-px bg-white block transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-px bg-white block transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm text-gray-300 hover:text-white py-1 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
