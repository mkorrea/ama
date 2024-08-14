import { useParams } from "react-router-dom"
import { ArrowRight, ArrowUp, Share2 } from "lucide-react"
import { toast } from "sonner"

import amaLogo from '../assets/ama-logo.svg'

export function Room(){
  const { roomId } = useParams()
  
  function handleShareRoom() {
    const url = window.location.href.toString()

    if(navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url })
    } else {
      navigator.clipboard.writeText(url)

      toast.info('The room URL was copied to your clipboard!')
    }
  }
 
  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4"> 
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="AMA" className="h-5" />

        <span className="text-sm text-zinc-500 truncate">
          Room's code: <span className="text-zinc-300"> {roomId} </span>
        </span>
        
        <button 
            type="submit" 
            className="ml-auto bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 rounded-lg font-medium flex items-center text-sm transition-colors hover:bg-zinc-700"
            onClick={handleShareRoom}
          > 
            Share 
            <Share2 className="size-4" />
          </button>
      </div>

      <div className="h-px w-full bg-zinc-900"></div>

      <form 
          className="flex items-center gap-2 bg-zinc-900 rounded-xl p-2 border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1"
        >
          <input 
            type="text" 
            name="theme"
            autoComplete="off"
            placeholder="What is your question ?"
            className="bg-transparent flex flex-1 text-sm mx-2 outline-none text-zinc-100 placeholder:text-zinc-500" 
          />
          <button 
            type="submit" 
            className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 rounded-lg font-medium flex items-center text-sm transition-colors hover:bg-orange-500"
          > 
            Create question
            <ArrowRight className="size-4" />
          </button>
        </form>


        <ol className="list-decimal list-outside px-3 space-y-8">
          <li className="ml-4 leading-relaxed text-zinc-100">
            What is GoLang and what are its main advantages compared to other programming languages like Python, Java, or C++?

            <button type="button" className="mt-3 flex items-center gap-3 text-orange-400 text-sm font-medium hover:text-orange-500">
              <ArrowUp className="size-4" />
              Like question (53)
            </button>
          </li>

          <li className="ml-4 leading-relaxed text-zinc-100">
            What is GoLang and what are its main advantages compared to other programming languages like Python, Java, or C++?

            <button type="button" className="mt-3 flex items-center gap-3 text-zinc-400 text-sm font-medium hover:text-zinc-300">
              <ArrowUp className="size-4" />
              Like question (53)
            </button>
          </li>
        </ol>
    </div>
  )
}