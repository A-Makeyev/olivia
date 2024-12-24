import { useSearchParams } from "react-router-dom"
import { products } from "../static/data"
import Header from "../components/Layout/Header"
import ProductCard from "../components/Route/ProductCard/ProductCard"
import Footer from "../components/Layout/Footer/Footer"


const ProductsPage = () => {
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')
    const filteredProducts = category === null ? products : products.filter(product => product.category === category)

    return (
        <div>
            <Header activePageIndex={3} />
            <div className={`${filteredProducts.length <= 4 ? "h-[60vh] sm:h-[55vh]" : ""} w-11/12 mx-auto mt-12`}>
                <div className={`${filteredProducts.length > 0 ? "grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-[15px] lg:grid-cols-3 lg:gap-[15px] 2xl:grid-cols-4 2xl:gap-[15px] 3xl:grid-cols-5 3xl:gap-[15px] mb-12" : ""}`}>
                    
                    { filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => <ProductCard data={product} key={index} /> )
                    ) : (
                        <h1 className="text-center w-full pb-[100px] text-[25px]">
                            No Products Found
                        </h1>
                    )}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductsPage