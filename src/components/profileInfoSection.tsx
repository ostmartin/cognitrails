'use client'

import { useState } from "react";
import { Avatar } from "@nextui-org/avatar";

import { T_User } from "types/data";

type ProfileSectionProps = {
    user: T_User;
}

export const ProfileInfoSection: React.FC<ProfileSectionProps> = ({user}) => {
    const {nickname, name, location, blog, photo} = user;

    return(
        <section className="flex justify-around mb-16 m-auto max-w-7xl flex-col tablet:flex-row">
            <div className="grow grid grid-cols-1 p-10 gap-2 text-center tablet:text-left">
                <h2 className="text-4xl">{nickname}</h2>
                <p className="italic">({name})</p>
                <p>{location}</p>
                <p className="justify-self-center">{blog}</p>
            </div>
            <div className="grow flex items-center justify-center">
                <Avatar
                    src={photo ? photo : undefined}
                    className="min-h-[120px] min-w-[120px] max-w-full max-h-full m-auto"
                />
            </div>
        </section>
    )
};