import { Car, Circle, CircleX } from "lucide-react"
import { useState } from "react"
import CartContent from "../Cart/CartContent"


const CartDrawer = ({ drawCartOpen, toggleDrawer }) => {

    return (
        <>
            <div className={`fixed border-gray-500 w-4/5 right-0 sm:w-1/3 md:w-1/4 h-full
            bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawCartOpen ? 'translate-x-0' : 'translate-x-full'} `}>
                <div className="h-[50px] relative text-white ">
                    <h2 className="text-xl font-bold uppercase text-center h-full flex items-center justify-center border-b-gray-500 bg-purple-500 shadow-md ">Your Cart</h2>
                    <button onClick={toggleDrawer} className="absolute top-1 right-1 ">
                        <CircleX className='size-5' />
                    </button>
                </div>
                {/* content */}
                <div className="overflow-y-auto h-full">
                    <CartContent />
                </div>

                {/* checkout */}
                <div className="p-4 gradient-bg sticky bottom-0 text-center font-bold text-white cursor-pointer hover:bg-pink-900 ">
                    CHECK OUT
                </div>
            </div>
        </>
    )
}

export default CartDrawer