import React from "react";
import Main from "./main";
import Header from "./header";
import Sidebar from "./sidebar";
import { ResizableHandle, ResizablePanelGroup } from "../ui/resizable";

interface WrapperProps {
    sidebarHidden?: boolean;
    children: React.ReactNode;
    headerContent: React.ReactNode;
    headerFullWidth?: boolean;
    className?: string;
}

export default function Wrapper({ sidebarHidden, children, headerContent, className }: WrapperProps): React.JSX.Element {

    return (
        <div className="size-full flex flex-col">

            <Header>
                {headerContent}
            </Header>

            <ResizablePanelGroup
                direction="horizontal"
                className="flex-1">

                <Sidebar hidden={sidebarHidden}>
                    Sidebar
                </Sidebar>

                <ResizableHandle className="bg-accent w-1" />

                <Main className={className}>
                    {children}
                </Main>

            </ResizablePanelGroup>
        </div>
    );
}