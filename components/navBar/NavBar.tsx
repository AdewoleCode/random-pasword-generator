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
        <header
            className='w-full sticky top-0 z-50 border-b bg-[#fff9e1] dark:bg-zinc-900 dark:border-zinc-700'
        >
            <div className='flex h-16 item-center px-10 sm:px-16 lg:px-40'>
                <div className="nav flex justify-between">
                    <h2 className='logo-name font-bold text-black-600 dark:text-white'>
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
                                    <IoSunny className='nav-icon w-[35px] h-[35px] dark:text-white' />
                                    : <IoMoon className='nav-icon w-[30px] h-[30px] dark:text-white' />

                            }
                        </span>
                        <a href="">
                            <SiSimilarweb className='nav-icon w-[24px] h-[24px] dark:text-white' />
                        </a>
                        <a href="">
                            <IoLogoGithub className='nav-icon w-[29px] h-[29px] dark:text-white' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar