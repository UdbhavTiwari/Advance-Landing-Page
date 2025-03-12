import React from 'react'
import { highlightss } from '@/Constants'

const Highlights = () => {
  return (
    <div   id='highlights' className=' relative mt-20 border-b border-neutral-800 min-h-[800px]  '>

            <div className=' text-center'>
            <span className=" bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text text-7xl">
                    Highlights
        </span>
            </div>

            <div className=' container flex flex-col px-3 py-3  mx-3 my-3 justify-center'>

                {highlightss.map((item,index) => (
                            
                            <div className="items-center space-x-4 p-5 bg-white/5 backdrop-blur-3xl rounded-b-sm shadow-md">

                                 <div className="flex items-center space-x-4 p-5" key={index}>
                                <span className='text-xl text-orange-500'>
                                {item.icon}
                                </span>
                                <h2 className='text-xl font-bold text-neutral-300'>
                                    {item.title}
                                </h2>

                            </div>
                                <p className='text-neutral-400 px-15 font-semibold '>
                                    {item.description}
                                </p>
                    </div>
                ))}

            </div>
                 
    </div>
  )
}

export default Highlights