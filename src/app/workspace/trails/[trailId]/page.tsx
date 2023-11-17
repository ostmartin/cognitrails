import { T_Trail } from "@/types/data";

const TrailPage: React.FC<T_Trail> = ({completed = false}) => {
    return (
        <div className="h-[95%] overflow-auto flex flex-row w-[inherit] relative">
            <div className="overflow-auto flex flex-row gap-4 basis-full">
                It must be a trail
            </div>
            <div className="min-w-[250px] h-full bg-slate-300 overflow-y-auto"></div>
        </div>
    )
}

export default TrailPage;