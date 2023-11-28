import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@/components/UserIcon";
import { SignInButton } from "@/components/SignInButton";

import { Modal } from "@/components";
import { GitHubButton } from "@/components/GitHubButton";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import logo from '../../public/cognitrails-logo.png';

const StarterPage: React.FC = () => {
    return (
        <>
            <header className="font-bold h-20">
                <div className="flex flex-row justify-between h-full">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src={logo}
                                width={30}
                                height={30}
                                alt="CogniTraills Logo"
                                className="flex rounded-md"
                            />
                            CogniTrails
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 h-full">
                        <ThemeSwitcher/>
                        <SignInButton/>
                        <UserIcon/>
                    </div>
                </div>
            </header>
            <main>
                <section className="container px-8 mx-auto mt-20 max-w-2xl text-center">
                    <h2 className="font-extrabold text-5xl">Embark on Your Learning Odyssey with CogniTrails</h2>
                    <p className="text-gray-400 py-8 desktop:max-w-lg mx-auto">Welcome to CogniTrails - your guide to personalized learning! Start creating your unique educational paths and exploring a world of knowledge. Click below to begin your learning journey!</p>
                    <Link className="text-white bg-black rounded-md py-2 px-4 font-bold" href="/workspace/trails">Start your own trail</Link>
                </section>
            </main>
            <Modal>
                <h2>Login</h2>
                <p>Choose an authorization method</p>
                <GitHubButton/>
            </Modal>
        </>
    )
}

export default StarterPage;