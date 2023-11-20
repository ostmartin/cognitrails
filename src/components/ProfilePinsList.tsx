import Link from "next/link";

type ProfilePinsListProps = {
    title: string;
}

const ProfilePinsList: React.FC<ProfilePinsListProps> = ({title}) => {
    return (
        <div>
            <p className="flex justify-between">Pinned {title}<Link href={`/workspace/${title}`}>All</Link></p>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0ZRs6i9PIaxbN3oSv_oV0pN31UjmvpMl8w&usqp=CAU" alt="prev" />
            </div>
        </div>
    )
}

export default ProfilePinsList;