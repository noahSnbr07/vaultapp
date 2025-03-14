import { banner, links } from "@/assets/assets";
import { IndexLink } from "@/assets/json/index-links";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropdown from "./components/dropdown";

export default function HeaderContent() {

    return (
        <div className="flex gap-8 w-full justify-between items-center">
            <Link
                href={"/"}>
                <Image
                    className="object-fill"
                    height={40}
                    src={banner}
                    alt="VaultApp Banner"
                    title="VaultApp Banner" />
            </Link>

            <Dropdown />

            <div className="w-fill border-accent border-2 py-2 px-8 rounded-full hidden lg:flex gap-8">
                {links.map((link: IndexLink) =>
                    <Link
                        className="hover:opacity-50 text-accent-foreground transition-all font-bold"
                        key={link.id}
                        href={link.href}>
                        <p> {link.title} </p>
                    </Link>
                )
                }
            </div>
            <Link
                className="h-10"
                href={"/dashboard"}>
                <Button className="font-bold cursor-pointer" size={"lg"}>
                    Dashboard
                </Button>
            </Link>
        </div>
    );
}