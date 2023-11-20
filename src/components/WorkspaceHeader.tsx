import Link from "next/link";

const WorkspaceHeader: React.FC = async () => {
    return (
        <header className="flex justify-end items-center w-full border-b-2 h-[5%]">
            <Link href="/workspace/trails">Create new trail</Link>
        </header>
    )
}

export default WorkspaceHeader;