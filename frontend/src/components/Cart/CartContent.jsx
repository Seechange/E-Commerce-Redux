import { Delete, Minus, Plus, Trash, Trash2 } from "lucide-react"


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
                <div key={index} className="grid grid-cols-12 gap-1 px-2 py-2 border-b border-pink-300 ">
                    <div className="col-span-3 flex items-center">
                        <img src={product.image} alt="" className="w-[80px] h-[80px]" />
                    </div>
                    <div className="col-span-6 flex flex-col flex-start">
                        <h1 className="font-bold text-[14px]">{product.name}</h1>
                        <span className="text-[12px] text-gray-500 font-bold italic">size:{product.size}</span>
                        <span className="text-[12px] text-gray-500 font-bold italic">color:{product.color}</span>
                        <div className="flex items-center gap-0.5 mt-1">
                            <button className="border inline-block border-gray-800 cursor-pointer hover:text-pink-500"><Minus size={12} /></button>
                            <div className="mx-2 flex items-center border rounded-full py-0.5 px-1"><span className="text-[12px]">12</span></div>
                            <button className="border inline-block border-gray-500 cursor-pointer hover:text-pink-500"><Plus size={12} /></button>
                        </div>
                    </div>
                    <div className="col-span-3 flex flex-col items-center justify-center gap-1">
                        <Trash2 size={18} className="cursor-pointer hover:text-pink-500" />
                        <h1 className="font-bold">{product.price} VND</h1>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CartContent