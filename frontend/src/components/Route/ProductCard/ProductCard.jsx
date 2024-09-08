import { useState } from "react"
import { Link } from "react-router-dom"
import { CgEye } from "react-icons/cg"
import { BiShoppingBag } from "react-icons/bi"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { currency } from "../../../constants"


const ProductCard = ({ data }) => {
    const [clickable, setClickable] = useState(false)
    const [open, setOpen] = useState(false)

    const productName = data.name.replace(/\s+/g, '-') 

    return (
        <>
            <div className="w-full h-[370px] bg-white p-3 relative cursor-pointer rounded-lg shadow-sm">
            <div className="flex justify-end"></div>
                <Link to={`/product/${productName}`}>
                    <img src={data.image[0].url} alt={productName} className="object-contain w-full h-[170px] pr-7 rounded-lg" />
                </Link>
                <Link to="/">
                    <h2 className="pt-3 pb-3 font-[600]">
                        { data.shop.name }
                    </h2>
                </Link>
                <Link to={`/product/${productName}`}>
                    <h4 className="pb-3 text-[14px] font-[500]">
                        { data.name.length > 90 ? data.name.slice(0, 90) + '...' : data.name}
                    </h4>
                    <div className="flex">
                        <AiFillStar size={20} color="#F6BA00" className="mr-2 cursor-pointer" />
                        <AiFillStar size={20} color="#F6BA00" className="mr-2 cursor-pointer" />
                        <AiFillStar size={20} color="#F6BA00" className="mr-2 cursor-pointer" />
                        <AiFillStar size={20} color="#F6BA00" className="mr-2 cursor-pointer" />
                        <AiOutlineStar size={20} color="#F6BA00" className="mr-2 cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="flex">
                            <h4 className="font-bold text-[18px] text-slate-800 font-Roboto">
                                { data.price === 0 ? data.price : data.discount_price } 
                                <span className="text-[16px]">
                                    { currency }
                                </span>
                            </h4>
                            <h4 className="font-[500] text-[18px] mt-[-1px] pl-3 text-red-600 line-through">
                                { data.price && data.price + currency } 
                            </h4>
                        </div>
                        <span className="font-[500] text-[15px] ">
                            { data.total_sold && data.total_sold + ' sold ' } 
                        </span>
                    </div>
                </Link>
                <div>
                    { clickable ? (
                        <IoMdHeart
                            size={30}
                            title="Remove from wishlist"
                            color={clickable ? "red" : "gray"}
                            onClick={() => setClickable(!clickable)}
                            className="absolute right-1.5 top-12 cursor-pointer hover:scale-125 transition"
                        />
                    ) : (
                        <IoMdHeartEmpty
                            size={30}
                            title="Add to wishlist"
                            color={clickable ? "red" : "gray"}
                            onClick={() => setClickable(!clickable)}
                            className="absolute right-1.5 top-12 cursor-pointer hover:scale-125 transition"
                        />
                    )}
                    <CgEye
                        size={25}
                        title="Quick view"
                        color="gray"
                        onClick={() => setOpen(!open)}
                        className="absolute right-2 top-20 cursor-pointer hover:scale-125 transition"
                    />
                    <BiShoppingBag
                        size={25}
                        title="Add to cart"
                        color="gray"
                        onClick={() => setOpen(!open)}
                        className="absolute right-2 top-28 cursor-pointer hover:scale-125 transition"
                    />
                </div>
            </div>
        </>
    )
}

export default ProductCard