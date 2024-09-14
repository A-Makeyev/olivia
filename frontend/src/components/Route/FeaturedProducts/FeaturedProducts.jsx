import { products } from "../../../static/data"
import ProductCard from "../ProductCard/ProductCard"


const FeaturedProducts = () => {
  return (
    <div>
        <div className="w-11/12 mx-auto">
            <div className="text-center font-Roboto font-[600] text-[27px] pb-[20px] md:text-start">
                <h1>Featured Products</h1>
            </div>
            <div className="grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-[15px] lg:grid-cols-3 lg:gap-[15px] 2xl:grid-cols-4 2xl:gap-[15px] 3xl:grid-cols-5 3xl:gap-[15px] mb-12">

                { products && products.map((product, index) => <ProductCard data={product} key={index} />) }

            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts