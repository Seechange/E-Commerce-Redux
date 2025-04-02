import React from 'react'

const selectedProduct = {
    name: "Product 1",
    price: 100,
    originalPrice: 200,
    description: "Product 1 description",
    brand: "Brand 1",
    material: "Material 1",
    size: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"],
    images: [{
        url: "https://picsum.photos/500/500?random=1",
        alt: "Product 1 image 1",
    }, {
        url: "https://picsum.photos/500/500?random=2",
        alt: "Product 1 image 2",
    }]
}
const ProductDetails = () => {
    return (
        <div className='p-6 '>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.alt}
                                className='w-20 h-20 object-cover rounded-lg cursor-pointer'
                            />
                        ))}
                    </div>
                    {/* main image */}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={selectedProduct.images[0].url} alt="" className='w-full h-auto object-cover rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails