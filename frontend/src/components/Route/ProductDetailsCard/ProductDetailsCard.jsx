import { useState } from "react"
import { Link } from "react-router-dom"
import { RxCross2 } from "react-icons/rx"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { BiMessageDetail, BiShoppingBag } from "react-icons/bi"
import { currency } from "../../../constants"


const ProductDetailsCard = ({ setOpen, data }) => {
    // const [selectable, setSelectable] = useState(false)
    const [clickable, setClickable] = useState(false)
    const [count, setCount] = useState(1)

    const displayUnitsLeft = data.stock === 1 ? 'last one!' : (data.stock <= 5 && data.stock > 1) ? `${data.stock} left!` : ''
    const unitsSold = Math.round(data.total_sold / (data.stock + data.total_sold) * 100)
    const displayUnitsSold = `${unitsSold >= 70 ? '🔥' : ''} ${unitsSold}% sold` 

    const handleMessage = () => {

    }

    return (
        <div className="bg-white">

            { data && (
                <div className="flex items-center justify-center h-screen fixed w-full top-0 left-0 bg-slate-900 bg-opacity-60 z-40">
                    <div className="relative overflow-y-auto w-[90%] sm:w-[80%] 2xl:w-[70%] 3xl:w-[60%] h-[85vh] p-4 bg-white rounded-lg shadow-lg hide-scrollbar">
                        <RxCross2 
                            size={30} 
                            onClick={() => setOpen(false)} 
                            className="absolute top-3 right-3 z-50 cursor-pointer rounded-full hover:bg-slate-100 hover:rotate-90 duration-300" 
                        />
                        <div className="block w-full 1300px:flex mt-2">
                            <div className="block w-full 1300px:w-[50%]">
                                <div className="flex justify-center h-[550px]">
                                    <Link to={`/product/${data.name.replace(/\s+/g, '-')}`}>
                                        <img src={data.image[0].url} alt={data.name} className="object-cover w-[900px] h-[100%] p-5 mt-7 cursor-pointer" />
                                    </Link> 
                                </div>
                                <div className="flex pl-5 pt-7">
                                    <Link to={``}>
                                        <img src={data.shop.image.url} alt={data.shop.name} className="object-fill w-[50px] h-[50px] mr-4 mt-3 rounded-full" />
                                    </Link>
                                    <div>
                                        <Link to={``}>
                                            <h3 className="pt-3 text-[15px] font-[600]">
                                                { data.shop.name }
                                            </h3>
                                        </Link>
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
                                        <span className="text-slate-50 font-semibold text-[15px] flex items-center">
                                            <BiMessageDetail size={20} className="mr-1 mt-[3px]" /> 
                                            Contact Seller 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full 1300px:w-[50%] pt-6 pl-[5px] pr-[5px]">
                                <div className="lg:h-[424px] overflow-auto hide-scrollbar">
                                    <h1 className="text-[20px] font-[600] font-Roboto text-slate-800 py-5 pr-5">
                                        { data.name }
                                    </h1>
                                    <p className="pr-5">
                                        { data.description }
                                    </p>
                                </div>
                                <div className={`${!data.price ? "flex text-center" : "flex pl-1"} pt-7`}>
                                    <h3 className={`${!data.price && "w-[100px]"} font-bold 400px:text-[20px] text-[18px] text-slate-800 font-Roboto`}>
                                        { data.price === 0 ? data.price : data.discount_price } 
                                        <span className="text-[18px]">
                                            { currency }
                                        </span>
                                    </h3>
                                    <h3 className="font-bold 400px:text-[20px] text-[18px] mt-[0.5px] pl-3 text-red-600 font-Roboto line-through">
                                        { data.price && data.price + currency } 
                                    </h3>
                                    <span className={`${data.price >= 1000 ? "w-[120px]" : "w-[170px]"} ${data.price && "pl-5"} text-center font-bold font-Roboto text-[16px] mt-[4.5px]`}>
                                        { (data.total_sold && unitsSold >= 50) && displayUnitsSold }
                                    </span>
                                </div>
                                <div className="flex items-center justify-start mb-5">
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
                                            disabled={count === data.stock}
                                            onClick={() => setCount(count + 1)}
                                            tooltip={count === data.stock ? displayUnitsLeft : undefined}
                                            className={`${count === data.stock ? "cursor-not-allowed" : "hover:opacity-75 transition duration-200 ease-in-out"} 
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
                    </div>
                </div>

            )}

        </div>
    )
}

export default ProductDetailsCard