import { ProfilePinsList } from ".";

export const ProfilePinsSection: React.FC = async () => {
    return (
        <section className="m-auto max-w-7xl">
            <ProfilePinsList
                title="trails"
            />
            <ProfilePinsList
                title="projects"
            />
        </section>
    )
}