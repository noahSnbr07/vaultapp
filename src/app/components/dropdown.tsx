"use client";

import { links } from "@/assets/assets";
import { IndexLink } from "@/assets/json/index-links";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export default function Dropdown() {


    return (
        <div className="md:hidden w-full max-w-sm bg-accent rounded-xl p-2 text-center">
            <DropdownMenu>
                <DropdownMenuTrigger className="size-full">
                    <p className="bg-accent font-bold size-full rounded-xl w-full max-w-xl"> Options </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                    {links.map((link: IndexLink) => (
                        <DropdownMenuItem
                            className="py-2 px-4 cursor-pointer bg-accent w-full"
                            key={link.id}>
                            <Link href={link.href}>
                                {link.title}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}