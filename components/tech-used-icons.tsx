import React from "react";

interface TechUsedIconsProps {
    readonly icons: {
        readonly title: string;
        readonly icon: React.ReactElement;
    }[]
}

export default function TechUsedIcons({icons}: TechUsedIconsProps) {
    return (
        <div className="flex gap-2">
            {icons.map(icon => (
                <div key={icon.title} className="flex gap-2">
                    {React.cloneElement(icon.icon, {size: 24, className: "text-primary"})}
                    <span className={"sr-only"}>{icon.title}</span>
                    <Divider/>
                </div>
            ))}
        </div>
    )
}

function Divider() {
    return (
        <span className="text-primary">•</span>
    )
}