import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { LinkedInIcon, GithubIcon, SunIcon, MoonIcon } from './Icons'
import { useRouter } from 'next/router'
import useThemeSwitcher from './hooks/useThemeSwitcher'


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    // console.log(router)
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
                h-[1px] inline-block bg-dark 
                absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300  
                ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light
                `}>&nbsp;</span>
        </Link>
    )
}


const CustomMobileLink = ({ href, title, className = "", toggle }) => {

    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`
                h-[1px] inline-block bg-light 
                absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300  
                ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark
                `}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    // console.log(isOpen)

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between
            dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
            "
        >

            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>



            {/* <h2>
                <Logo />
            </h2> */}

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href={"/"} title={"Home"} className='mr-4' />
                    <CustomLink href="/about" title={"About"} className='mx-4' />
                    <CustomLink href="/projects" title={"Projects"} className='mx-4' />
                    {/* <CustomLink href="/articles" title={"Articles"} className='ml-4' /> */}
                </nav>


                <nav className='flex items-center justify-center flex-wrap'>
                    <a href={"https://www.linkedin.com/in/sabuhi-mammadov-259a31249/"} target={'_blank'}
                        className='w-6 mr-3'
                    >
                        <LinkedInIcon />
                    </a>

                    <a href={"https://github.com/sabuhimv"} target={'_blank'}
                        className='w-6 ml-3'
                    >
                        <GithubIcon />
                    </a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
                    >
                        {
                            mode === "dark" ?
                                <SunIcon className={"fill-dark"} /> :
                                <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>


            {
                isOpen ?

                    <div
                    className='z-30 min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/75 py-32 rounded-lg backdrop-blur-md
            '>
                        <nav className='flex flex-col items-center justify-center'>
                            <CustomMobileLink href={"/"} title={"Home"} className='' toggle={handleClick} />
                            <CustomMobileLink href="/about" title={"About"} className='' toggle={handleClick} />
                            <CustomMobileLink href="/projects" title={"Projects"} className='' toggle={handleClick} />
                            {/* <CustomMobileLink href="/articles" title={"Articles"} className='ml-4' toggle={handleClick} /> */}
                        </nav>


                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            <a href={"https://www.linkedin.com/in/sabuhi-mammadov-259a31249/"} target={'_blank'}
                                className='w-6 mr-3 sm:mx-1'
                            >
                                <LinkedInIcon />
                            </a>
                           
                            <a href={"https://github.com/sabuhimv"} target={'_blank'}
                                className='w-6 ml-3  bg-light rounded-full dark:bg-dark'
                            >
                                <GithubIcon />
                            </a>

                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
                            >
                                {
                                    mode === "dark" ?
                                        <SunIcon className={"fill-dark"} /> :
                                        <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </div>


                    : null
            }


            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

        </header>
    )
}

export default Navbar