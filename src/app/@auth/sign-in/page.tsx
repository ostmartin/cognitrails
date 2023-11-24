import { Modal, IconClose } from "@/components";
import { GitHubButton } from "@/components/GitHubButton";

const SignIn = () => {
    return (
        <Modal>
            <IconClose href="/" className="top-2 right-2"/>
            <h2>Login</h2>
            <p>Choose an authorization method</p>
            <GitHubButton/>
        </Modal>
    )
}

export default SignIn;