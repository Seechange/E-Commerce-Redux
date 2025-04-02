import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({ mobile, toggleMobile }) => {
    return (
        <>
            {mobile &&
                <div className={` h-auto w-2/5 right-0 absolute flex flex-col items-center justify-center shadow-lg transform transition-transform duration-1000 ${mobile ? 'translate-x-0' : 'translate-x-full'} `}>
                    <h2 className='gradient-bg text-white font-bold text-bold text-[12px] py-1 border-b border-gray-200 w-full text-center'>Menu</h2>
                    {/* element */}
                    <Link to={"#"} className='text-[10px] py-1 border-b border-gray-200 w-full text-center  ' >
                        MEN
                    </Link>
                    <Link to={"#"} className='text-[10px] py-1 border-b border-gray-200 w-full text-center  ' >
                        WOMEN
                    </Link>
                    <Link to={"#"} className='text-[10px] py-1 border-b border-gray-200 w-full text-center  ' >
                        BEST SELLER
                    </Link>
                    <Link to={"#"} className='text-[10px] py-1 border-b border-gray-200 w-full text-center  ' >
                        NEW PRODUCTS
                    </Link>
                    <Link to={"#"} className='text-[10px] py-1 border-b border-gray-200 w-full text-center ' >
                        OTHERS
                    </Link>
                    {/* close button */}


                    <button onClick={toggleMobile} className='py-1 border-b bg-gray-700 border-gray-200 w-full text-center text-white text-[10px]'>Close</button>

                </div>
            }
        </>
    )
}

export default MobileMenu
