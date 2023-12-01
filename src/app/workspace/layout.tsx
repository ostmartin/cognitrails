import SideBar from "components/SideBar";
import WorkspaceHeader from "components/WorkspaceHeader";

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
        <main className="m-auto px-2 flex h-full w-full">
            <SideBar links={LINKS}/>
            <div className="h-screen grow flex flex-col">
                <WorkspaceHeader/>
                <section className="overflow-auto grow p-6">
                    {children}                    
                </section>
            </div>
        </main>
    )
}

export default WorkspaceLayout;