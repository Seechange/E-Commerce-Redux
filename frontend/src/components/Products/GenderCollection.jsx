import React from 'react'
import { Link } from "react-router-dom"

const GenderCollection = () => {
    return (
        <div className='container mx-auto flex justify-center gap-8 mt-4'>
            <div className='lg:w-[600px] lg:h-[600px] md:w-[400px] md:h=[400px] relative shadow-2xl '>
                <img src="/mencollection.png" alt="" />
                <div className='absolute bottom-0 right-0 py-4 px-4 text-white flex items-center flex-col ' >
                    <h2 className='text-2xl uppercase text-gray-300'>Men Collection</h2>
                    <Link to={"/collections/all?gender=Men"} className='px-2 py-1 flex items-center bg-gray-500 rounded-xl hover:scale-105 hover:bg-pink-400'>
                        Shop now
                    </Link>
                </div>
            </div>
            <div className='lg:w-[600px] lg:h-[600px] md:w-[400px] md:h=[400px] relative shadow-2xl'>
                <img src="/womencollection.png" alt="" />
                <div className='absolute bottom-0 right-0 py-4 px-4 text-white flex items-center flex-col ' >
                    <h2 className='text-2xl uppercase text-black'>Women Collection</h2>
                    <Link to={"/collections/all?gender=Women"} className='p-2 bg-gray-500 rounded-xl hover:scale-105 hover:bg-pink-400'>
                        Shop now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GenderCollection
