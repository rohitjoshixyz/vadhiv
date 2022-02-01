import Image from "next/image"
import React from "react"
import Navbar from "./components/Navbar"

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <div className="relative bg-slate-800">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          
          <Image src="/vadhiv-watercolor.png" alt="vadhiv-graffiti" height="98" width="336"/>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            A suitable english word would be a whimsical person or an act.
            Initially it was used to describe a person, by saying stuff such as Kay vadhiv ahe to.
            But soon enough its other forms started appearing. Vadhivpana, vadhivgiri etc.
          </p>
          <p className="mt-1 max-w-2xl text-sm text-gray-400">Example: Arre Rohit kasla vadhiv vagato</p>
        </div>
      </div>
      <div className="relative bg-gray-200">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    
        </div>
      </div>

    </>
  )
}

export default Homepage