import { Minus, Plus } from "lucide-react"


const CartContent = () => {
    const products = [{
        productid: 1,
        name: "Product 1",
        size: "M",
        quantity: 2,
        color: "red",
        price: 100,
        image: "https://picsum.photos/200/300?random=1"
    }, {
        productid: 2,
        name: "Product 2",
        size: "M",
        quantity: 2,
        color: "red",
        price: 100,
        image: "https://picsum.photos/200/300?random=2"
    }, {
        productid: 3,
        name: "Product 3",
        size: "M",
        quantity: 2,
        color: "red",
        price: 100,
        image: "https://picsum.photos/200/300?random=3"
    }, {
        productid: 4,
        name: "Product 4",
        size: "M",
        quantity: 2,
        color: "red",
        price: 100,
        image: "https://picsum.photos/200/300?random=4"
    }]
    return (
        <div>
            {products.map((product, index) => (
                <div key={index} className="grid grid-cols-12 gap-1 px-2 py-2 ">
                    <div className="col-span-4">
                        <img src={product.image} alt="" className="w-[80px] h-[80px]" />
                    </div>
                    <div className="col-span-6 flex flex-col flex-start">
                        <h1 className="font-bold">{product.name}</h1>
                        <span className="text-sm text-gray-500 font-bold">size:{product.size}|color:{product.color}</span>
                        <div className="flex items-center gap-0.5 mt-1">
                            <div className="border inline-block border-gray-500 cursor-pointer hover:text-pink-500"><Plus size={12} /></div>
                            <input type="text" className="border inline-block border-gray-500 w-6 h-4 text-center focus:outline-none" />
                            <div className="border inline-block border-gray-800 cursor-pointer hover:text-pink-500"><Minus size={12} /></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            ))}

        </div>
    )
}

export default CartContent