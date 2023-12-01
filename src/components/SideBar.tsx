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
                base: "w-fit min-w-[200px] hidden tablet:flex desktop:min-w-[300px] justify-between backdrop-saturate-100 p-2 transition-all",
                wrapper: "flex-col h-full p-0 bg-[#2C3440] py-4 rounded-lg",
                content: "flex-col items-start mt-8 w-full",
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
                <NavbarItem className="mt-auto w-full">
                    <SignOutButton/>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default SideBar;