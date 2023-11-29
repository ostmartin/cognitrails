'use client'

import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    useDisclosure
} from "@nextui-org/modal";
import {Button} from "@nextui-org/button";

import { GitHubButton } from "./GitHubButton";

export const SignInModal = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>
                Sign In
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" backdrop="blur"
                classNames={{
                    body: "flex flex-col justify-center items-center",
                    header: "flex flex-col justify-center items-center"
                }}
                >
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader>Login via</ModalHeader>
                            <ModalBody>
                                <p>Choose sign in method:</p>
                                <GitHubButton onClick={onClose}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={onClose}>Close</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
