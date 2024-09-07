import { useNavigate } from "react-router-dom"
import { branding, categories } from "../../../static/data"


const Categories = () => {
    const navigate = useNavigate()

  return (
    <>
        <div className="w-11/12 mx-auto sm:block hidden">
            <div className="flex justify-between w-full p-5 my-12 bg-zinc-50 shadow-sm rounded-md">
                { branding && branding.map((brand, index) => (
                    <div key={index} className="flex items-start">
                        { brand.icon }
                        <div className="px-3">
                            <h3 className="font-bold text-sm md:text-base">
                                { brand.title }
                            </h3>
                            <p className="text-xs md:text-sm">
                                { brand.description }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div id="categories" className="w-11/12 mx-auto bg-zinc-50 p-6 mb-12 rounded-lg">
            <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
                { categories && categories.map((category, index) => {
                    const handleSubmit = (category) => {
                        navigate(`/products?category=${category.title}`)
                    }

                    return (
                        <div 
                            key={index} 
                            onClick={() => handleSubmit(category)}
                            className="flex items-center justify-between w-full h-[100px] overflow-hidden cursor-pointer"
                        >
                            <h5 className="text-[18px] leading-[1.3]">
                                { category.title }
                            </h5>
                            <img src={category.image} alt={category.title} className="object-cover w-[120px]" />
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Categories