import Image from "next/image";
import Skeleton from "@/public/ProfileSkeleton.png";

type ProfileImageProps = {
    handlePhotoChange: () => void;
    image: string;
    alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({handlePhotoChange, image, alt}) => {
    return (
        <div>
            <figure>
                {image ? (
                    <Image
                        src={image}
                        alt={alt as string}
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                ) : (
                    <Image
                        src={Skeleton}
                        alt="Default Photo"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                )}
                <input type="file" accept="image/*" onChange={handlePhotoChange} />
            </figure>
        </div>
    )
}

export default ProfileImage;