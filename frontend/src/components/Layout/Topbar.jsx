import { Facebook, Github, Instagram, PhoneCall, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
const Topbar = () => {
    return (
        <div className="bg-gray-700 w-full h-auto ">
            <div className="container gap-6 h-full mx-auto flex justify-between items-center px-4 py-2  ">
                <div className='hidden sm:flex items-center gap-3 h-full cursor-pointer'>
                    <a href="#">
                        <Facebook className='w-6 h-6  hover:text-pink-500 text-white' />
                    </a>

                    <a href="#">
                        <Instagram className='w-6 h-6  hover:text-pink-500 text-white' />
                    </a>

                    <a href="#">
                        <Twitter className='w-6 h-6  hover:text-pink-500 text-white' />
                    </a>
                    <a href="#">
                        <Github className='w-6 h-6  hover:text-pink-500 text-white' />
                    </a>
                </div>

                <div className='text-center'>
                    <span className='text-[12px]  sm:text-sm text-white animate-gradient'>We will bring the best products to you</span>
                </div>

                <div className='text-[12px] sm:text-sm flex flex-row items-center gap-2 text-white '>
                    <PhoneCall className='w-5 h-5 sm:w-6 h-6 animate-vibrate hover:text-pink-500 cursor-pointer' />
                    <span className='animate-gradient'> Contact: 0123456789</span>
                </div>

                <div className='flex flex-row items-center gap-2'>
                    <Link to={'/signup'} className='px-2 py-1 border border-gray-500 rounded-2xl text-white cursor-pointer bg-purple-500 hover:scale-105 '>Signup</Link>
                    <Link to={'/login'} className='px-2 py-1 border border-gray-500 rounded-2xl text-white cursor-pointer bg-pink-500 hover:scale-105 '>Login</Link>
                </div>

            </div>
        </div>
    )
}

export default Topbar
