import { Project, Skill, NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { label: "GitHub", href: "https://github.com/SAACyberV99", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saber-ahmed-amine-217055285/", icon: "linkedin" },
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "VibeFlix",
        description:
        "A modern, feature-rich movie discovery application powered by The Movie Database (TMDb) API. Search, browse, sort, and explore thousands of movies with a sleek, Netflix-inspired interface.",
        tags: ["HTML", "CSS", "JS", "IMDB API"],
        year: "2024",
        link: "https://saacyberv99.github.io/VibeFlix/",
        github: "https://github.com/SAACyberV99/VibeFlix",
        featured: true,
    }
];

export const SKILLS: Skill[] = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "Docker", "AWS", "GitHub Actions"],
    }
];

