"use client";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
//import { useInView } from "@/hooks/useInView";
import { PROJECTS } from "@/data";
import {
    cardClass,
    outlineButtonClass,
    sectionHeadingClass,
    sectionLabelClass,
} from "@/lib/styles";

export default function Projects() {
    const ref = useRef<HTMLDivElement>(null);
    //const inView = useInView(ref, { threshold: 0.1 });
    const [filter, setFilter] = useState<"all" | "featured">("all");

    const filtered =
        filter === "featured"
        ? PROJECTS.filter((p) => p.featured)
        : PROJECTS;

    return (
        <section id="projects" className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div
            ref={ref}
            className="mb-16 flex flex-col gap-6 justify-between md:flex-row md:items-end"
            >
            <div>
                <p className={sectionLabelClass}>Selected Work</p>
                <h2 className={sectionHeadingClass}>
                Projects
                <br />
                <span className="text-amber">&amp; Labs</span>
                </h2>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2 bg-[#111] border border-border p-1 w-fit self-start md:self-auto">
                {(["all", "featured"] as const).map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-1.5 font-mono text-xs capitalize transition-all duration-200 ${
                    filter === f
                        ? "bg-amber text-ink"
                        : "text-muted hover:text-paper"
                    }`}
                >
                    {f}
                </button>
                ))}
            </div>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((project, i) => (
                <article
                key={project.id}
                className={`${cardClass} group cursor-default duration-500`}
                style={{ transitionDelay: `${i * 80}ms` }}
                >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-amber">
                        {project.year}
                    </span>
                    {project.featured && (
                        <span className="font-mono text-[10px] bg-amber/10 text-amber px-2 py-0.5 border border-amber/20">
                        Featured
                        </span>
                    )}
                    </div>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                        <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-paper transition-colors"
                        aria-label="GitHub"
                        >
                        <Github size={14} />
                        </a>
                    )}
                    {project.link && (
                        <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-amber transition-colors"
                        aria-label="Live site"
                        >
                        <ExternalLink size={14} />
                        </a>
                    )}
                    </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-paper mb-3 group-hover:text-amber transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="font-mono text-[11px] text-muted border border-border px-2 py-0.5 hover:border-amber/40 hover:text-amber transition-colors"
                    >
                        {tag}
                    </span>
                    ))}
                </div>
                </article>
            ))}
            </div>

            {/* Footer link */}
            <div className="mt-12 flex justify-center">
            <a
                href="https://github.com/SAACyberV99"
                target="_blank"
                rel="noopener noreferrer"
                className={outlineButtonClass}
            >
                View All on GitHub <ArrowRight size={14} />
            </a>
            </div>
        </div>
        </section>
    );
}
