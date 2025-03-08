import React from "react";
import { ResizablePanel } from "../ui/resizable";

export interface MainProps {
    children: React.ReactNode;
    fullWIdth?: boolean;
    className?: string;
}

export default function Main({ children, fullWIdth, className, }: MainProps): React.JSX.Element {

    return (
        <ResizablePanel
            minSize={50}
            maxSize={90}
            defaultSize={85}
            className="flex justify-center">
            <main className={`w-full overflow-y-scroll items-center flex flex-col ${!fullWIdth && "max-w-7xl"} ${className}`}>
                {children}
            </main>
        </ResizablePanel>
    );
}