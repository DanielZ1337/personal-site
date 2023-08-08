import {ReactNode} from "react";
import Link from "next/link";

export default function Chip({
                                 children,
                                 prompt,
                                 link,
                             }: {
    readonly children: ReactNode
    readonly prompt?: ReactNode
    readonly link?: string
}) {
    return <Link
        className={"group rounded-full w-fit transition-all active:shadow-sm shadow-[0_0px_30px_-15px_hsl(var(--foreground))] active:bg-background border border-muted-foreground/10 hover:border-primary px-4 bg-secondary flex items-center justify-center h-8 whitespace-no-wrap duration-100 cursor-pointer select-none m-0"}
        role="button"
        tabIndex={0}
        target="_blank"
        href={link!}
        rel="noreferrer"
    >
		<span className={"group-hover:text-primary flex items-center justify-center gap-1.5 whitespace-nowrap"}>
			{children}
		</span>
        {prompt && (
            <>
                <div className="h-3/4 w-1 items-stretch mx-3 border bg-muted-foreground/10 rounded-md"/>
                <span className={"text-primary flex items-center gap-1.5"}>{prompt}</span>
            </>
        )}
    </Link>
}