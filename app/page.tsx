import NavBar from "../components/navBar/NavBar"
import { FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";


export default function Home() {
  return (
    <>
      <NavBar />
      <main className="main-container bg-stone-700 h-[650px] w-full text-white flex item-center justify-center">
        <div className="child-main">
          <p className="head-text text-center mb-3">Password Generator</p>

          <div className="copy-input bg-zinc-900 flex justify-between items-center align-center p-2">
            {/* <input className="bg-zinc-900 text-white-500" type="text" value="" placeholder="P4$SW0&D!" disabled /> */}
            <p className="bg-zinc-900 text-white-500">P4$SW0&D!</p>
            <FaRegCopy className="cursor-pointer hover:text-blue-500" />
          </div>

          <div className="password-selector bg-zinc-900 mt-4 px-4 py-3">
            <div className="char-lenght flex justify-between items-center">
              <p>character length</p>
              <h3 className="number text-[33px] text-blue-600 mt-2">10</h3>
            </div>

            <div className="char-slider">
              <input className="w-full bg-transparent" type="range" />
            </div>

            <div className="flex flex-col gap-3 mt-3">
              <CheckComponent isChecked={true} text="Inlcude UpperCase Letters" />
              <CheckComponent isChecked={false} text="Inlcude LowerCase Letters" />
              <CheckComponent isChecked={false} text="Inlcude Numbers" />
              <CheckComponent isChecked={true} text="Inlcude Symbols" />
            </div>

            <div className="password-strength flex justify-between align-center mt-5 mb-5 bg-zinc-700 p-3 rounded-sm">
              <p className="pass-text text-[15px]">STRENGTH</p>
              <div className="flex gap-2 items-center">
                <p className="pass-text text-[15px]">STRONG</p>
                <div className="flex gap-2 ">
                  <PasswordStrength type='medium' />
                  <PasswordStrength type='medium' />
                  <PasswordStrength type='medium' />
                  <PasswordStrength type='medium' />
                </div>
              </div>
            </div>

            <button className="generate-btn text-[16px] border border-transparent bg-blue-500 w-full text-center py-2 flex items-center gap-1 justify-center transition-all hover:bg-transparent hover:border-blue-900 hover:text-blue-500">
              GENERATE
              <MdArrowForwardIos size={15} />
            </button>
          </div>

        </div>
      </main>
    </>
  )
}


function CheckComponent({ isChecked, text }: { isChecked: boolean, text: string }) {

  const CheckedClass = `h-5 w-5 border border-zinc-900 flex items-center justify-center w-fit p-1 cursor-pointer bg-blue-500`
  const NotCheckedClass = `h-5 w-5 border border-white flex items-center justify-center w-fit p-1 cursor-pointer bg-transparent hover:border-blue-500`

  return (
    <div className="flex gap-3">
      <div className={isChecked ? CheckedClass : NotCheckedClass}>
        {
          isChecked && <IoCheckmarkDoneSharp className="text-xs text-zinc-800" />
        }
      </div>
      <p className="text-sm font-bold text-gray-300">
        {text}
      </p>
    </div>
  )
}

function PasswordStrength({ type }: { type: 'tooWeak' | 'weak' | 'medium' | 'strong' }) {


  const tooWeak = `rounded-check bg-red-600`
  const weak = `rounded-check bg-orange-700`
  const medium = `rounded-check bg-orange-400`
  const strong = `rounded-check bg-green-500`

  return (
    <div
      className={
        type == 'tooWeak' ? tooWeak :
          type == 'weak' ? weak :
            type == 'medium' ? medium :
              strong
      }
    >
    </div>
  )
}
