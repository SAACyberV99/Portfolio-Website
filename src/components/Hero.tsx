"use client"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "@/data";
import {
    outlineButtonClass,
    primaryButtonClass,
    sectionLabelClass,
} from "@/lib/styles";

export default function Hero(){
    const iconMap: Record<string, React.ReactNode> = {
        github: <Github size={16} />,
        linkedin: <Linkedin size={16} />,
        twitter: <Twitter size={16} />,
    };

    return(
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden"
            >
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                backgroundImage:
                    "linear-gradient(#f5f0e8 1px, transparent 1px), linear-gradient(90deg, #f5f0e8 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                }}
            />
            {/* Amber glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto w-full">
                {/* Label */}
                <p className={`${sectionLabelClass} mb-6`}>
                Available for work
                </p>
        
                {/* Main heading */}
                <h1 className="mb-6 font-display text-6xl leading-[0.9] text-paper md:text-8xl lg:text-[9rem]">
                SABER
                <br />
                <span className="text-amber italic">Ahmed Amine</span>
                </h1>
        
                {/* Typewriter subtitle */}
                <div className="mb-8 h-8">
                <p className="font-mono text-sm md:text-base text-muted">
                    <span className="animate-pulse text-amber ml-0.5">|</span>
                </p>
                </div>
        
                {/* Description */}
                <p className="mb-10 max-w-lg font-body text-base leading-relaxed text-muted md:text-lg">
                I build fast, accessible, and beautiful digital products — from concept
                to production. Based in <span className="text-paper">Sidi Bel Abbes, Algeria</span>.
                </p>
        
                {/* CTAs */}
                <div className="mb-16 flex items-center gap-4">
                <a href="#projects" className={primaryButtonClass}>
                    View Work
                </a>
                <a href="#contact" className={outlineButtonClass}>
                    Get in Touch
                </a>
                </div>
        
                {/* Social links */}
                <div className="flex items-center gap-6">
                {SOCIAL_LINKS.map((link) => (
                    <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-amber transition-colors flex items-center gap-2 font-mono text-xs"
                    aria-label={link.label}
                    >
                    {iconMap[link.icon]}
                    <span>{link.label}</span>
                    </a>
                ))}
                </div>
            </div>
        
            {/* Scroll cue */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
                <ArrowDown size={14} className="text-paper" />
            </div>
        
            {/* Year stamp */}
            <div className="absolute bottom-8 right-6 font-mono text-xs text-border">
                © {new Date().getFullYear()}
            </div>
        </section>
    )
}
