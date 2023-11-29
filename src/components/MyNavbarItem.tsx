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
        <NavbarItem>
            <Link color={pathname === url ? 'success' : 'foreground'} href={url}>
                {title}
            </Link>
        </NavbarItem>
    )
}