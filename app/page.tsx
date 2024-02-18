"use client"

import NavBar from "../components/navBar/NavBar"
import { FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { passwordStrength } from "check-password-strength"
import { useState } from "react";
import generator from "generate-password"

export default function Home() {

  const [passwordLength, setPasswordLength] = useState(20)
  const [numbers, setNumbers] = useState(false)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [currentPassword, setCurrentPassword] = useState<any>('P4$5w0rD!')

  
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

  const passwordValue = passwordStrength(currentPassword).value

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

  const iconStyle = `min-h-7 min-w-7 cursor-pointer hover:text-blue-500 dark:text-zinc-800`
  const iconActive = `min-h-7 min-w-7 text-blue-500 cursor-pointer dark:text-orange-800`

  return (
    <>
      <NavBar />
      <main
       className="main-container bg-stone-700 min-h-[650px] w-full text-white flex item-center justify-center dark:bg-[#fff]">
        <div className="child-main">
          <p className="head-text text-center mb-5 dark:text-orange-900">Password Generator</p>

          <div className="copy-input border bg-zinc-900 flex justify-between items-center align-center gap-7 p-3 dark:bg-[#fff9e1] dark:border-orange-800">
            <p className="passCur text-3xl bg-zinc-900 text-[#fff9e1] font-bold dark:bg-[#fff9e1] dark:text-zinc-900">{currentPassword}</p>
            <div className="flex flex-col items-center justify-center gap-1">
              {
                isCopied &&
                <h1
                  className=" text-xs text-blue-500 font-bold dark:text-orange-800"
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

          <div className="password-selector border bg-zinc-900 mt-4 px-4 py-3 dark:bg-[#fff9e1] dark:border-orange-800">
            <div className="char-lenght flex justify-between items-center">
              <p className="text-[25px] text-[#fff9e1] font-bold dark:text-zinc-900">Character Length</p>
              <h3 className="number text-[42px] text-blue-500 mt-2 font-bold dark:text-orange-800">
                {passwordLength}
              </h3>
            </div>

            <div className="char-slider dark:text-orange-800">
              <input
                className="range w-full cursor-pointer dark:bg-orange-800"
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

            <div className="password-strength flex justify-between align-center items-center mt-5 mb-5 bg-zinc-700 p-3 rounded-sm dark:bg-[#fff]">
              <p className="pass-text text-[16px] text-[#b6b6b6] dark:text-zinc-500 ">STRENGTH</p>
              <div className="flex gap-2 items-center">
                <p className="pass-text text-[19px] text-[#fff9e1] font-bold dark:text-zinc-800">{passwordValue}</p>
                <div className="flex gap-2 ">
                  <PasswordStrength
                    type={passwordValue == 'Too weak' ? 'Too Weak' :
                      passwordValue == 'Weak' ? 'Weak' :
                        passwordValue == 'Medium' ? 'Medium' :
                          passwordValue == 'Strong' ? 'Strong' : null}
                  />
                  <PasswordStrength
                    type={passwordValue == 'Too weak' ? null :
                      passwordValue == 'Weak' ? 'Weak' :
                        passwordValue == 'Medium' ? 'Medium' :
                          passwordValue == 'Strong' ? 'Strong' : null}
                  />
                  <PasswordStrength
                    type={passwordValue == 'Too weak' ? null :
                      passwordValue == 'Weak' ? null :
                        passwordValue == 'Medium' ? 'Medium' :
                          passwordValue == 'Strong' ? 'Strong' : null}
                  />
                  <PasswordStrength
                    type={passwordValue == 'Too weak' ? null :
                      passwordValue == 'Weak' ? null :
                        passwordValue == 'Medium' ? null :
                          passwordValue == 'Strong' ? 'Strong' : null}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={generatePassword}
              className="generate-btn text-[20px] font-bold border border-transparent bg-blue-500 w-full text-center py-3 flex items-center gap-1 justify-center transition-all hover:bg-transparent hover:border-blue-900 hover:text-blue-500 dark:hover:border-orange-800 dark:bg-orange-800 dark:hover:text-orange-800 dark:hover:bg-[#fff9e1]"
            >
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
        className={isChecked ? 'checked-class dark:bg-orange-800 dark:border-white' : 'not-checked-class w-6 h-6 border border-white p-2 dark:border-orange-900'}
      >
        {
          isChecked && <IoCheckmarkDoneSharp className="check text-xs text-white-800" />
        }
      </button>
      <p className="text-sm font-bold text-gray-300 dark:text-gray-700">
        {text}
      </p>
    </div>
  )
}

function PasswordStrength({ type }: { type: 'Too Weak' | 'Weak' | 'Medium' | 'Strong' | null }) {

  const tooWeak = `rounded-check bg-red-500`
  const weak = `rounded-check bg-red-800`
  const medium = `rounded-check bg-orange-400`
  const strong = `rounded-check bg-green-500`
  const defaultStyle = `rounded-check bg-transparent`

  return (
    <div
      className={
        type == 'Too Weak' ? tooWeak :
          type == 'Weak' ? weak :
            type == 'Medium' ? medium :
              type == 'Strong' ? strong :
                defaultStyle
      }
    >
    </div>
  )
}
