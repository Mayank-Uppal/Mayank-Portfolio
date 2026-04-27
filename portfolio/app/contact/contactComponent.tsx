import InputComponent from "./inputComponent";


export default function ContactComponent(){
    return(
        <>

        <div id="CONTACT" className="flex flex-col items-center justify-center my-20 w-full overflow-x-hidden">

        <div className="mt-20 mb-10 flex flex-col overflow-hidden text-center items-center justify-center ">
            <h1 className="mb-4 scale-y-135 font-extrabold font-syne text-heading text-2xl px-4 md:px-0 md:text-4xl">{`axios.post`} <span className="text-rose-500  font-syne font-extrabold">{`"( MESSAGE )" `} </span></h1>
            <p className="md:mb-12 max-w-3xl text-center font-normal font-outfit text-white/80 text-body text-lg px-4 md:px-0 md:text-2xl">Work experience I've gathered so far in my career — every role teaching me something new and pushing me to think, build and solve problems better than before"</p>
        </div>

        <div className="flex flex-col justify-center items-center w-full max-w-xl md:max-w-2xl px-10 md:px-0">
            <InputComponent/>
        </div>

            
        </div>
        

        </>
    )
}