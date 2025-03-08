import React from "react";
import { ResizablePanel } from "../ui/resizable";

export interface SidebarProps {
    children: React.ReactNode;
    hidden?: boolean;
}

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