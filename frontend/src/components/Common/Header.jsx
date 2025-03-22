import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from '../Layout/Navbar'

const Header = () => {
    return (
        <div className='relative border-b border-gray-300 shadow-md'>
            <Topbar />
            <Navbar />
        </div>
    )
}

export default Header
