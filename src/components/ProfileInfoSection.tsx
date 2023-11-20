'use client'

import { useState } from "react";
import { T_User } from "@/types/data";
import { ProfileImage } from ".";

type ProfileSectionProps = {
    user: T_User;
}

const ProfileInfoSection: React.FC<ProfileSectionProps> = ({user}) => {
    const {nickname, name, location, blog, photo} = user;

    const [userImage, setUserImage] = useState<string | null>(photo || null);

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const uploadedPhoto = reader.result as string;
                setUserImage(uploadedPhoto);

                //Здесь можно добавить запрос к серверу
            }
            reader.readAsDataURL(file);
        }
    }

    return(
        <section className="flex justify-between m-auto max-w-7xl">
            <div>
                <h2>{nickname}</h2>
                <p>{name}</p>
                <p>{location}</p>
                <p>{blog}</p>
            </div>
            <ProfileImage
                image={userImage as string}
                alt={name as string}
                handlePhotoChange={handlePhotoChange as () => void}
            />
        </section>
    )
}

export default ProfileInfoSection;