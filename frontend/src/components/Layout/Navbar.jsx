import { Link } from 'react-router-dom'
import { AlignJustify, LogOut, ShoppingCart, UserRound } from 'lucide-react'
import SearchBar from '../Common/SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
const Navbar = () => {
    const [drawCartOpen, setDrawCartOpen] = useState(false)
    const [mobile, setMobile] = useState(false)

    const toggleDrawer = () => {
        setDrawCartOpen(!drawCartOpen)
    }

    const toggleMobile = () => {
        setMobile(!mobile)
    }
    return (
        <>
            <nav className="w-full px-4 py-2 bg-pink-600">
                <div className="container mx-auto px-4 flex justify-between items-center text-white gap-2 ">
                    <Link to={"/"} >
                        <img src="/logo.png" alt="" className="hide-phone animate-vibrate  " />
                    </Link>
                    <Link to={"/"} className='animate-vibrate font-bold text-[16px] sm:hidden'>
                        <img src="/logo.png" alt="" className="animate-vibrat  " />
                    </Link>

                    <div className=' hidden sm:flex gap-4 justify-between  '>
                        <Link to={"#"} className='text-[10px]  md:text-[12px] flex items-center text-center lg:text-[16px] font-bold hover:text-black/80  ' >
                            MEN
                        </Link>
                        <Link to={"#"} className='text-[10px]  md:text-[12px] flex items-center text-center lg:text-[16px] font-bold hover:text-black/80  ' >
                            WOMEN
                        </Link>
                        <Link to={"#"} className='text-[10px]  md:text-[12px] flex items-center text-center lg:text-[16px] font-bold hover:text-black/80  ' >
                            BEST SELLER
                        </Link>
                        <Link to={"#"} className='text-[10px]  md:text-[12px] flex items-center text-center lg:text-[16px] font-bold hover:text-black/80  ' >
                            NEW PRODUCTS
                        </Link>
                        <Link to={"#"} className='text-[10px]  md:text-[12px] flex items-center text-center lg:text-[16px] font-bold hover:text-black/80 ' >
                            OTHERS
                        </Link>
                    </div>

                    <div className='text-sm flex gap-4 ml-16'>
                        <Link to={"/profile"} className='font-bold hover:text-black/80 text-sm' >
                            <UserRound className='size-4 sm:size-5' />
                        </Link>
                        <div className='relative' onClick={() => setDrawCartOpen(!drawCartOpen)}>
                            <Link to={"/"} className='font-bold hover:text-black/80 text-sm' >
                                <ShoppingCart className='size-4 sm:size-5' />
                            </Link>
                            <span className='w-4 h-4 -top-2 -right-3 text-[12px] bg-purple-500 rounded-full sm:w-5 sm:h-5 sm:text-[14px] absolute sm:-top-3 -right-3 flex items-center justify-center'>5</span>

                        </div>
                        {/* seach componet */}
                        <SearchBar />
                        <Link to={"/"} className='font-bold hover:text-black/80 text-sm' >
                            <LogOut className='size-4 sm:size-5' />
                        </Link>

                    </div>
                    <div className='ml-1 sm:hidden ' onClick={toggleMobile}>
                        <AlignJustify className='size-5' />
                    </div>

                </div>
            </nav>

            <CartDrawer drawCartOpen={drawCartOpen} toggleDrawer={toggleDrawer} />
            <MobileMenu mobile={mobile} toggleMobile={toggleMobile} />

        </>
    )
}

export default Navbar
