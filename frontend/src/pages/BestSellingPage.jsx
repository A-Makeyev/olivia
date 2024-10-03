import { useEffect, useState } from "react"
import { products } from "../static/data"
import Header from "../components/Layout/Header"
import ProductCard from "../components/Route/ProductCard/ProductCard"
import Footer from "../components/Layout/Footer/Footer"


const BestSellingPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const product = products && products.sort((a, b) => a.total_sold - b.total_sold) 
        setData(product)
    }, [])

    return (
        <div>
            <Header activePageIndex={2} />
            <div className={`${data.length <= 4 ? "h-[60vh] sm:h-[55vh]" : ""} w-11/12 mx-auto mt-12`}>
                <div className="grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-[15px] lg:grid-cols-3 lg:gap-[15px] 2xl:grid-cols-4 2xl:gap-[15px] 3xl:grid-cols-5 3xl:gap-[15px] mb-12">
                    
                    { data && data.map((product, index) => <ProductCard data={product} key={index} /> )}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BestSellingPage