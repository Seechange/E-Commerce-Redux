import { Link } from "react-router-dom"
import { ArrowBigRightDash, ArrowBigLeftDash } from 'lucide-react'
import { useEffect, useRef, useState } from "react"

const NewProduct = () => {
    const newProduct = [
        { _id: 1, name: "Product 0", price: 100, image: "https://picsum.photos/500/500?random=1" },
        { _id: 2, name: "Product 6", price: 100, image: "https://picsum.photos/500/500?random=6" },
        { _id: 3, name: "Product 1", price: 100, image: "https://picsum.photos/500/500?random=2" },
        { _id: 4, name: "Product 2", price: 100, image: "https://picsum.photos/500/500?random=3" },
        { _id: 5, name: "Product 3", price: 100, image: "https://picsum.photos/500/500?random=4" },
        { _id: 6, name: "Product 4", price: 100, image: "https://picsum.photos/500/500?random=5" },
        { _id: 7, name: "Product 5", price: 100, image: "https://picsum.photos/500/500?random=6" },
    ]
    const scrollRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
        }

    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
        }

    };
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    useEffect(() => {
        handleScroll(); // Kiểm tra ngay khi component render
        scrollRef.current?.addEventListener("scroll", handleScroll);

        return () => {
            scrollRef.current?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section>
            <div className="container mx-auto text-center mt-10 ">
                <h2 className="text-2xl font-bold mb-2">New Product</h2>
                <p className="text-gray-600 text-lg mb-4">
                    Discover the lastest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion
                </p>
            </div>

            <div className="relative container mx-auto">
                <div className="absolute flex items-center justify-between w-full top-1/2 transform -translate-y-1/2 text-white z-20 shadow-2xl">
                    <button disabled={!canScrollLeft} onClick={scrollLeft} className={`cursor-pointer p-2 bg-opacity-50 backdrop-blur-lg hover:scale-110 ml-1 rounded-full ${!canScrollLeft ? 'opacity-50 pointer-events-none' : ''} `} ><ArrowBigLeftDash /></button>
                    <button disabled={!canScrollRight} onClick={scrollRight} className={`cursor-pointer p-2 bg-opacity-50 backdrop-blur-lg hover:scale-110 mr-1 rounded-full ${!canScrollRight ? 'opacity-50 pointer-events-none' : ''} `}><ArrowBigRightDash /></button>
                </div>
                <div ref={scrollRef} className=" flex  gap-4 mb-4 overflow-x-scroll relative " style={{ scrollBehavior: 'smooth' }}>
                    {newProduct.map((product) => (
                        <div key={product._id} className="min-w-full sm:min-w-1/2 md:min-w-1/4 lg:min-w-1/5 relative">
                            <img src={product.image} alt={product.name} className="object-cover h-[300px] w-full" />
                            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-2 backdrop-blur-md">
                                <Link to={`/product/${product._id}`} >
                                    <h4 className="font-medium">{product.name}</h4>
                                    <p className="">${product.price}</p>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default NewProduct
