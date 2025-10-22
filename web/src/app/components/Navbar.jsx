"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-pink-50/90 backdrop-blur-md shadow-md z-50 px-5">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold text-pink-700 tracking-wide hover:text-pink-600 transition-colors">
          <Link href="/" className="text-lg">
            La Pelu de María
          </Link>
        </div>

        <div className="flex gap-8 text-gray-700 font-medium relative">
          {/* Inicio */}
          <Link
            href="/"
            className={`relative group ${
              pathname === "/" ? "text-pink-700" : "hover:text-pink-700"
            }`}
          >
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>

          {/* Peinados (no clicable) — dropdown pegado para evitar hueco */}
          <div className="relative group cursor-default select-none">
            <span
              className={`relative font-medium p-6 ${
                pathname.startsWith("/peinados")
                  ? "text-pink-700"
                  : "hover:text-pink-700"
              }`}
            >
              Peinados
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-600 transition-all group-hover:w-full"></span>
            </span>

            {/* Dropdown pegado: top-full -mt-1 elimina el hueco (se solapa 1px) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-9 mt-2 w-28 bg-pink-50/90 border border-pink-100 border-t-0 shadow-lg overflow-hidden transform transition-all duration-200 ease-out origin-top scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
              <Link
                href="/peinados/novias"
                className="block px-5 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors text-center"
              >
                Novias
              </Link>
              <Link
                href="/peinados/madrinas"
                className="block px-5 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors text-center"
              >
                Madrinas
              </Link>
            </div>
          </div>

          {/* Nosotros */}
          <Link
            href="/nosotros"
            className={`relative group ${
              pathname === "/nosotros" ? "text-pink-700" : "hover:text-pink-700"
            }`}
          >
            Nosotros
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
