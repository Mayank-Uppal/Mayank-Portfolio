"use client"
import Image from "next/image"
import ButtonComponent from "../Button/buttonComponent"

interface projectProp{
    Project:{
        image:string,
        projectName1:string,
        projectName2:string,
        projectDesc:string,
        tech:string[]
    }[],
    index:number
}

export default function ProjectCard({Project,index}:projectProp){
    return(
        <>
            <div className="animate-in duration-300 bg-black ease-out hover:scale-102 opacity-100 hover:opacity-90 w-100 h-100 md:w-198 md:h-196 p-2 md:p-4 backdrop-blur-xl border border-white/45 rounded-lg flex flex-col items-center justify-center">
            <Image className=" w-full pt-2 h-lg" alt="image" src={Project[index].image} width={700} height={1600}></Image>
            <div className="my-6">
                <div className="mt-4 flex flex-col text-center justify-center items-center">
                    <h1 className="mb-1  font-extrabold font-outfit text-heading text-white md:text-xl">{Project[index].projectName1} </h1>
                    <p className="md:mb-7 max-w-4xl font-bold font-outfit text-white text-body text-xl"><span className="text-xl text-rose-500 font-bold font-outfit">{`[`} {Project[index].tech.join(', ')} {`]`}</span> </p>
                    {/* <p  className= "md:mb-7 max-w-4xl font-normal font-outfit text-white/50 text-body text-lg">{p.projectDesc}</p> */}
                </div>
                <div className="flex gap-7 items-center justify-center flex-row ">
                    <ButtonComponent image={null} buttonText="Live"/>
                    <ButtonComponent image={null} buttonText="Code"/>
                </div>
            </div>
        </div>

        </>
    )
}