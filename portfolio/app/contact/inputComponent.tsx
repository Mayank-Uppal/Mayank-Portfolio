import ButtonComponent from "../Button/buttonComponent";

export default function InputComponent(){
    return(
        <>
        <form className= "w-full flex flex-col gap-4 items-centerjustify-center text-center">

            <div className="flex flex-col md:flex-row gap-4">
                <input type="text" className="w-full rounded-lg hover:border-rose-500/50 focus:border-rose-500/50 p-4 font-outfit  border bg-white/4 backdrop-blur-3xl" placeholder="Name"></input>
                <input type="email" className="w-full rounded-lg hover:border-rose-500/50 focus:border-rose-500/50 p-4 font-outfit  border bg-white/4 backdrop-blur-3xl" placeholder="Email"></input>
            </div>

            <input type="text" className=" w-full rounded-lg  hover:border-rose-500/50 focus:border-rose-500/50 p-10 font-outfit  border bg-white/4 backdrop-blur-3xl" placeholder="Message"></input>

            <div className="w-full flex justify-center items-center my-4 text-center">
                <ButtonComponent buttonText="SUBMIT"/>
            </div>
        </form>
        
        </>
    )
}