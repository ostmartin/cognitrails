const TrailStagePage: React.FC = () => {
    return (
        <section className="h-[95%] overflow-auto">
            <h2>Title</h2>
            <div className="flex flex-row tablet:flex-col">
                <div>
                    <p>Goals</p>
                </div>
                <div>
                    <figure>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0ZRs6i9PIaxbN3oSv_oV0pN31UjmvpMl8w&usqp=CAU" alt="" />
                        <figcaption>Project title</figcaption>
                    </figure>
                </div>
            </div>
            <footer>
                <div>Links</div>
            </footer>
        </section>
    )
}

export default TrailStagePage;