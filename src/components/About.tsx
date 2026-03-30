"use client";
import { useRef } from "react";
//import { useInView } from "@/hooks/useInView";
import {
    cardClass,
    outlineButtonClass,
    sectionHeadingClass,
    sectionLabelClass,
} from "@/lib/styles";

const STATS = [
    { value: "0+", label: "Years Experience" },
];

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    //const inView = useInView(ref, { threshold: 0.15 });
    return (
        <section id="about" className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
            <div
            ref={ref}
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
            >
            {/* Left — text */}
            <div>
                <p className={sectionLabelClass}>About Me</p>
                <h2 className={`${sectionHeadingClass} mb-8`}>
                Crafting the
                <br />
                <em className="text-amber not-italic">web of</em>
                <br />
                tomorrow.
                </h2>
                <div className="space-y-4 text-muted text-base leading-relaxed">
                <p>
                    I&apos;m a full-stack developer with a deep passion for clean
                    architecture and pixel-perfect design. I started coding at 18 and
                    never stopped.
                </p>
                <p>
                    I thrive at the intersection of engineering and design — writing
                    maintainable code that makes users feel something. Every project
                    is an opportunity to raise the bar.
                </p>
                <p>
                    When I&apos;m not shipping products, I&apos;m contributing to open
                    source, or doing my favorite hobbies.
                </p>
                </div>

                <div className="mt-8">
                <a href="/SAA-CV.pdf" className={outlineButtonClass} download>
                    Download Resume
                </a>
                </div>
            </div>

            {/* Right — stats + decorative */}
            <div className="space-y-6">
                {/* Avatar placeholder */}
                <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 border border-amber/20 rounded-sm translate-x-3 translate-y-3" />
                <div className="relative w-full h-full bg-[#111] border border-border rounded-sm flex items-center justify-center overflow-hidden">
                    {/* Replace with your <Image> */}
                    <img src="My-Photo.png"></img>
                </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                    <div key={stat.label} className={cardClass}>
                    <p className="font-display text-3xl font-black text-amber mb-1">
                        {stat.value}
                    </p>
                    <p className="font-mono text-xs text-muted">{stat.label}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}
