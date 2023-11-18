import Image from "next/image";
import Link from "next/link";

const StarterPage: React.FC = () => {
  return (
      <div className="container m-auto w-full">
          <header className="flex flex-row justify-between p-4 font-bold">
              <div className="flex items-center">
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/cognitrails-logo.png"
                        alt="CogniTraills Logo"
                        width={30}
                        height={30}
                        className="flex rounded-md"
                    />
                    CogniTrails
                  </Link>
              </div>
              <div className="flex gap-2">
                  <Link className="text-white bg-black rounded-md py-1 px-2" href="/workspace/profile">Login</Link>
                  <Link className="text-white bg-black rounded-md py-1 px-2" href="/workspace/profile">SignUp</Link>
              </div>
          </header>
          <main>
              <section className="container px-8 mx-auto mt-20 max-w-2xl text-center">
                  <h2 className="font-extrabold text-5xl">Embark on Your Learning Odyssey with CogniTrails</h2>
                  <p className="text-gray-400 py-8 desktop:max-w-lg mx-auto">Welcome to CogniTrails - your guide to personalized learning! Start creating your unique educational paths and exploring a world of knowledge. Click below to begin your learning journey!/work</p>
                  <Link className="text-white bg-black rounded-md py-2 px-4 font-bold" href="/workspace/trails">Star your own trail</Link>
              </section>
          </main>
      </div>
  )
}

export default StarterPage;