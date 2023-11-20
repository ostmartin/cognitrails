import {
    ProfileInfoSection, 
    ProfilePinsSection
} from "@/components";
import { T_User } from "@/types/data";

const currentUser: T_User = {
    nickname: 'Ostmartin',
    name: 'Arsenii',
    location: 'Kharkiv',
    blog: 'developing...'
}

const ProfilePage: React.FC = () => {
    return (
        <>
            <ProfileInfoSection user={currentUser}/>
            <ProfilePinsSection/>
        </>
    )
}

export default ProfilePage;