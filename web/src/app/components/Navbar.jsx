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
          className={`md:hidden text-pink-700 transition-transform duration-300 ${
            menuOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú móvil */}
        <div
          className={`${
            isMobile
              ? `absolute top-full left-0 w-full flex flex-col items-center gap-4 py-6 text-lg 
          bg-white shadow-[0_8px_25px_rgba(0,0,0,0.1)] border-t border-pink-100
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6 pointer-events-none"
          }`
              : "flex gap-8 text-gray-700 font-medium items-center"
          }`}
        >
          {/* Inicio */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className={`relative group text-black ${
              pathname === "/" ? "text-pink-700" : "hover:text-pink-700"
            }`}
          >
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>

          {/* Peinados */}
          <div
            ref={dropdownRef}
            className={`relative flex flex-col items-center ${
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
              <span
                className={`ml-2 inline-block transition-transform duration-300 ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </span>

            {/* Dropdown de Peinados*/}
            <div
              className={`flex flex-col w-full mt-2 rounded-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          openDropdown
            ? "max-h-40 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }
      `}
            >
              <Link
                href="/peinados/novias"
                onClick={handleOptionClick}
                className="flex items-center justify-center gap-2 px-5 py-3 
          text-gray-800 font-medium text-center 
          hover:bg-pink-50 hover:text-pink-700 transition-all duration-300"
              >
                💍 <span>Novias</span>
              </Link>

              <div className="h-[1px] bg-pink-100 mx-4"></div>

              <Link
                href="/peinados/madrinas"
                onClick={handleOptionClick}
                className="flex items-center justify-center gap-2 px-5 py-3 
          text-gray-800 font-medium text-center 
          hover:bg-pink-50 hover:text-pink-700 transition-all duration-300"
              >
                👑 <span>Madrinas</span>
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
