const ProfilePage: React.FC = () => {
    return (
        <section className="overflow-y-auto h-[95%]">
            <section className="flex justify-between m-auto max-w-7xl">
                <div>
                    <h2>Nickname</h2>
                    <p>Name {'(optional)'}</p>
                    <p>Location</p>
                    <p>What`s on your mind?</p>
                </div>
                <div>
                    <figure>
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Photo" />
                        <figcaption>Photo</figcaption>
                    </figure>
                </div>
            </section>
            <section className="m-auto max-w-7xl">
                <div>
                    <p className="flex justify-between">Pinned Trails<span>to list</span></p>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0ZRs6i9PIaxbN3oSv_oV0pN31UjmvpMl8w&usqp=CAU" alt="prev" />
                    </div>
                </div>
                <div>
                    <p className="flex justify-between">Pinned Projects<span>to list</span></p>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0ZRs6i9PIaxbN3oSv_oV0pN31UjmvpMl8w&usqp=CAU" alt="prev" />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ProfilePage;