import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Section = () => {
  return (
    <div className='w-full h-full text-center flex flex-col justify-center items-center text-[1rem]'>
        <div className='w-[25rem] text-[2.463rem] my-[2rem]'>
            <h1>Lorem ipsum dolor</h1>
        </div>
        <div>
            <p className='w-full px-1 md:w-[35rem] mb-[3rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consectetur sit, autem maiores error inventore in illo, dolor, magnam esse eveniet? Maxime, laudantium amet!</p>
        </div>
        <div className='flex w-[23rem] gap-2'>
        <Input className='w-[20rem] cursor-pointer '
         type="text"
         placeholder="Search..." />
          <Button>SEARCH</Button>
        </div>
    </div>
  )
}

export default Section