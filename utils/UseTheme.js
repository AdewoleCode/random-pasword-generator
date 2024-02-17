
import React, { useEffect, useState } from 'react'

export const UseTheme = (storageKey = "tailwind-darkMode") => {


    // const [isDarkMode, setIsDarkMode] = useState(() => {
    //     return localStorage.getItem(storageKey) ? 
    //     localStorage.getItem(storageKey) === "true" : false
    // })

    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        root.classList.add(isDarkMode ? "dark" : "light")

        localStorage.setItem(storageKey, isDarkMode.toString())

    }, [isDarkMode, storageKey])


    return { isDarkMode, setIsDarkMode }
}

