"use client";

import { links } from "@/assets/assets";
import { IndexLink } from "@/assets/json/index-links";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Dropdown() {


    return (
        <div className="lg:hidden flex-1 max-w-sm border-accent border-2 rounded-xl p-2 text-center">
            <DropdownMenu>
                <DropdownMenuTrigger className="size-full">
                    <p className="font-bold size-full rounded-xl w-full max-w-xl"> Options </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {links.map((link: IndexLink) => (
                        <DropdownMenuItem
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