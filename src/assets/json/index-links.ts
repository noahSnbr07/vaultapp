export interface IndexLink {
    id: number;
    href: string;
    title: string;
}

const links: IndexLink[] = [
    { id: 0, href: "/pricing", title: "Pricing" },
    { id: 1, href: "/contact", title: "Contact" },
    { id: 2, href: "/changelog", title: "Changelog" },
    { id: 3, href: "/repository", title: "Repository" },
]

export default links;