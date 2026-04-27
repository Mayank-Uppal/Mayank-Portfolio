import ExperienceCard from "./experienceCard";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { experiences } from "./prop";

export default function ExperienceComponent(){
    return(
        <>
         <div id="EXPERIENCE" className="relative flex flex-col justify-center items-center gap-4 my-12  ">
            <DottedGlowBackground className="  absolute inset-0 w-full h-full  -z-10 "  glowColor="gray"/>

            <div className="relative z-10 mt-20 mb-10 flex flex-col justify-center items-center">
                <h1 className="mb-4 scale-y-135 font-extrabold font-syne text-heading px-2 md:px-0 text-2xl md:text-5xl">cat <span className="text-rose-500  font-syne font-extrabold">{`Experience.txt `} </span></h1>
                <p className="md:mb-12 max-w-3xl text-center font-normal font-outfit text-white/80 text-body text-lg px-4 md:px-0 md:text-2xl">Work experience I've gathered so far in my career — every role teaching me something new and pushing me to think, build and solve problems better than before"</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <ExperienceCard experience={experiences}/>
            </div>
           
        </div>

        </>
    )
}
