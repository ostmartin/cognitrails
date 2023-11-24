export const Modal = (props: { children: React.ReactNode }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 overflow-auto">
            <div className="w-1/3 max-w-md min-h-fit h-[500px] bg-white m-auto rounded-md relative top-[10%] flex justify-center flex-col items-center">
                {props.children}
            </div>
        </div>
    )
}