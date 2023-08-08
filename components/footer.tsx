import {BsArrowRight, BsGithub} from "react-icons/bs";
import {ReactNode} from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={""}>
            Made with ❤️ by Daniel Bermann Schmidt
            <Chip
                prompt={
                    <>
                        Visit
                        <BsArrowRight/>
                    </>
                }
                link="https://github.com/DanielZ1337/portfolio-site"
            >
                Source on <BsGithub/> Github
            </Chip>
        </div>
    )
}

const Chip = ({
                  children,
                  prompt,
                  link,
                  onClick,
              }: {
    readonly children: ReactNode
    readonly prompt?: ReactNode
    readonly link?: string
    readonly onClick?: () => void
}) => (
    <Link
        // className={styles.chip}
        className={"border bg-secondary flex items-center justify-center h-8 mb-6 whitespace-no-wrap duration-100 cursor-pointer select-none m-0 text-white"}
        role="button"
        tabIndex={0}
        target="_blank"
        href={link!}
        rel="noreferrer"
        onClick={onClick}
    >
		<span
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
            }}
        >
			{children}
		</span>
        {prompt && (
            <>
                {' '}
                <div className="divider"/>
                <div>{prompt}</div>
            </>
        )}
    </Link>
)