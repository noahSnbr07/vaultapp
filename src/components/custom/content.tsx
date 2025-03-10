import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";

export interface ContentProps {
    children: React.ReactNode;
    fullWIdth?: boolean;
}

/**
 * 
 * @param children main rendered content
 * @returns page content wrapper
 */
export default function Content({ children, /*fullWIdth = false, */ }: ContentProps): React.JSX.Element {

    return (
        <div>
            <Sidebar> Sidebar </Sidebar>
            <Main> {children} </Main>
        </div>
    );
}