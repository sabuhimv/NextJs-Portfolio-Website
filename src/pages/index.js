import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from '../../public/images/profiler.png'
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
export default function Home() {
  return (
    <>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className="pt-0">

          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="CodeBucks" className="w-full h-auto" />
            </div>

            <div className="w-1/2 pl-[50px]">
              <h1 className="inline-block w-full text-dark font-bold capitalize text-6xl">Turning Vision Into Reality With Code And Design.</h1>
              <p className="my-4 text-base font-medium">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <div className="flex items-center self-start mt-2">
                <Link href="/SabuhiMammadovCV.pdf" target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 rounded-lg text-lg font-semibold
              hover:bg-light hover:text-dark border border-solid border-transparent 
              hover:border-dark"
                  download={true}
                >Resume <LinkArrow className={"w-6 ml-1"} /> </Link>

                <Link href={"mailto:sebuhimv@gmail.com"} target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark  underline"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />



      </main>
    </>

  )
}
