import Image from "next/image";

import { UserIcon } from "components/userIcon";
import { SignInButtonWithModal } from "components/signInButtonWithModal";
import { ThemeSwitcher } from "components/themeSwitcher";

/* NextUI Components */
import {  
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
/*-----------------------*/

import logo from '@/public/cognitrails-logo.png';

const StarterPage: React.FC = async () => {

    return (
        <>
            <Navbar>
                <NavbarBrand>
                        <Image
                            src={logo}
                            width={30}
                            height={30}
                            alt="CogniTraills Logo"
                            className="flex rounded-md"
                        />
                        <p className="ps-2 text-inherit font-bold">CogniTrails</p>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <ThemeSwitcher/>
                    </NavbarItem>
                    <NavbarItem>
                        <SignInButtonWithModal/>
                        <UserIcon/>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <main>
                <section className="px-8 mx-auto mt-20 max-w-2xl text-center">
                    <h2 className="font-extrabold text-5xl">Embark on Your Learning Odyssey with CogniTrails</h2>
                    <p className="text-gray-400 py-8 desktop:max-w-lg mx-auto">Welcome to CogniTrails - your guide to personalized learning! Start creating your unique educational paths and exploring a world of knowledge. Click below to begin your learning journey!</p>
                    <Button as={Link} className="font-bold" color="primary" href="/workspace/trails">Start your own trail</Button>
                </section>
            </main>
        </>
    )
}

export default StarterPage;