import React from 'react'

export const Button = ({text, isActive,onClick}) => {
  return (
    <button onClick={onClick} className={`transition-all border-2 md:text-2xl cursor-pointer  duration-1000 rounded-4xl border-black lg:h-[70%] lg:text-sm lg:w-[40%] md:h-[70%] w-[46%] h-[65%] font-bold ${isActive ? 'bg-black  hover:text-black hover:bg-white text-white hover:scale-105' : 'hover:bg-black hover:text-white active:bg-black active:text-white hover:scale-105'}`}>
        {text}
    </button>
  )
}
export default Button;
