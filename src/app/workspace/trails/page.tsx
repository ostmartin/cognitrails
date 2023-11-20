import Link from "next/link";

const TailsList: React.FC = () => {
    return (
        <>
            <div>
                <Link href={`/workspace/trails/${'first-trail'}`}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0ZRs6i9PIaxbN3oSv_oV0pN31UjmvpMl8w&usqp=CAU" alt="" />
                </Link>
            </div>
            <div className="h-12 w-12 border border-black rounded-md relative">
                <span className="w-5/6 h-[2px] bg-black absolute top-5 left-1 rotate-90"></span>
                <span className="w-5/6 h-[2px] bg-black absolute top-5 left-1"></span>
            </div>
        </>
    )
}

export default TailsList;