export default function TechnologiesUsedBadge({children}: { children: string }) {
    return (
        <span
            className={"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary/10 text-primary"}>
            {children}
        </span>
    )
}