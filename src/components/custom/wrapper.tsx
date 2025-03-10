import React from "react";
import Main from "./main";
import Header from "./header";
import Sidebar from "./sidebar";
import { ResizableHandle, ResizablePanelGroup } from "../ui/resizable";

interface WrapperProps {
    sidebarHidden?: boolean;            //toggle sidebar visibility
    headerFullWidth?: boolean;
    children: React.ReactNode;
    headerContent: React.ReactNode;
    className?: string;                 //classname applies to main component
}

/**
 * 
 * @param children rendered side content
 * @param headerContent rendered header content
 * @returns wrapper component to display content
 * @description must be used to wrap each page of a route
 */

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

                {/* hide resize handle if there is no second panel */}
                {!sidebarHidden && <ResizableHandle className="bg-accent w-1" />}

                { /* main content display, takes classname */}
                <Main className={className}>
                    {children}
                </Main>

            </ResizablePanelGroup>
        </div>
    );
}