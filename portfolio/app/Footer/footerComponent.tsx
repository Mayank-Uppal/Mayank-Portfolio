import Link from "next/link";

export default function FooterComponent(){
    return(
        <>
        <div className="flex flex-col justify-center items-center mx-auto px-10 pt-10 md:px-20 gap-4 w-full border-t my-10 md:mt-30">
            <h1 className="text-lg text-center md:text-xl font-syne scale-y-140 font-extrabold text-rose-500">MAYANK UPPAL - PORTFOLIO</h1>

            <div className="flex flex-row justify-center items-center gap-4">
                <Link href="/#HOME" className="text-sm md:text-lg font-outfit" >Home</Link>
                <Link href="/#PROJECTS" className="text-sm md:text-lg font-outfit" >Projects</Link>
                <Link href="/#SKILLS" className="text-sm md:text-lg font-outfit" >Skills</Link>
                <Link href="/#EXPERIENCE" className="text-sm md:text-lg font-outfit" >Experience</Link>
                <Link href="/#CONTACT" className="text-sm md:text-lg font-outfit" >Contact</Link>
            </div>

            <div className="flex flex-row justify-center items-center gap-4">
                <Link href="" className="text-sm md:text-lg font-outfit" >Github</Link>
                <Link href="" className="text-sm md:text-lg font-outfit" >LinkedIn</Link>
            </div>
        </div>
        </>
    )
}