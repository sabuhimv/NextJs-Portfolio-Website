import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {LinkedInIcon, GithubIcon } from './Icons'
import { useRouter } from 'next/router'
const CustomLink = ({href,title,className=""}) => {
    const router = useRouter();
    // console.log(router)
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
                h-[1px] inline-block bg-dark 
                absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300  
                ${router.asPath === href ? 'w-full' : 'w-0'} 
                `}>&nbsp;</span>
        </Link>
    )
}


const Navbar = () => {
  return (
    <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >

            <nav>
                <CustomLink href={"/"} title={"Home"} className='mr-4'/>
                <CustomLink href="/about" title={"About"} className='mx-4'/>
                <CustomLink href="/projects" title={"Projects"} className='mx-4'/>
                <CustomLink href="/articles" title={"Articles"} className='ml-4'/>
            </nav>

            <h2>
                <Logo/>
            </h2>

            <nav className='flex items-center justify-center flex-wrap'>
                <a href={"https://github.com/sebuhimv"} target={'_blank'}
                    className='w-6 mr-3'
                >
                    <LinkedInIcon/>
                </a>
                <a href={"https://github.com/sebuhimv"} target={'_blank'}
                className='w-6 ml-3'
                >
                    <GithubIcon/>
                </a>
            </nav>

        </header>
  )
}

export default Navbar