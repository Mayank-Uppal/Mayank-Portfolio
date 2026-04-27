"use client"
import Typewriter from "typewriter-effect";
import ButtonComponent from "../Button/buttonComponent";
import { Terminal } from "@/components/ui/terminal";

export default function HomeComponent(){
    return(
        <>
        <div id="HOME" className="mt-75 flex flex-col justify-center items-center gap-3 md:gap-7 w-screen">
            <h1 className="font-syne font-black text-xl md:text-4xl scale-y-130 z-20 text-white/80 tracking-tight">
            MAYANK UPPAL
            </h1>
            <h1 className=" text-center text-3xl md:text-6xl font-extrabold scale-y-130 font-syne text-rose-600 z-20">
            <Typewriter
                options={{
                    strings: [
                    'FULL STACK',
                    "SOFTWARE ",
                    'BACKEND ',
                    'NODE.JS ',
                    ],
                    autoStart: true,
                    loop: true,
                }}
            />
            <span className="text-white/80">DEVELOPER</span>
            </h1>
            

            <p className="text-md md:text-2xl mt-4 md:mt-8 text-center font-outfit px-4 md:px-10 max-w-2xl md:max-w-4xl">Fresh out of PEC Chandigarh — Class of 2025. 6 months of work experience and now fully focused on software development. I build full stack web apps and I'm just getting started.</p>
        
        </div>

        <div className="flex md:flex-row  text-center flex-col justify-center items-center mt-15 md:mt-20 gap-4">
                <ButtonComponent image={null} buttonText="LinkedIn" />
                <ButtonComponent image={null} buttonText="Download Resume" />
                <ButtonComponent image={null} buttonText="Github" />
        </div>
    
        </>
    )
}