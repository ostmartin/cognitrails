import { T_Project } from "types/data";

const SingleProject: React.FC<T_Project> = ({url, title, description, features, stack}) => {
    return (
        <section className="flex justify-between m-auto max-w-6xl overflow-y-auto h-[95%]">
            <div className="w-2/5">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0ZRs6i9PIaxbN3oSv_oV0pN31UjmvpMl8w&usqp=CAU" alt="Photo" />
                    <figcaption>Preview</figcaption>
                </figure>
            </div>
            <div className="flex flex-row justify-between w-2/5">
                <div>
                    <h2>{title || 'Title'}</h2>
                    <p>{stack || 'Stack'}</p>
                    <p>{description || 'Description'}</p>
                    <p>{features || 'Features'}</p>
                </div>
                <div>
                    <a href={url || '#'}>Visit</a>
                </div>
            </div>
        </section>
    )
}

export default SingleProject;