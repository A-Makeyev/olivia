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
            <div className="w-full h-[490px] bg-white p-3 relative rounded-lg shadow-lg">
                <div className="flex justify-end"></div>
                <Link to={`/product/${productName}`}>
                    <img src={data.image[0].url} alt={productName} className="object-cover w-full h-[250px] pr-8 hover:opacity-95 transition" />
                </Link>
                <Link to="/">
                    <h2 className="pt-3 ml-1 font-[600] underline underline-offset-4">
                        { data.shop.name }
                    </h2>
                </Link>
                {/* <div className="p-[1px] w-5 "></div> */}
                <div>
                    <h4 className="py-3 ml-1 text-[14px] font-[500] h-[95px]">
                        { data.name.length > 100 ? data.name.slice(0, 100) + '...' : data.name}
                    </h4>
                </div>
                <div className="flex items-center justify-between py-2 ml-1">
                    <div className="flex">
                        <h4 className="font-bold text-[18px] text-slate-800 font-Roboto">
                            { data.price === 0 ? data.price : data.discount_price } 
                            <span className="text-[16px]">
                                { currency }
                            </span>
                        </h4>
                        <h4 className="font-bold text-[18px] mt-[0.5px] pl-3 text-red-600 font-Roboto line-through">
                            { data.price && data.price + currency } 
                        </h4>
                    </div>
                    <h4 className={`${data.stock === 1 ? "text-red-600" : "text-slate-800"} font-bold text-[15px] font-Roboto`}>
                        { data.stock === 1 ? 'Last one' : (data.stock <= 5 && data.stock > 1) ? `Only ${data.stock} left` :  '' } 
                    </h4>
                </div>
                <div className="flex items-center justify-between ml-1">
                    <div className="flex">
                        <AiFillStar size={20} color="#F6BA00" />
                        <AiFillStar size={20} color="#F6BA00" />
                        <AiFillStar size={20} color="#F6BA00" />
                        <AiFillStar size={20} color="#F6BA00" />
                        <AiOutlineStar size={20} color="#F6BA00" />
                        <h4 className="ml-2 font-[500] text-[14px] text-slate-800 font-Roboto">
                            Reviews
                        </h4>
                    </div>
                    <span className="font-[500] text-[15px]">
                        { data.total_sold && data.total_sold + ' sold ' } 
                    </span>
                </div>
                <div>
                    { clickable ? (
                        <IoMdHeart
                            size={30}
                            title="Remove from wishlist"
                            color={clickable ? "red" : "gray"}
                            onClick={() => setClickable(!clickable)}
                            className="absolute right-1.5 top-20 cursor-pointer hover:scale-125 transition"
                        />
                    ) : (
                        <IoMdHeartEmpty
                            size={30}
                            title="Add to wishlist"
                            color={clickable ? "red" : "gray"}
                            onClick={() => setClickable(!clickable)}
                            className="absolute right-1.5 top-20 cursor-pointer hover:scale-125 transition"
                        />
                    )}
                    <CgEye
                        size={25}
                        title="Quick view"
                        color="gray"
                        onClick={() => setOpen(!open)}
                        className="absolute right-2 top-28 cursor-pointer hover:scale-125 transition"
                    />
                    <BiShoppingBag
                        size={25}
                        title="Add to cart"
                        color="gray"
                        onClick={() => setOpen(!open)}
                        className="absolute right-2 top-36 cursor-pointer hover:scale-125 transition"
                    />
                </div>
            </div>
        </>
    )
}

export default ProductCard