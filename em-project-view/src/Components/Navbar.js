import React from 'react'

function Navbar() {
  return (
    <div>
        
      <div className="bg-slate-800 h-16 px-16 items-center flex">
     <h1 className="text-3xl font-bold text-lime-400" > 🧑‍💻 EM Service</h1>

     <div className="space-x-4 ml-auto">
     <a className="hover:text-cyan-400" href="/">Home</a>
     <a className="hover:text-cyan-400"href="/">Profile</a>
     <a className="hover:text-cyan-400" href="/">Logout</a>

     </div>
    </div>
    </div>
  )
}

export default Navbar
