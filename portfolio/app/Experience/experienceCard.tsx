interface experienceProp{
    experience:{
        timeline:string,
        company:string,
        role:string,
        location:string
    }[]
}

export default function ExperienceCard({experience}:experienceProp){

    return(
        <>
        {experience.map((exp:any,index:number)=>(
            <>

            <div className=" w-[90%] md:w-full flex flex-col h-fit px-10 p-4 md:p-7 rounded-lg  backdrop-blur-4xl hover:backdrop-blur-4xl animate-in duration-400 hover:bg-white/4 hover:border-white-500/60 hover:scale-110 border bg-black/30 gap-6 justify-center items-center my-10">
            <button type="button" className="flex w-fit justify-left items-center  text-white text-lg font-outfit bg-rose-500/10 backdrop-blur-xl border border-rose-500 shadow-xs rounded-lg px-7 py-2 ">
                <svg className="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"/></svg>
                {exp.timeline}
            </button>

            <div className="text-center">
                <h1 className="text-xl font-outfit font-extrabold text-white ">{exp.company}</h1>
                <h1 className="text-lg font-outfit text-white/60 ">{exp.role}</h1>
            </div>
            

            <button type="button" className="flex justify-left items-center  text-white w-fit text-lg font-outfit bg-rose-500/10 backdrop-blur-xl border border-rose-500 shadow-xs rounded-lg px-7 py-2 ">
                <svg className="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"/></svg>
                {exp.location}
            </button>
            </div>
        </>
        ))}
        
        </>
    )
}