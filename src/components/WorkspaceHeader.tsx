import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import {
    Navbar, 
    NavbarContent, 
    NavbarItem
  } from "@nextui-org/navbar";
import { ThemeSwitcher } from "./ThemeSwitcher";

const WorkspaceHeader: React.FC = async () => {
    return (
        <Navbar
            classNames={{
                base: "grow h-fit max-h-[90px] p-2 bg-inherit backdrop-saturate-100",
                content: "w-full bg-[#2C3440] px-4 rounded-lg",
                wrapper: "min-w-full p-0"
            }}
        >
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher/>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        href="/workspace/trails"
                        color="primary"
                        className="font-bold"
                    >
                        Create new trail
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default WorkspaceHeader;