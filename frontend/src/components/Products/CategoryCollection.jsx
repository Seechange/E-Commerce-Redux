import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCollection = () => {
    const categorys = [{ name: "shirt", url: "shirtCategory.png" },
    { name: "pants", url: "pantsCategory.png" },
    { name: "hat", url: "hatCategory.png" },
    { name: "lipstick", url: "lipstickCategory.png" },
    { name: "shoes", url: "shoesCategory.png" },
    { name: "handbag", url: "handbagCategory.png" }];
    return (
        <div className='flex justify-center mt-4 flex-wrap  container mx-auto gap-4 mb-4  '>
            {categorys.map((category, index) => (
                <div key={index} className='h-[300px] w-[400px] bg-amber-300 relative flex justify-end  '>
                    <img src={`/category/${category.url}`} alt="" className='shadow-2xl ' />
                    <div className='p-5 absolute text-black bottom-0 text-xl flex items-center justify-center flex-col'>
                        <div className='relative mb-1'>
                            <img src="/buble.png" alt="" className='w-[130px] h-[70px]' />
                            <h2 className='w-full h-full top-0  flex items-center justify-center uppercase  font-extrabold text-white absolute '>{category.name}</h2>
                        </div>
                        <Link to={`/collection/${category}`} className='px-2 py-1 bg-gray-500 text-sm text-white rounded-lg hover:scale-105 hover:bg-pink-500' >Shop now</Link>
                    </div>
                </div>
            ))}



        </div>
    )
}

export default CategoryCollection