import { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { BiMessageDetail, BiShoppingBag } from "react-icons/bi"
import { currency } from "../../../constants"


const ProductDetailsCard = ({ setOpen, data }) => {
    const [selectable, setSelectable] = useState(false)
    const [clickable, setClickable] = useState(false)
    const [count, setCount] = useState(1)
    
    const handleMessage = () => {

    }

    return (
        <div className="bg-white">

            { data && (
                <div className="flex items-center justify-center h-screen fixed w-full top-0 left-0 bg-slate-900 bg-opacity-60 z-40">
                    <div className="relative overflow-y-auto w-[90%] 800px:w-[60%] 800px:h-[75vh] h-[90vh] p-4 bg-white rounded-lg shadow-lg">
                        <RxCross2 
                            size={30} 
                            onClick={() => setOpen(false)} 
                            className="absolute top-3 right-3 z-50 cursor-pointer rounded-full hover:bg-slate-100 transition" 
                        />
                        <div className="block w-full 1300px:flex">
                            <div className="block w-full 1300px:w-[50%]">
                                <img src={data.image[0].url} alt={data.name} className="object-cover p-5 mt-7" />
                                <div className="flex pl-5">
                                    <img src={data.shop.image.url} alt={data.shop.name} className="object-fill w-[50px] h-[50px] mr-4 mt-3 rounded-full" />
                                    <div className="">
                                        <h3 className="pt-3 text-[15px] font-[600]">
                                            { data.shop.name }
                                        </h3>
                                        <h5 className="text-[15px]">
                                            ({ data.shop.ratings }) Ratings
                                        </h5>
                                    </div>
                                </div>
                                <div className="pl-5">
                                    <div 
                                        onClick={handleMessage}
                                        className="w-[150px] h-[50px] my-3 mt-4 flex items-center justify-center bg-slate-900 hover:bg-slate-800 transition rounded-xl cursor-pointer"
                                    >
                                        <span className="text-slate-50 flex items-center">
                                            <BiMessageDetail size={20} className="mr-1 mt-1" /> 
                                            Send Message 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                                <h1 className="text-[25px] font-[600] font-Roboto text-slate-800 py-5 pr-5">
                                    { data.name }
                                </h1>
                                <p className="pr-5">
                                    { data.description }
                                </p>
                                <div className="flex pt-5">
                                    <h3 className="font-bold text-[20px] text-slate-800 font-Roboto">
                                        { data.price === 0 ? data.price : data.discount_price } 
                                        <span className="text-[18px]">
                                            { currency }
                                        </span>
                                    </h3>
                                    <h3 className="font-bold text-[20px] mt-[0.5px] pl-3 text-red-600 font-Roboto line-through">
                                        { data.price && data.price + currency } 
                                    </h3>
                                    <h4 className={`${data.stock === 1 ? "text-red-600" : "text-slate-800"} mt-1 ml-16 font-bold text-[15px] font-Roboto`}>
                                        { data.stock === 1 ? 'Last one' : (data.stock <= 5 && data.stock > 1) ? `Only ${data.stock} left` :  '' } 
                                    </h4>
                                    <h5 className="font-bold text-slate-800 text-[15px] font-Roboto mt-1 ml-16">
                                        { data.total_sold } Sold
                                    </h5>
                                </div>
                                <div className="flex items-center justify-start">
                                    <div>
                                        <button
                                            onClick={() => { count > 1 && setCount(count - 1) }}
                                            className="bg-gradient-to-r from-teal-400 to-teal-500 text-slate-50 font-bold
                                            px-3 py-1 hover:opacity-75 transition duration-200 ease-in-out"
                                        >
                                            -
                                        </button>
                                        <span className="bg-slate-200 text-slate-900 font-medium px-4 pt-[5px] pb-[6px]">
                                            { count }
                                        </span>
                                        <button
                                            onClick={() => setCount(count + 1)}
                                            className="bg-gradient-to-l from-teal-400 to-teal-500 text-slate-50 font-bold
                                            px-3 py-1 hover:opacity-75 transition duration-200 ease-in-out"
                                        >
                                            +
                                        </button>
                                    </div>  
                                    <div className="w-[150px] h-[50px] my-3 ml-5 flex items-center justify-center bg-slate-900 hover:bg-slate-800 transition rounded-xl cursor-pointer">
                                        <span className="text-slate-50 flex items-center">
                                            <BiShoppingBag size={25} className="mr-1 mb-1" />
                                            Add To Cart 
                                        </span>
                                    </div> 
                                    <div className="ml-5">

                                        { clickable ? (
                                            <IoMdHeart
                                                size={35}
                                                title="Remove from wishlist"
                                                color={clickable ? "red" : "gray"}
                                                onClick={() => setClickable(!clickable)}
                                                className="cursor-pointer hover:scale-125 transition"
                                            />
                                        ) : (
                                            <IoMdHeartEmpty
                                                size={35}
                                                title="Add to wishlist"
                                                color={clickable ? "red" : "gray"}
                                                onClick={() => setClickable(!clickable)}
                                                className="cursor-pointer hover:scale-125 transition"
                                            />
                                        )}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}

        </div>
    )
}

export default ProductDetailsCard