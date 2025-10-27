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
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-pink-700 tracking-wide hover:text-pink-600 transition-colors">
          <Link href="/" className="text-lg" onClick={handleLinkClick}>
            La Pelu de María
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          className={`md:hidden text-pink-700 transition-transform duration-300 ${
            menuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú móvil */}
        <div
          className={`${
            isMobile
              ? `absolute top-full left-0 w-full flex flex-col items-center gap-3 py-6 text-lg
                  bg-white border-t border-pink-100 shadow-[0_10px_25px_rgba(0,0,0,0.30)]
                  transition-all rounded-b-2xl duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  origin-top transform
                  ${
                    menuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-3 pointer-events-none"
                  }`
              : "flex gap-8 text-gray-700 font-medium items-center"
          }`}
        >
          {/* Inicio */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className={`w-[80%] py-3 text-center rounded-md transition-all duration-300
              ${
                pathname === "/"
                  ? "bg-pink-100 text-pink-700 font-semibold shadow-inner"
                  : "hover:bg-pink-50 hover:text-pink-700 text-gray-800"
              }`}
          >
            Inicio
          </Link>

          {/* Peinados con dropdown */}
          <div ref={dropdownRef} className="w-[80%] flex flex-col items-center">
            <span
              onClick={toggleDropdown}
              className={`w-full py-3 text-center rounded-md cursor-pointer transition-all duration-300 
                ${
                  pathname.startsWith("/peinados")
                    ? "bg-pink-100 text-pink-700 font-semibold shadow-inner"
                    : "hover:bg-pink-50 hover:text-pink-700 text-gray-800"
                }`}
            >
              Peinados
              <span
                className={`ml-2 inline-block transition-transform duration-300 ${
                  openDropdown ? "rotate-180 text-pink-600" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </span>

            <div
              className={`flex flex-col w-full overflow-hidden transition-all duration-400 ease-out
                ${openDropdown ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <Link
                href="/peinados/novias"
                onClick={handleOptionClick}
                className="py-3 text-center text-gray-700 hover:text-pink-700 hover:bg-pink-50 transition-all"
              >
                💍 Novias
              </Link>
              <div className="h-[1px] bg-pink-100 mx-auto w-3/4" />
              <Link
                href="/peinados/madrinas"
                onClick={handleOptionClick}
                className="py-3 text-center text-gray-700 hover:text-pink-700 hover:bg-pink-50 transition-all"
              >
                👑 Madrinas
              </Link>
            </div>
          </div>

          {/* Nosotros */}
          <Link
            href="/nosotros"
            onClick={handleLinkClick}
            className={`w-[80%] py-3 text-center rounded-md transition-all duration-300
              ${
                pathname === "/nosotros"
                  ? "bg-pink-100 text-pink-700 font-semibold shadow-inner"
                  : "hover:bg-pink-50 hover:text-pink-700 text-gray-800"
              }`}
          >
            Nosotros
          </Link>

          {/* Trabaja con nosotros */}
          <Link
            href="/trabaja"
            onClick={handleLinkClick}
            className={`w-[80%] py-3 text-center rounded-md transition-all duration-300
              ${
                pathname === "/trabaja"
                  ? "bg-pink-100 text-pink-700 font-semibold shadow-inner"
                  : "hover:bg-pink-50 hover:text-pink-700 text-gray-800"
              }`}
          >
            Trabaja con nosotros
          </Link>
        </div>
      </nav>
    </header>
  );
}
