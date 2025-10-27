"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Detectar si es móvil
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    if (isMobile) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile]);

  const toggleDropdown = (e) => {
    if (isMobile) {
      e.stopPropagation();
      setOpenDropdown(!openDropdown);
    }
  };

  const handleOptionClick = () => {
    setOpenDropdown(false);
    setMenuOpen(false);
  };

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto px-10">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-pink-700 tracking-wide hover:text-pink-600 transition-colors">
          <Link href="/" className="text-lg" onClick={handleLinkClick}>
            La Pelu de María
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-pink-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú */}
        <div
          className={`${
            isMobile
              ? `absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-6 text-lg shadow-md border-t border-pink-100 transition-all duration-300 ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5 pointer-events-none"
                }`
              : "flex gap-8 text-gray-700 font-medium items-center"
          }`}
        >
          {/* Inicio */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className={`relative group ${
              pathname === "/" ? "text-pink-700" : "hover:text-pink-700"
            }`}
          >
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>

          {/* Peinados */}
          <div
            ref={dropdownRef}
            className={`relative group select-none flex flex-col items-center ${
              isMobile ? "cursor-pointer" : "cursor-default"
            }`}
          >
            <span
              onClick={toggleDropdown}
              className={`relative font-medium text-black ${
                pathname.startsWith("/peinados")
                  ? "text-pink-700"
                  : "hover:text-pink-700"
              }`}
            >
              Peinados
            </span>

            {/* Dropdown */}
            <div
              className={`${
                isMobile
                  ? `flex flex-col w-full  mt-2 rounded-lg overflow-hidden transition-all duration-300 ease-out ${
                      openDropdown
                        ? "max-h-40 opacity-100 pointer-events-auto"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`
                  : `absolute left-1/2 -translate-x-1/2 top-8 mt-2 w-36 bg-white border border-pink-100 shadow-md rounded-lg overflow-hidden transform transition-all duration-200 ease-out origin-top ${
                      openDropdown
                        ? "scale-100 opacity-100 pointer-events-auto"
                        : "scale-95 opacity-0 pointer-events-none"
                    }`
              }`}
            >
              <Link
                href="/peinados/novias"
                onClick={handleOptionClick}
                className="block px-5 py-3 text-black hover:bg-pink-100 hover:text-pink-700 transition-colors text-center"
              >
                Novias
              </Link>
              <Link
                href="/peinados/madrinas"
                onClick={handleOptionClick}
                className="block px-5 py-3 text-black hover:bg-pink-100 hover:text-pink-700 transition-colors text-center"
              >
                Madrinas
              </Link>
            </div>
          </div>

          {/* Nosotros */}
          <Link
            href="/nosotros"
            onClick={handleLinkClick}
            className={`relative group text-black ${
              pathname === "/nosotros" ? "text-pink-700" : "hover:text-pink-700"
            }`}
          >
            Nosotros
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>

          {/* Trabaja con nosotros */}
          <Link
            href="/trabaja"
            onClick={handleLinkClick}
            className={`relative group text-black ${
              pathname === "/trabaja" ? "text-pink-700" : "hover:text-pink-700"
            }`}
          >
            Trabaja con nosotros
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
