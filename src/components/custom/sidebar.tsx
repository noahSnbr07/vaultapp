import React from "react";
import { ResizablePanel } from "../ui/resizable";

export interface SidebarProps {
    children: React.ReactNode;
    hidden?: boolean;
}

/**
 * 
 * @param children sidebar raw content
 * @param hidden weather sidebar is rendered or not
 * @returns resizable sidebar to access tools & links
 */
export default function Sidebar({ children, hidden, }: SidebarProps): React.JSX.Element {

    if (hidden) return <></>;

    return (
        <ResizablePanel
            minSize={10}
            maxSize={50}
            defaultSize={15}>
            <aside className="p-4 size-full">
                {children}
            </aside>
        </ResizablePanel>
    );
}