import Link from "next/link";

export const IconClose = (
    {className, href} :
    {
        className?: string;
        href: string
    }) => {

    return (
        <Link href={href} className={`absolute h-[30px] w-[30px] cursor-pointer hover:scale-110 transition-all ${className}`}>
            <span className="absolute block w-[32px] h-[3px] bg-black rotate-45 translate-y-[13.5px] top-0 rounded-lg"></span>
            <span className="absolute block w-[32px] h-[3px] bg-black -rotate-45 -translate-y-[13.5px] bottom-0 rounded-lg"></span>
        </Link>
    )
}