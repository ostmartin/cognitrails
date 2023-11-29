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
                base: "border-2 w-full rounded-lg"
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
                    >
                        Create new trail
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default WorkspaceHeader;