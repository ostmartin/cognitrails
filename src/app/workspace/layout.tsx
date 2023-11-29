import SideBar from "@/components/SideBar";
import WorkspaceHeader from "@/components/WorkspaceHeader";

const LINKS: {title: string, url: string}[] = [
    {
        title: 'Profile',
        url: '/workspace/profile'
    },
    {
        title: 'Projects',
        url: '/workspace/projects'
    },
    {
        title: 'Trails',
        url: '/workspace/trails'
    }
]

const WorkspaceLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <main className="m-auto px-2 flex h-full">
            <SideBar links={LINKS}/>
            <div className="h-screen w-[100vw] tablet:w-[85vw]">
                <WorkspaceHeader/>
                <section className="overflow-auto h-[95%] p-6">
                    {children}                    
                </section>
            </div>
        </main>
    )
}

export default WorkspaceLayout;