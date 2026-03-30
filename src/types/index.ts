export interface Project{
    id: number,
    title: string,
    description: string,
    tags: string[];
    year: string;
    link?: string;
    github?: string;
    featured: boolean;
}

export interface Skill{
    category: string,
    items: string[]
}

export interface NavItem{
    label: string,
    href: string
}

export interface SocialLink{
    label: string;
    href: string;
    icon: string;
}
