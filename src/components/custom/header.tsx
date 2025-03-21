import React from "react";

export interface HeaderProps {
    children: React.ReactNode;
    fullWIdth?: boolean;
    hidden?: boolean;
}

/**
 * 
 * @param children headers content, raw
 * @param fullWIdth weather content should be capped at 1280px
 * @returns flexbox header to show important links and connections
 */
export default function Header({ children, fullWIdth, hidden }: HeaderProps): React.JSX.Element {

    if (hidden) return <></>;

    return (
        <header className="w-full flex justify-center p-4 border-b-4 border-accent">
            <div className={`${!fullWIdth && "max-w-7xl"} w-full`}>
                {children}
            </div>
        </header>
    );
}