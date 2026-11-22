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
        title: "Amber - KIO Store Landing Page",
        description:
        "Amber is a modern and elegant e-commerce landing page for KIO Store shops, designed with a minimalist and fluid approach. It showcases products through modular sections. It offers an immersive shopping experience with a streamlined checkout process, a focus on visuals, and a polished layout to reinforce the brand image.",
        tags: ["Frontend", "Landing Page", "UI", "E-Commerce", "KIO"],
        year: "2026",
        link: "https://amber.mykio.shop/f/amber",
        featured: true,
    },
    {
        id: 2,
        title: "Orelia - KIO Store Landing Page",
        description:
        "Orelia is a modern and sophisticated online store landing page dedicated to a brand of jewelry, bracelets, and accessories. Designed with a clean, minimalist layout, the site showcases the product through modular sections and carefully curated visuals. It offers a seamless and immersive shopping experience, with a streamlined checkout process and a strong emphasis on branding.",
        tags: ["Frontend", "Landing Page", "UI", "E-Commerce", "KIO"],
        year: "2026",
        link: "https://orelia.mykio.store/f/orelia/",
        featured: true,
    },
    {
        id: 3,
        title: "Arcade Hub",
        description:
        "A full-stack arcade game website built with MongoDB, Express.js, React (Vite), and Node.js - a MERN-stack project.",
        tags: ["React (Vite)", "MERN stack", "HTML", "CSS"],
        year: "2025",
        link: "https://arcade-hub-mern.netlify.app/",
        github: "https://github.com/SAACyberV99/arcade-hub-mern",
        featured: false,
    }
];

export const SKILLS: Skill[] = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "Vite", "TypeScript", "JavaScript", "Tailwind CSS", "Redux.js", "Bootstrap", "Responsive Design"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "SQLite", "Flask", "Redis", "REST API"],
    },
    {
        category: "DevOps & Cloud",
        items: ["Linux", "Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions", "GitLab CI", "Nginx", "Prometheus", "Grafana"],
    },
    {
        category: "Tools & Languages",
        items: ["Python", "C", "Java", "Qt", "Git", "Bash"],
    }
];
