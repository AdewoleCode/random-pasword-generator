"use client"

import React from 'react'
import '../navBar/NavBar.css'
import { IoMoon, IoSunny } from "react-icons/io5";
import { SiSimilarweb } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { UseTheme } from "../../utils/UseTheme"

const NavBar = () => {
    const { isDarkMode, setIsDarkMode } = UseTheme()
    return (
        <header className='w-full sticky top-0 z-50 border-b bg-zinc-900  dark:bg-[#fff9e1] dark:border-zinc-700'>
            <div className='flex h-14 item-center px-10 sm:px-16 lg:px-40'>
                <div className="nav flex justify-between">
                    <h2 className='logo-name font-bold text-[#fff9e1] dark:text-zinc-900'>
                        <a href="/">
                            Adewole.
                        </a>
                    </h2>
                    <div className='nav-child flex g-5'>
                        <span
                            onClick={() => setIsDarkMode(!isDarkMode)}
                        >
                            {
                                isDarkMode ?
                                    <IoSunny className='nav-icon w-[35px] h-[35px] dark:text-zinc-900' />
                                    : <IoMoon className='nav-icon w-[30px] h-[30px] dark:text-zinc-900' />
                            }
                        </span>
                        <a href="https://adewole-3d-portfolio.onrender.com/">
                            <SiSimilarweb className='nav-icon w-[24px] h-[24px] dark:text-zinc-900' />
                        </a>
                        <a href="https://github.com/AdewoleCode">
                            <IoLogoGithub className='nav-icon w-[29px] h-[29px] dark:text-zinc-900' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar