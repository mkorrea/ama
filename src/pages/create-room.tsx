import amaLogo from "../assets/ama-logo.svg"

export function CreateRoom(){
  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col gap-6">
        <img src={amaLogo} alt="AMA" className="h-10"/>

        <p className="leading-relaxed text-zinc-300 text-center"> 
          Create a public AMA (Ask Me Anything) room e prioritize the most important question for the community 
        </p>

        <form>
          <div className="bg-zinc-900 rounded-xl p-2 flex">
            <input 
              type="text" 
              placeholder="Room's name"
              className="bg-transparent flex flex-1 px-2.5" 
            />
            <button type="submit" className="bg-orange-400 text-orange-950 px-3 py-1.5 rounded-lg font-medium"> 
              Create room 
              
            </button>
          </div>
        </form>
        
      </div>
    </main>
  )
}