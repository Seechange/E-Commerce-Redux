import React from 'react'
import ProductDetails from './ProductDetails'

const BestSeller = () => {
    return (
        <section>
            <div className='container mx-auto text-center mt-10'>
                <h2 className="text-2xl font-bold mb-2">Best Seller</h2>
                <p className="text-gray-600 text-lg ">
                    Search for products with the best quality, the most reasonable price, and the highest sales
                </p>
                <ProductDetails />
            </div>
        </section>
    )
}

export default BestSeller