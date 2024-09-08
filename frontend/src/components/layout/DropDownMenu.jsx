import { useNavigate } from "react-router-dom"


const DropDownMenu = ({ categories, setDropDown }) => {
    const navigate = useNavigate()
    const submitHandler = (product) => {
        navigate(`/products?category=${product.title}`)
        setDropDown(false)
        window.location.reload()
    } 

  return (
    <div className="absolute pb-4 w-[260px] bg-slate-50 z-30 rounded-b-xl shadow-xl">
        { categories && categories.map((category, index) => (
            <div key={index} onClick={() => submitHandler(category)} className="flex items-center">
                <img 
                    src={category.image} 
                    alt={category.productName} 
                    style={{
                        width: "25px",
                        height: "25px",
                        marginLeft: "10px",
                        userSelect: "none",
                        objectFit: "contain",
                        borderRadius: "0.5rem"
                    }}
                />
                <h3 className="m-3 select-none cursor-pointer">
                    { category.title }
                </h3>
            </div>
        ))}
    </div>
  )
}

export default DropDownMenu