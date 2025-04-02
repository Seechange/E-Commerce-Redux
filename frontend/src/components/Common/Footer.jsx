import { Mail, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-700 w-full flex flex-col flex' >
            <div className='container mx-auto h-full grid grid-cols-12 py-6  '>
                <div className=' h-full col-span-4 pr-4 '>
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                    <div className='mt-1 mb-1'>
                        <span className='text-[12px] text-justify text-white'>We hope that all consumers can choose the most satisfying and beautiful fashion products at the most reasonable prices. We want to bring new products at the lowest prices so that everyone can afford them</span></div>
                    <div>
                        <h2 className='uppercase text-pink-500 font-bold text-[12px]'>Method of payment</h2>
                        <div className='flex gap-2 mt-1'>
                            <img src="/1.png" alt="" className='w-8 h-8' />
                            <img src="/2.png" alt="" className='w-8 h-8' />
                            <img src="/3.png" alt="" className='w-8 h-8' />
                        </div>
                    </div>
                </div>
                <div className=' h-full col-span-2 pr-1 '>
                    <h2 className='text-pink-500 font-bold text-sm uppercase'>policy</h2>
                    <div className='flex flex-col gap-1 mt-2.5 text-[12px] text-white'>
                        <span>Privacy Policy</span>
                        <span>Return Policy</span>
                        <span>Shipping Policy</span>
                        <span>Refund Policy</span>
                        <span>Terms & Policies</span>
                    </div>
                </div>
                <div className=' h-full col-span-3 pr-1 '>
                    <h2 className='text-pink-500 font-bold text-sm uppercase'>General Information</h2>
                    <div className='flex flex-col gap-1 mt-2.5 text-[12px] text-white'>
                        <div className='flex flex-row '>
                            <span className='text-pink-500 flex justify-start items-center gap-1 '><MapPin size={14} />Address:</span>
                            <span className='text-white'> Chơn Thành Tỉnh Bình Phước</span>
                        </div>
                        <span className='text-pink-500 flex justify-start items-center gap-1 '><PhoneCall size={14} />PhoneNumber:<span className='text-white'>0123456789</span> </span>
                        <span className='text-pink-500 flex justify-start  items-center gap-1'><Mail size={14} />Email:<span className='text-white'> chinchin@gmail.com</span> </span>
                        <div>
                            <h2 className='text-pink-500 font-bold text-[12px] uppercase mt-1 mb-1'>Marketplace Connection</h2>
                            <div className='flex gap-2 mt-1'>
                                <img src="/lâz.png" alt="" className='w-8 h-8 rounded-full' />
                                <img src="/sp.png" alt="" className='w-8 h-8 rounded-full' />
                                <img src="/ama.png" alt="" className='w-8 h-8 rounded-full' />
                                <img src="/tiki.png" alt="" className='w-8 h-8 rounded-full' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' h-full col-span-3  '>
                    <h2 className='text-pink-500 font-bold text-sm uppercase'>SOCIAL PICTURE</h2>
                    <div className='flex gap-2 mt-2 flex-wrap justify-between'>
                        <img src="/sp.png" alt="" className='w-19 h-18 rounded-lg ' />
                        <img src="/sp.png" alt="" className='w-19 h-18 rounded-lg' />
                        <img src="/sp.png" alt="" className='w-19 h-18 rounded-lg' />
                        <img src="/sp.png" alt="" className='w-19 h-18 rounded-lg ' />
                        <img src="/sp.png" alt="" className='w-19 h-18 rounded-lg' />
                        <img src="/sp.png" alt="" className='w-19 h-18 rounded-lg' />

                    </div>

                </div>
            </div>
            <div className='border-t py-2 border-t-red-600 h-1/6 text-center flex items-center justify-center text-white '>All rights reserved by ChinChin Fashion. Provided by SeeChangeIT (DanhDev98).</div>


        </footer>
    )
}

export default Footer
