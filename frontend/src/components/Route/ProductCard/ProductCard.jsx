import { useState } from "react"
import { Link } from "react-router-dom"
import { CgEye } from "react-icons/cg"
import { BiShoppingBag } from "react-icons/bi"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { currency } from "../../../constants"
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard"

const ProductCard = ({ data }) => {
    const [clickable, setClickable] = useState(false)
    const [open, setOpen] = useState(false)
    const productName = data.name.replace(/\s+/g, '-') 

    return (
        <>
            <div className="w-full bg-white p-3 relative rounded-lg shadow-lg">
                <div className="relative group">
                    <Link to={`/product/${productName}`} className="block">
                        <img 
                            src={data.image[0].url} 
                            alt={data.name} 
                            className="object-cover w-full h-[250px] shadow-lg transition duration-500 ease-in-out group-hover:blur-[2px] group-hover:brightness-50" 
                        />
                    </Link>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="flex space-x-4 pointer-events-auto">

                            { clickable ? (
                                <IoMdHeart
                                    size={30}
                                    title="Remove from wishlist"
                                    onClick={() => setClickable(!clickable)}
                                    className={`${clickable ? "text-red-600" : "text-zinc-50"} cursor-pointer hover:scale-125 transition-opacity opacity-0 group-hover:opacity-100 delay-[0ms]`}
                                />
                            ) : (
                                <IoMdHeartEmpty
                                    size={30}
                                    title="Add to wishlist"
                                    onClick={() => setClickable(!clickable)}
                                    className="text-zinc-50 cursor-pointer hover:scale-125 transition-opacity opacity-0 group-hover:opacity-100 delay-[0ms]"
                                />
                            )}
                            
                            <CgEye
                                size={30}
                                title="Quick view"
                                onClick={() => setOpen(!open)}
                                className="text-zinc-50 cursor-pointer hover:scale-125 transition-opacity opacity-0 group-hover:opacity-100 delay-[100ms]"
                            />
                            <BiShoppingBag
                                size={30}
                                title="Add to cart"
                                onClick={() => setOpen(!open)}
                                className="text-zinc-50 cursor-pointer hover:scale-125 transition-opacity opacity-0 group-hover:opacity-100 delay-[200ms]"
                            />
                        </div>
                    </div>
                </div>
                <Link to={`/`}>
                    <h2 className="pt-3 ml-1 font-[600] underline underline-offset-2">
                        {data.shop.name}
                    </h2>
                </Link>
                <div>
                    <h4 className="py-3 ml-1 text-[14px] font-[500] h-[105px]">
                        {data.name.length > 150 ? data.name.slice(0, 150) + '...' : data.name}
                    </h4>
                </div>
                <div className="flex items-center justify-between py-2 ml-1">
                    <div className="flex">
                        <h4 className="font-bold text-[20px] text-slate-800 font-Roboto">
                            {data.price === 0 ? data.price : data.discount_price} 
                            <span className="text-[18px]">{currency}</span>
                        </h4>
                        <h4 className="font-bold text-[20px] mt-[0.5px] pl-3 text-red-600 font-Roboto line-through">
                            {data.price && data.price + currency}
                        </h4>
                    </div>
                    <h4 className={`${data.stock === 1 ? "text-red-600" : "text-slate-800"} font-bold text-[15px] font-Roboto`}>
                        {data.stock === 1 ? 'Last one' : (data.stock <= 5 && data.stock > 1) ? `Only ${data.stock} left` : ''}
                    </h4>
                </div>
                <div className="flex items-center justify-between ml-1">
                    <div className="flex">
                        <AiFillStar size={20} color="#F6BA00" />
                        <AiFillStar size={20} color="#F6BA00" />
                        <AiFillStar size={20} color="#F6BA00" />
                        <AiFillStar size={20} color="#F6BA00" />
                        <AiOutlineStar size={20} color="#F6BA00" />
                        <h4 className="ml-2 font-[500] text-[14px] text-slate-800 font-Roboto">Reviews</h4>
                    </div>
                    <span className="font-bold font-Roboto text-[15px]">
                        { data.total_sold && `${data.total_sold} sold` }
                    </span>
                </div>

                { open && <ProductDetailsCard setOpen={setOpen} data={data} /> }

            </div>
        </>
    )
}

export default ProductCard