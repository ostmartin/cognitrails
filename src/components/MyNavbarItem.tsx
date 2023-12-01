'use client'

import { NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";

export const MyNavbarItem = ({url, title}: {
    title: string;
    url: string
}) => {
    const pathname = usePathname();

    return (
        <NavbarItem className="w-full">
            <Link className="font-bold text-lg flex w-full" color="primary" isBlock href={url}>
                {title}
            </Link>
        </NavbarItem>
    )
}