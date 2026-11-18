"use client";
import { useRef } from "react";
import { SKILLS } from "@/data";
import { sectionHeadingClass, sectionLabelClass } from "@/lib/styles";

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <section id="skills" className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
            <div
            ref={ref}
            className="transition-all duration-700"
            >
            <p className={sectionLabelClass}>Expertise</p>
            <h2 className={`${sectionHeadingClass} mb-16`}>
                Skills &amp;
                <br />
                <span className="text-amber">Toolbox</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                {SKILLS.map((skill, i) => (
                <div
                    key={skill.category}
                    className="bg-ink p-8 transition-all duration-500"
                    style={{
                    transitionDelay: `${i * 80}ms`,
                    }}
                >
                    <h3 className="font-mono text-xs text-amber uppercase tracking-widest mb-6">
                    {skill.category}
                    </h3>
                    <ul className="space-y-3">
                    {skill.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-amber transition-colors flex-shrink-0" />
                            <span className="font-body text-sm text-muted group-hover:text-paper transition-colors">
                                {item}
                            </span>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            </div>
            {/* Marquee */}
            <div className="mt-20 overflow-hidden border-y border-border py-4">
                <div className="flex w-full flex-wrap gap-x-8 gap-y-3">
                    {[...Array(3)].flatMap(() =>
                    ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "Docker", "Kubernetes", "AWS"].map(
                        (t, i) => (
                        <div
                            key={`${t}-${i}`}
                            className="font-display italic text-2xl font-black text-border whitespace-nowrap hover:text-amber/30 transition-colors"
                        >
                            {t} ·
                        </div>
                        )
                    )
                    )}
                </div>
            </div>
        </div>
        </section>
    );
}
