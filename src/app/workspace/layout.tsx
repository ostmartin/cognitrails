import { SideBar } from "components";
import { WorkspaceHeader } from "components";
import { GlobalAuthProvider } from "./globalAuthProvider";

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
        <GlobalAuthProvider>
            <main className="m-auto px-2 flex h-full w-full">
                <SideBar links={LINKS}/>
                <div className="h-screen grow flex flex-col">
                    <WorkspaceHeader/>
                    <section className="overflow-auto grow p-6">
                        {children}                    
                    </section>
                </div>
            </main>
        </GlobalAuthProvider>
    )
}

export default WorkspaceLayout;