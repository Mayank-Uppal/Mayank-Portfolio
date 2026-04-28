"use client"
import Image from "next/image"
import ButtonComponent from "../Button/buttonComponent"

interface projectProp{
    Project:{
        image:string,
        projectName1:string,
        projectName2:string,
        projectDesc:string,
        tech:string
    }[],
}

export default function ProjectCard({Project}:projectProp){
    return(
        <>
        {Project.map((p,index)=>(
            <div key={index} className="animate-in duration-300 bg-black ease-out hover:scale-102 opacity-100 hover:opacity-90  p-2 md:p-10 backdrop-blur-xl border border-white/45 rounded-lg flex flex-col items-center justify-center w-full max-w-[50rem]">
            <Image className="w-full" alt="image" src={p.image} width={300} height={300}></Image>
            <div className="my-6 flex flex-col items-center justify-center gap-7 md:gap-0">
                <div className="mt-4 flex flex-col text-center justify-center items-center">
                    <h1 className="mb-1  font-extrabold font-outfit text-heading text-white text-lg md:text-xl">{p.projectName1} </h1>
                    <p className="md:mb-7 max-w-4xl text-white text-body font-outfit text-sm md:text-xl"><span className="text-xl text-rose-500 flex flex-wrap px-4 ">{p.tech}</span> </p>
                    {/* <p  className= "md:mb-7 max-w-4xl font-normal font-outfit text-white/50 text-body text-lg">{p.projectDesc}</p> */}
                </div>
                <div className="flex flex-wrap px-10 gap-7 items-center justify-center flex-row  ">
                    <ButtonComponent image={null} buttonText="Live"/>
                    <ButtonComponent image={null} buttonText="Code"/>
                </div>
            </div>
        </div>
        ))}
           

        </>
    )
}