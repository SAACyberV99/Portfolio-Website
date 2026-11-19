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
    { label: "Instagram", href: "https://www.instagram.com/cyberv99/", icon: "instagram" },
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Amber - KIO Landing Page",
        description:
        "Amber",
        tags: ["Frontend", "Landing Page", "UI"],
        year: "2026",
        link: "https://amber.mykio.shop/f/amber",
        featured: true,
    },
    {
        id: 2,
        title: "Arcade Hub",
        description:
        "A full-stack arcade game website built with MongoDB, Express.js, React (Vite), and Node.js - a MERN-stack project.",
        tags: ["React (Vite), MERN stack", "HTML", "CSS"],
        year: "2025",
        link: "https://arcade-hub-mern.netlify.app/",
        github: "https://github.com/SAACyberV99/arcade-hub-mern",
        featured: true,
    }
];

export const SKILLS: Skill[] = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "Vite", "TypeScript", "JavaScript", "Tailwind CSS", "Redux.js", "Bootstrap", "Responsive Design"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "Flask", "Redis", "REST API"],
    },
    {
        category: "DevOps & Cloud",
        items: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions", "GitLab CI", "Nginx", "Grafana"],
    },
    {
        category: "Tools & Languages",
        items: ["Python", "C", "Java", "Qt", "SQLite", "Git", "Linux", "Bash"],
    }
];
