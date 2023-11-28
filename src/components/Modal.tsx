'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
    children: React.ReactNode;
    onClose?: () => void;
}

export const Modal = ({ children, onClose }: Props) => {
    const searchParams = useSearchParams();
    const showModal = searchParams.get('sign-in');
    const modalRef = useRef<null | HTMLDialogElement>(null);

    useEffect(() => {
        if (showModal === 'y') {
            modalRef.current?.showModal()
        } else {
            modalRef.current?.close()
        }
    }, [showModal]);

    const onCloseModal = () => {
        modalRef.current?.close();
        onClose?.();
    }

    const modal: JSX.Element | null = showModal === 'y'
    ? (
        <dialog ref={modalRef} className="absolute top-0 left-0 backdrop:bg-black/50 overflow-auto m-autow-1/3 max-w-md min-h-fit h-[500px]">
            <div className="bg-white h-full w-full m-auto rounded-md top-[10%] flex flex-col items-center justify-center gap-2 p-3">
                {children}
                <button onClick={onCloseModal} className={`absolute top-0 right-0 h-[30px] w-[30px] cursor-pointer hover:scale-110 transition-all`}>
                    <span className="absolute block w-[32px] h-[3px] bg-black rotate-45 translate-y-[13.5px] top-0 rounded-lg"></span>
                    <span className="absolute block w-[32px] h-[3px] bg-black -rotate-45 -translate-y-[13.5px] bottom-0 rounded-lg"></span>
                </button>
            </div>
        </dialog>
    ) : null;

    return modal;
}