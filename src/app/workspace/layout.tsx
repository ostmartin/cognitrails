import Link from "next/link";

const WorkspaceLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <main className="m-auto w-screen px-2 flex h-full">
            <nav className="justify-between flex-col border-r-2 h-screen w-[15vw] pt-4 hidden tablet:flex">
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link href="/workspace/profile">Profile</Link>
                        </li>
                    <li>
                        <Link href="/workspace/projects">Projects</Link>
                        </li>
                    <li>
                        <Link href="/workspace/trails">Trails</Link>
                        </li>
                </ul>
                <Link href="/">Log Out</Link>
            </nav>
            <div className="h-screen w-[100vw] tablet:w-[85vw]">
                <header className="flex justify-end items-center w-full border-b-2 h-[5%]">
                    <Link href="/workspace/trails">Create new trail</Link>
                </header>
                {children}
            </div>
        </main>
    )
}

export default WorkspaceLayout;