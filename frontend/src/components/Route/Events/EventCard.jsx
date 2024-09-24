import { useState } from "react"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { BiMessageDetail, BiShoppingBag } from "react-icons/bi"
import { products } from "../../../static/data"
import { currency } from "../../../constants"
import Countdown from "./Countdown"


const EventCard = ({ data }) => {
    const [clickable, setClickable] = useState(false)
    const [count, setCount] = useState(1)

  return (
    <div className="w-full block lg:flex p-5 mb-12 bg-white rounded-lg shadow-lg">
        <div className="w-full lg:w-[50%] flex justify-center">
            <img src={products[6].image[0].url} alt={products[6].name} className="object-cover p-5" />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col p-5">
            <h2 className="w-full xl:w-[95%] text-[20px] mb-5 font-[600] font-Roboto text-slate-800">
                { products[6].name }
            </h2>
            <p className="w-full lg:w-[95%] mb-5">
                { products[6].description }
            </p>
            <div className="flex justify-between">
                <div className="flex mb-1">
                    <h3 className="font-bold 400px:text-[20px] text-[18px] text-slate-800 font-Roboto">
                    { products[6].price === 0 ? products[6].price : products[6].discount_price } 
                        <span className="text-[18px]">
                            { currency }
                        </span>
                    </h3>
                    <h3 className="font-bold 400px:text-[20px] text-[18px] mt-[0.5px] pl-3 text-red-600 font-Roboto line-through">
                        { products[6].price && products[6].price + currency } 
                    </h3>
                </div>
                <div>
                    <h3 className={`${products[6].stock === 1 ? "text-red-600" : "text-slate-800"} font-[600] text-[16px]`}>
                        { products[6].stock === 1 ? 'Last one' : (products[6].stock <= 5 && products[6].stock > 1) ? `Only ${products[6].stock} left` :  '' } 
                    </h3>
                </div>
            </div>
            <div className="flex justify-between">
                <Countdown />
                <span className="font-[500] text-[16px]">
                    { products[6].total_sold } sold
                </span>
            </div>
            <div className="flex items-center justify-start">
                <div className="w-[120px]">
                    <button
                        disabled={count === 1}
                        onClick={() => { count > 1 && setCount(count - 1) }}
                        className={`${count === 1 ? "cursor-not-allowed" : "hover:opacity-75 transition duration-200 ease-in-out"} 
                        bg-gradient-to-l from-zinc-300 to-zinc-200 text-slate-950 font-bold 400px:px-3 400px:py-1 px-2 py-1`}
                    >
                        -
                    </button>
                    <span className="bg-slate-100 text-slate-900 font-bold 400px:px-3 400px:pt-[5px] 400px:pb-[6px] px-[10px] pt-[5px] pb-[6px]">
                        { count }
                    </span>
                    <button
                        disabled={count === products[6].stock}
                        onClick={() => setCount(count + 1)}
                        className={`${count === products[6].stock ? "cursor-not-allowed" : "hover:opacity-75 transition duration-200 ease-in-out"} 
                        bg-gradient-to-r from-zinc-300 to-zinc-200 text-slate-950 font-bold 400px:px-3 400px:py-1 px-2 py-1`}
                    >
                        +
                    </button>
                </div>  
                <div className="w-[150px] h-[50px] my-3 flex items-center justify-center bg-slate-900 hover:bg-slate-800 transition rounded-xl cursor-pointer">
                    <span className="text-slate-50 font-semibold text-[15px] flex items-center">
                        <BiShoppingBag size={20} className="mr-1 mb-[1px]" />
                        Add To Cart 
                    </span>
                </div> 
                <div className="ml-4">

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
  )
}

export default EventCard