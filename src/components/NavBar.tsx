"use client"
import { useState, useEffect } from "react"
import { NAV_ITEMS} from "@/data"
import { primaryButtonClass } from "@/lib/styles"

export default function NavBar(){
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return(
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                ? "bg-ink/90 backdrop-blur-md border-b border-border"
                : "bg-transparent"
            }`}
        >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <a
            href="#"
            className="font-display font-black text-xl text-paper hover:text-amber transition-colors"
            >
            SAA<span className="text-amber">.</span>
            </a>
            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                <a
                    href={item.href}
                    className="font-body text-sm text-muted hover:text-paper transition-colors relative group"
                >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber transition-all duration-300 group-hover:w-full" />
                </a>
                </li>
            ))}
            </ul>
            {/* CTA */}
            <a
            href="#contact"
            className={`${primaryButtonClass} hidden px-4 py-2 text-xs md:inline-flex`}
            >
            Contact Me
            </a>
            {/* Mobile toggle */}
            <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            >
            <span
                className={`block w-5 h-px bg-paper transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
                className={`block w-5 h-px bg-paper transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
                className={`block w-5 h-px bg-paper transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
            </button>
        </nav>
        {/* Mobile menu */}
        <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-72 border-b border-border" : "max-h-0"
            } bg-ink/95 backdrop-blur-md`}
        >
            <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-sm text-muted hover:text-paper transition-colors"
                >
                    {item.label}
                </a>
                </li>
            ))}
            <li>
                <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`${primaryButtonClass} w-fit px-4 py-2 text-xs`}
                >
                Contact Me
                </a>
            </li>
            </ul>
        </div>
        </header>
    )
}
