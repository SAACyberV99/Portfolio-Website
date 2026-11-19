import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { SOCIAL_LINKS, NAV_ITEMS } from "@/data";

const iconMap: Record<string, React.ReactNode> = {
    github: <Github size={14} />,
    linkedin: <Linkedin size={14} />,
    twitter: <Twitter size={14} />,
};

export default function Footer() {
    return (
        <footer className="border-t border-border px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                {/* Brand */}
                <div>
                    <a
                    href="#"
                    className="font-display font-black text-2xl text-paper hover:text-amber transition-colors"
                    >
                    SAA<span className="text-amber">.</span>
                    </a>
                    <p className="font-mono text-xs text-muted mt-1">
                    Full Stack Developer &amp; DevOps
                    </p>
                </div>

                {/* Nav */}
                <nav className="flex items-center gap-6">
                    {NAV_ITEMS.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="font-mono text-xs text-muted hover:text-paper transition-colors"
                    >
                        {item.label}
                    </a>
                    ))}
                </nav>

                {/* Social */}
                <div className="flex items-center gap-4">
                    {SOCIAL_LINKS.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-amber transition-colors"
                        aria-label={link.label}
                    >
                        {iconMap[link.icon]}
                    </a>
                    ))}
                </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                    <p className="font-mono text-xs text-border">
                        © {new Date().getFullYear()} SABER Ahmed Amine. Built with ♥
                    </p>
                    <a
                            href="#"
                            className="flex h-8 w-8 items-center justify-center border border-border text-muted transition-colors hover:border-amber hover:text-amber"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={12} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
