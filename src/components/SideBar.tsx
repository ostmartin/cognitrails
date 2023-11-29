'use client'

import NextImage from "next/image";
import {
    Navbar, 
    NavbarContent, 
    NavbarItem,
    NavbarBrand
} from "@nextui-org/navbar";

import { MyNavbarItem } from "./MyNavbarItem";
import { SignOutButton } from "./SignOutButton";

import logo from '../public/cognitrails-logo.png';

type SideBarProps = {
    links: {
        title: string;
        url: string
    }[]
}

const SideBar: React.FC<SideBarProps> = ({links}) => {

    return (      
        <Navbar
            classNames={{
                base: "w-fit border-2 rounded-lg justify-between",
                wrapper: "flex-col max-w-[15vw] h-full py-4",
                content: "flex-col items-start mt-8",
                brand: "grow-0"
            }}
        >
            <NavbarBrand>
                <NextImage
                    src={logo}
                    width={40}
                    height={40}
                    alt="CogniTraills"
                    className="flex rounded-md"
                />
            </NavbarBrand>
            <NavbarContent>
                {
                    links.map((link, i) => (
                        <MyNavbarItem key={i} url={link.url} title={link.title}/>
                    ))
                }
                <NavbarItem className="mt-auto">
                    <SignOutButton/>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default SideBar;