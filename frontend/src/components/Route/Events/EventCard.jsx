import { products } from "../../../static/data"
import { currency } from "../../../constants"
import Countdown from "./Countdown.jsx"


const EventCard = () => {
  return (
    <div className="w-full block lg:flex p-5 mb-12 bg-white rounded-lg shadow-lg">
        <div className="w-full lg:w-[50%] flex justify-center">
            <img src={products[1].image[0].url} alt={products[1].name} className="object-contain p-5" />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col justify-center p-5">
            <h2 className="w-full xl:w-[95%] text-[20px] mb-5 font-[600] font-Roboto text-slate-800">
                { products[1].name }
            </h2>
            <p className="w-full lg:w-[95%] mb-5">
                { products[1].description }
            </p>
            <div className="flex justify-between">
                <div className="flex mb-1">
                    <h3 className="font-bold 400px:text-[20px] text-[18px] text-slate-800 font-Roboto">
                    { products[1].price === 0 ? products[1].price : products[1].discount_price } 
                        <span className="text-[18px]">
                            { currency }
                        </span>
                    </h3>
                    <h3 className="font-bold 400px:text-[20px] text-[18px] mt-[0.5px] pl-3 text-red-600 font-Roboto line-through">
                        { products[1].price && products[1].price + currency } 
                    </h3>
                </div>
                <div>
                    <h3 className={`${products[1].stock === 1 ? "text-red-600" : "text-slate-800"} font-[600] text-[18px]`}>
                        { products[1].stock === 1 ? 'Last one' : (products[1].stock <= 5 && products[1].stock > 1) ? `Only ${products[1].stock} left` :  '' } 
                    </h3>
                </div>
            </div>
            <div className="flex justify-between">
                <Countdown />
                <span className="font-[500] text-[16px]">
                    { products[1].total_sold } sold
                </span>
            </div>
        </div>
    </div>
  )
}

export default EventCard