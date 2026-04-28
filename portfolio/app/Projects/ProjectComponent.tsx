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
        <div id="PROJECTS" className="relative w-screen mx-auto flex flex-col justify-center gap-4 items-center text-center my-32 md:mt-63">
            <BackgroundBeamsWithCollision className="absolute inset-0 h-full " />

            <div className="relative w-full">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="mb-4 scale-y-135 font-extrabold font-syne text-heading px-4 md:px-0 text-3xl md:text-5xl">git <span className="text-rose-500  font-syne font-extrabold">{`push `} </span>origin <span className="text-rose-500 font-syne font-extrabold">Projects</span></h1>
                    <p className="md:mb-12 max-w-3xl font-normal font-outfit text-white/80 text-body text-xl px-4 md:px-3 md:text-2xl">Projects I have built from scratch — each one teaching me something new and pushing me further as a developer</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-10 md:gap-20 my-20  md:my-14 px-10">
                    <ProjectCard Project={ProjectProp} />
                </div>

            </div>
        </div>


        </>
    )
}