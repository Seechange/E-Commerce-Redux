import { Link } from 'react-router-dom'
import { LogOut, Search, ShoppingCart, UserRound } from 'lucide-react'
const Navbar = () => {
    return (
        <nav className="w-full px-4 py-2 bg-pink-600">
            <div className="container mx-auto px-4 flex justify-between items-center text-white">
                <Link to={"/"} >
                    <img src="/logo.png" alt="" className=" animate-vibrate " />
                </Link>

                <div className='flex gap-4 justify-between '>
                    <Link to={"#"} className='font-bold hover:text-black/80 text-[16px] md:text-sm ' >
                        MEN
                    </Link>
                    <Link to={"#"} className='font-bold hover:text-black/80 text-[16px] md:text-sm ' >
                        WOMEN
                    </Link>
                    <Link to={"#"} className='font-bold hover:text-black/80 text-[16px] md:text-sm ' >
                        BEST SELLER
                    </Link>
                    <Link to={"#"} className='font-bold hover:text-black/80 text-[16px] md:text-sm ' >
                        NEW PRODUCTS
                    </Link>
                    <Link to={"#"} className='font-bold hover:text-black/80 text-[16px] md:text-sm' >
                        OTHERS
                    </Link>
                </div>

                <div className='hidden md:flex gap-4 ml-16'>
                    <Link to={"/profile"} className='font-bold hover:text-black/80 text-sm' >
                        <UserRound className='size-5' />
                    </Link>
                    <div className='relative'>
                        <Link to={"/"} className='font-bold hover:text-black/80 text-sm' >
                            <ShoppingCart className='size-5' />
                        </Link>
                        <span className='bg-purple-500 rounded-full w-5 h-5 absolute -top-3 -right-3 flex items-center justify-center'>5</span>

                    </div>
                    <Link to={"/"} className='font-bold hover:text-black/80 text-sm' >
                        <Search className='size-5' />
                    </Link>
                    <Link to={"/"} className='font-bold hover:text-black/80 text-sm' >
                        <LogOut className='size-5' />
                    </Link>

                </div>

            </div>
        </nav>
    )
}

export default Navbar
