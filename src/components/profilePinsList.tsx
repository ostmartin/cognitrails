import Link from "next/link";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

type ProfilePinsListProps = {
    title: string;
}

const styles = {
    "border-radius": "15px",
    "background-color": "green",
}

export const ProfilePinsList: React.FC<ProfilePinsListProps> = ({title}) => {
    return (
        <div>
            <p className="flex justify-between text-xl">Pinned {title}<Button variant="ghost" as={Link} href={`/workspace/${title}`}>All</Button></p>
            <div className="grid grid-cols-responsive gap-4 p-5">
                <Image
                    width={200}
                    height={200}
                    fallbackSrc={`https://placehold.jp/200x200.png?text=NO&nbsp;IMAGE`}
                />
                <Image
                    width={200}
                    height={200}
                    fallbackSrc="https://placehold.jp/200x200.png?text=NO&nbsp;IMAGE"
                />
                <Image
                    width={200}
                    height={200}
                    fallbackSrc="https://placehold.jp/200x200.png?text=NO&nbsp;IMAGE"
                />
            </div>
        </div>
    )
}