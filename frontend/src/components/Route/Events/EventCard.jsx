import { useState } from "react"
import { Link } from "react-router-dom"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { BiShoppingBag } from "react-icons/bi"
import { products } from "../../../static/data"
import { currency } from "../../../constants"
import Countdown from "./Countdown"


const EventCard = () => {
    const [clickable, setClickable] = useState(false)
    const [count, setCount] = useState(1)

    const product = products[6]
    const displayUnitsLeft = product.stock === 1 ? 'last one!' : (product.stock <= 5 && product.stock > 1) ? `${product.stock} left!` : ''
    const unitsSold = Math.round(product.total_sold / (product.stock + product.total_sold) * 100)
    const displayUnitsSold = `${unitsSold >= 70 ? '🔥' : ''} ${unitsSold}% sold` 

    return (
        <div className="w-full block lg:flex my-12 p-5 bg-white rounded-lg shadow-lg">
            <div className="w-full lg:w-[50%] flex justify-center">
                <Link to={`/product/${product.name.replace(/\s+/g, '-')}`}>
                    <img src={product.image[0].url} alt={product.name} className="object-cover h-[100%] p-5 cursor-pointer hover:brightness-105 transition" />
                </Link>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col p-5">
                <h2 className="w-full xl:w-[95%] text-[20px] mb-5 font-[600] font-Roboto text-slate-800">
                    { product.name }
                </h2>
                <p className="w-full lg:w-[95%] mb-5">
                    { product.description }
                </p>
                <div className="flex justify-between pt-1">
                    <div className="flex mb-1">
                        <h3 className="font-bold 400px:text-[20px] text-[18px] text-slate-800 font-Roboto">
                        { product.price === 0 ? product.price : product.discount_price } 
                            <span className="text-[18px]">
                                { currency }
                            </span>
                        </h3>
                        <h3 className="font-bold 400px:text-[20px] text-[18px] mt-[0.5px] pl-3 text-red-600 font-Roboto line-through">
                            { product.price && product.price + currency } 
                        </h3>
                        <span className="font-bold font-Roboto text-[16px] w-[160px] mt-[4.5px] pl-3 text-center">
                            { (product.total_sold && unitsSold >= 50) && displayUnitsSold }
                        </span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Countdown />
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
                        <span className="bg-slate-100 text-slate-900 font-bold 400px:px-3 400px:pt-[5px] 400px:pb-[6px] px-[10px] pt-[5px] pb-[6px] select-none">
                            { count }
                        </span>
                        <button
                            disabled={count === product.stock}
                            onClick={() => setCount(count + 1)}
                            tooltip={count === product.stock ? displayUnitsLeft : undefined}
                            className={`${count === product.stock ? "cursor-not-allowed" : "hover:opacity-75 transition duration-200 ease-in-out"} 
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