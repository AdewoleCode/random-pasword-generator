"use client"

import NavBar from "../components/navBar/NavBar"
import { FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { passwordStrength } from "check-password-strength"
import { useState } from "react";
import generator from "generate-password"


export default function Home() {

  const [passwordLength, setPasswordLength] = useState(10)
  const [numbers, setNumbers] = useState(false)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [currentPassword, setCurrentPassword] = useState<any>('P4$5w0rD!')

  console.log(passwordStrength("asdfasdf").value);


  const generatePassword = () => {
    const password = !numbers && !uppercase && !lowercase && !symbols
      ?
      <h2 className="text-red-500 text-[17px] font-bold">
        check atleast one box to generate password!
      </h2>
      :
      generator.generate({
        length: passwordLength,
        numbers: numbers,
        uppercase: uppercase,
        lowercase: lowercase,
        symbols: symbols
      })
    setCurrentPassword(password)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPassword)
    setIsCopied(true)
    timedMsg()
  }

  const timedMsg = () => {
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  const iconStyle = `min-h-6 min-w-6 cursor-pointer hover:text-blue-500`
  const iconActive = `min-h-6 min-w-6 text-blue-500 cursor-pointer`

  // setCurrentPassword(password)
  return (
    <>
      <NavBar />
      <main className="main-container bg-stone-700 h-[650px] w-full text-white flex item-center justify-center">
        <div className="child-main">
          <p className="head-text text-center mb-3">Password Generator</p>

          <div className="copy-input bg-zinc-900 flex justify-between items-center align-center gap-7 p-2">
            <p className="text-2xl bg-zinc-900 text-white-500 overflow-x-auto">{currentPassword}</p>
            <div className="flex flex-col items-center justify-center gap-1">
              {
                isCopied &&
                <h1
                  className="text-white text-xs text-blue-500 font-bold"
                >
                  COPIED
                </h1>
              }
              <FaRegCopy
                onClick={handleCopy}
                className={isCopied ? iconActive : iconStyle}
              />
            </div>
          </div>

          <div className="password-selector bg-zinc-900 mt-4 px-4 py-3">
            <div className="char-lenght flex justify-between items-center">
              <p>character length</p>
              <h3 className="number text-[33px] text-blue-600 mt-2">{passwordLength}</h3>
            </div>

            <div className="char-slider">
              <input
                className="range w-full bg-transparent cursor-pointer"
                type="range"
                max={50}
                step={1}
                value={passwordLength}
                onChange={(e) => setPasswordLength(e.target.valueAsNumber)}
              />
            </div>

            <div className="flex flex-col gap-3 mt-3">
              <CheckComponent
                onClick={() => setUppercase(!uppercase)}
                isChecked={uppercase}
                text="Include UpperCase Letters"
              />
              <CheckComponent
                onClick={() => setLowercase(!lowercase)}
                isChecked={lowercase}
                text="Inlcude LowerCase Letters"
              />
              <CheckComponent
                onClick={() => setNumbers(!numbers)}
                isChecked={numbers}
                text="Include Numbers"
              />
              <CheckComponent
                onClick={() => setSymbols(!symbols)}
                isChecked={symbols}
                text="Inlcude Symbols"
              />
            </div>

            <div className="password-strength flex justify-between align-center mt-5 mb-5 bg-zinc-700 p-3 rounded-sm">
              <p className="pass-text text-[15px]">STRENGTH</p>
              <div className="flex gap-2 items-center">
                <p className="pass-text text-[15px]">STRONG</p>
                <div className="flex gap-2 ">
                  <PasswordStrength type='Medium' />
                  <PasswordStrength type='Medium' />
                  <PasswordStrength type='Medium' />
                  <PasswordStrength type='Medium' />
                </div>
              </div>
            </div>

            <button
              onClick={generatePassword}
              className="generate-btn text-[16px] border border-transparent bg-blue-500 w-full text-center py-2 flex items-center gap-1 justify-center transition-all hover:bg-transparent hover:border-blue-900 hover:text-blue-500">
              GENERATE
              <MdArrowForwardIos size={15} />
            </button>
          </div>

        </div>
      </main>
    </>
  )
}


function CheckComponent({ isChecked, text, onClick }:
  {
    isChecked: boolean,
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  }
) {

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onClick}
        className={isChecked ? 'checked-class' : 'not-checked-class'}
      >
        {
          isChecked && <IoCheckmarkDoneSharp className="check text-xs text-white-800" />
        }
      </button>
      <p className="text-sm font-bold text-gray-300">
        {text}
      </p>
    </div>
  )
}

function PasswordStrength({ type }: { type: 'Too Weak' | 'Weak' | 'Medium' | 'Strong' }) {

  const tooWeak = `rounded-check bg-red-600`
  const weak = `rounded-check bg-orange-700`
  const medium = `rounded-check bg-orange-400`
  const strong = `rounded-check bg-green-500`

  return (
    <div
      className={
        type == 'Too Weak' ? tooWeak :
          type == 'Weak' ? weak :
            type == 'Medium' ? medium :
              strong
      }
    >
    </div>
  )
}
