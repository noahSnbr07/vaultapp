"use server";

import Image from "next/image";
import { banner } from "@/assets/assets";
import AuthCard from "./auth-card";

export default async function ContentSection({ value }: { value: string }) {


    return (
        <div className="flex-1 flex-col h-full flex justify-center items-center gap-16">
            <Image
                alt="vaultapp banner"
                title="vaultapp banner"
                src={banner}
                width={300}
                className="opacity-50 hover:opacity-100 transition-all cursor-pointer"
            />

            <AuthCard value={value} />
        </div>
    );
}