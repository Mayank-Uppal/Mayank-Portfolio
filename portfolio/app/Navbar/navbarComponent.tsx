"use client"

import Link from "next/link"
import { useState } from "react"

interface navbarProps{
    navbarOptions:String[]
}



export default function NavbarComponent(){
    const [selected,setSelected]=useState<Number>(0);
    const navbarOptions=["HOME","PROJECTS","SKILLS","EXPERIENCE","CONTACT","ABOUT"]
    return(
        <>
        <div className="fixed top-0 left-1/2 -translate-x-1/2 mt-5  " >
            <ul className="w-full mx-auto  px-7 flex flex-row flex-nowrap justify-center gap-2 bg-rose-600/8 backdrop-blur-xl border-2 border-rose-600/25 py-2 rounded-xl bg-opacity-50 ">
                {navbarOptions.map((options:string,index:number)=>(
                    <Link onClick={()=>setSelected(index)} href={`#${options}`} className={` font-bold font-outfit relative group cursor-pointer ${selected===index?'text-black':'text-white/90'}text-lg px-5 py-2 hover:text-white`} key={index}>{options}
                    <span className={`
                    absolute bottom-0 left-0 w-full px-4 py-5 -z-10
                    ${selected===index?'opacity-100 scale-100 ':'opacity-0 scale-40'}
                    rounded-lg bg-rose-600
                    opacity-0 scale-40
                    transition-all duration-350 ease-out
                    group-hover:opacity-40 group-hover:scale-100
                    `}/></Link>
                ))}
            </ul>

        </div>
        </>
    )
}