"use client";
import { useRef } from "react";
import Image from "next/image";
import {
    cardClass,
    outlineButtonClass,
    sectionHeadingClass,
    sectionLabelClass,
} from "@/lib/styles";

const STATS = [
    { value: "5+", label: "Months Experience" },
];

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
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
                    I&apos;m a fresh full-stack web developer with DevOps skills based in
                    Sidi Bel Abbes, Algeria. I hold a Master&apos;s in Computer Science
                    (Information Systems Engineering) from the University of
                    Mostaganem, where my thesis adapted the Galaxy-based Search
                    Algorithm for the Job Shop problem.
                </p>
                <p>
                    I build applications end to end — React and Next.js on the front,
                    Node.js, Express, Flask or PHP on the back — and ship them with
                    Docker, Kubernetes and CI/CD pipelines. I&apos;ve worked as a
                    frontend developer at KIO Mostaganem and built
                </p>
                <p>
                    I have also completed 2 bootcamps &quot;Full Stack Software Development&quot; and &quot;DevOps Kubernetes Certified&quot; at
                    Gomycode. I&apos;m fluent in Arabic, English and French, and I&apos;m always
                    exploring open source softwares and new technologies.
                </p>
                <p>
                    I&apos;m also a Linux and open source enthusiast, and i use arch linux as my daily driver OS.
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
                    <Image
                        src="/Photo.png"
                        alt="Saber Ahmed Amine"
                        fill
                        preload
                        sizes="(max-width: 1024px) 100vw, 384px"
                        className="object-cover"
                    />
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
