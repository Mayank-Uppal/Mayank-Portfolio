"use client"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ProjectCard from "./ProjectCard";
import { ProjectProp } from "./props";
import { useState } from "react";
import {motion} from "framer-motion";

export default function ProjectComponent(){
    const [index,setIndex]=useState<number>(0);
    const handleNext=()=>{
        setIndex((prev)=>(prev+1)%ProjectProp.length);
    }
    const handlePrev=()=>{
        if(index===0){
            setIndex(ProjectProp.length-1);
        }
        else{
            setIndex((prev)=>(prev-1));
        }
    }
    return(
        <>
        <div id="PROJECTS" className="relative w-screen mx-auto flex flex-col justify-center gap-4 items-center text-center mt-63">
                <BackgroundBeamsWithCollision/>

            <div className="absolute top-0 w-full">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="mb-4 scale-y-135 font-extrabold font-syne text-heading px-4 md:px-0 text-3xl md:text-5xl">git <span className="text-rose-500  font-syne font-extrabold">{`push `} </span>origin <span className="text-rose-500 font-syne font-extrabold">Projects</span></h1>
                    <p className="md:mb-12 max-w-3xl font-normal font-outfit text-white/80 text-body text-xl px-4 md:px-3 md:text-2xl">Projects I have built from scratch — each one teaching me something new and pushing me further as a developer</p>
                </div>

            <div className="flex flex-row justify-center items-center gap-10">
                <svg onClick={handleNext} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-12 h-12 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>

                
                    <div className="flex flex-row justify-center items-center gap-4 md:gap-20 my-10 md:my-14">
                        <ProjectCard Project={ProjectProp} index={index}/>
                    </div>

                <svg onClick={handlePrev} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-12 h-12 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>

                </div>
            </div>


        </>
    )
}