import React from "react"
import { useRouter } from 'next/router'

const Homepage = () => {
  const router = useRouter()
  const {name} = router.query

  return (
    <>
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Congrats for being</span>{' '}
              <span className="block text-indigo-600 xl:inline">Vadhiv! 🎉</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              You have been certified by <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.instagram.com/rohit_v_joshi/">Rohit Joshi</a> or one of their friends for your achievement in the field of Vadhivgiri and proves that you are truly Vadhiv.
            </p>
     
          </div>
        </div>
        <div className="bg-certificate bg-contain bg-no-repeat bg-center relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-10 lg:h-full lg:w-1/2">
          <input placeholder="Your name" name="name" defaultValue={name} className="font-damion relative top-[45%] sm:top-[42%] md:top-[45%] lg:top-[48%] block left-[30%] w-[40%] h-7 sm:h-12 text-center text-xl sm:text-3xl rounded-m" type="text"/>
        </div>
      </main>
    </>
  )
}

export default Homepage
