import { CircleX, Search } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {
    const [search, setSearch] = useState(false)
    const [searchText, setSearchText] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(false)
        console.log(searchText)
    }
    return (
        <>
            <Link to={"/"} className='font-bold hover:text-black/80 text-sm' onClick={() => setSearch(!search)} >
                <Search className='size-4 sm:size-5' />
            </Link>
            {search &&
                <div className='gradient-bg absolute top-0 right-0 h-full w-full text-white transition-all duration-3000 shadow-lg  ' >
                    <div className='container mx-auto py-4 px-6 w-1/2  h-full flex items-center justify-center gap-2 relative'>
                        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className='border text-white border-gray-300 rounded-full px-4 py-2 w-1/2 text-black focus:border-pink-500 focus:outline-none' placeholder='Search Anything' />
                        <button className='text-white font-bold flex cursor-pointer hover:scale-105 bg-green-500 px-4 py-2 rounded-full'><Search className='size-5 cursor-pointer ' onClick={handleSearch} />Search</button>
                        <button onClick={() => setSearch(!search)} className='text-white font-bold flex cursor-pointer hover:scale-105 bg-red-500 px-4 py-2 rounded-full'><CircleX className='mr-1  size-5 cursor-pointer' />Close</button>
                    </div>
                </div>
            }
        </>



    )
}

export default SearchBar