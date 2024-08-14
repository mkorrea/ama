import { ArrowRight } from "lucide-react"
import amaLogo from "../assets/ama-logo.svg"
import { useNavigate } from "react-router-dom"

export function CreateRoom(){
  const navigate = useNavigate()
  
  function handleCreateRoom(data: FormData) {
    const theme = data.get('theme')?.toString()
    console.log(theme)
    
    navigate('/room/sadadw')
  }
   
  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col gap-6">
        <img src={amaLogo} alt="AMA" className="h-10"/>

        <p className="leading-relaxed text-zinc-300 text-center"> 
          Create a public AMA (Ask Me Anything) room e prioritize the most important question for the community 
        </p>

        <form 
          action={handleCreateRoom}
          className="flex items-center gap-2 bg-zinc-900 rounded-xl p-2 border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1"
        >
          <input 
            type="text" 
            name="theme"
            autoComplete="off"
            placeholder="Room's name"
            className="bg-transparent flex flex-1 text-sm mx-2 outline-none text-zinc-100 placeholder:text-zinc-500" 
          />
          <button 
            type="submit" 
            className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 rounded-lg font-medium flex items-center text-sm transition-colors hover:bg-orange-500"
          > 
            Create room 
            <ArrowRight className="size-4" />
          </button>
          
        </form>
        
      </div>
    </main>
  )
}