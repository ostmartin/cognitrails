import Link from "next/link";

type SideBarProps = {
    links: {
        title: string;
        url: string
    }[]
}

const SideBar: React.FC<SideBarProps> = async ({links}) => {
    return (
        <nav className="justify-between flex-col border-r-2 h-screen w-[15vw] pt-4 hidden tablet:flex">
            <ul className="flex flex-col gap-3">
                {
                    links.map(link => (
                        <li>
                            <Link href={link.url}>
                                {link.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Link href="/">Log Out</Link>
        </nav>        
    )
}

export default SideBar;