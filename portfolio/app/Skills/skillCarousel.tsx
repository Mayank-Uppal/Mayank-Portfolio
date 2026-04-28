import SkillCard from "./skillCard";

const Images1=["nodejs.svg","express.svg","mongo.svg","next.svg","ollama.svg","react.svg","docker.svg","vercel.svg","docker.svg"]
const Images2=["render.svg","html5.svg","css.svg","tailwind.svg","javascript.svg","render.svg","c++.svg","git.svg","github.svg",]

export default function SkillCarousel(){
    return(
        <>
        <div className="max-w-6xl mx-auto flex flex-col justify-center gap-4 items-center text-center md:my-20">
               <h1 className="mb-4  scale-y-135 font-extrabold font-syne text-heading text-2xl px-4 md:px-0 md:text-5xl">Import <span className="text-rose-500  font-syne font-extrabold">{`{ Skills }`} </span>from <span className="text-rose-500 font-syne font-extrabold">"Mayank"</span></h1>
               <p className="md:mb-12 max-w-3xl font-normal font-outfit text-white/80 text-body px-4 md:px-0 text-xl md:text-2xl">Languages, frameworks, and tools I've worked with and know well — covering everything from backend APIs to frontend interfaces.</p>
        
        <div className="flex flex-col gap-7 overflow-hidden w-full my-15 ml-20 mr-20 md:mx-0">
            <div className="flex flex-row justify-center items-center gap-8 animate-scroll overflow-hidden w-max">
                <SkillCard Images={[...Images1,...Images1]} />
            </div>
            <div className="flex flex-row gap-7 animate-scroll overflow-hidden w-max">
                <SkillCard Images={[...Images2,...Images2]} />
            </div>
        </div>

        </div>



        </>
    )
}