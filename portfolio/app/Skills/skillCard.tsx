import Image from "next/image"
interface skillProp{
    Images:string[] | []
}
export default function SkillCard({Images}:skillProp){
    return(
        <>
        {Images.map((img,index)=>(
            <div key={index} className="h-20 w-20 p-4 md:h-40 md:w-40 md:px-6 md:p-4 animate-in opacity-100 duration-200 ease-in hover:scale-110 hover:opacity-60 bg-white/4 rounded-lg backdrop-blur-xl border flex flex-row justify-center items-center gap-4 ">
                <Image  src={`/logo/${img}`} alt="skill logo" width={150} height={150}></Image>
            </div>
        ))}

        </>
    )
}