import { floating, pattern } from "@/assets/assets";
import Image from "next/image";

export default async function FillerSection() {


    return (
        <div className="hidden lg:block flex-1 bg-accent relative h-full">
            <Image
                draggable={false}
                className="absolute object-cover"
                src={pattern}
                fill
                alt="dot pattern"
                title="dot pattern"
            />
            <Image
                draggable={false}
                className="absolute object-cover"
                src={floating}
                fill
                alt="dot pattern"
                title="dot pattern"
            />
        </div>
    );
}