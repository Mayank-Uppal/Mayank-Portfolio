import Link from "next/link";

export default function FooterComponent(){
    return(
        <>
        <div className="flex flex-col justify-center items-center mx-auto p-20 gap-4 w-full px-10 md:px-0 border-t my-5">
            <h1 className="text-lg text-center md:text-xl font-syne scale-y-140 font-extrabold text-rose-500">MAYANK UPPAL - PORTFOLIO</h1>

            <div className="flex flex-row justify-center items-center gap-4">
                <Link href="" className="text-sm md:text-lg font-outfit" >Github</Link>
                <Link href="" className="text-sm md:text-lg font-outfit" >LinkedIn</Link>
            </div>
        </div>
        </>
    )
}