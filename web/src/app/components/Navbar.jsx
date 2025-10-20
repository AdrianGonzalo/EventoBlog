"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-pink-50 shadow-md z-50 px-10">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto p-6">
        
        <div className="text-l font-bold text-gray-800">
          <Link href="/">La Pelu de María</Link>
        </div>

        
        <div className="flex gap-4 text-gray-700">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium hover:text-black ${
                pathname === href ? "text-black underline" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
