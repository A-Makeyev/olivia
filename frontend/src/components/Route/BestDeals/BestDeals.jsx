import { useEffect, useState } from "react"
import { products } from "../../../static/data"
import ProductCard from '../ProductCard/ProductCard'


const BestDeals = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const sortedProducts = products && products.sort((a, b) => b.total_sold - a.total_sold).slice(0, 5)
        setData(sortedProducts)
    }, [])

  return (
    <div>
        <div className="w-11/12 mx-auto">
            <div className="text-center font-Roboto font-[600] text-[27px] pb-[20px] md:text-start">
                <h1>Best Deals</h1>
            </div>
            <div className="grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-[15px] lg:grid-cols-3 lg:gap-[15px] 2xl:grid-cols-4 2xl:gap-[15px] 3xl:grid-cols-5 3xl:gap-[15px]">

            { data && data.map((deal, index) => (
                <ProductCard data={deal} key={index} />
            ))}

            </div>
        </div>
    </div>
  )
}

export default BestDeals