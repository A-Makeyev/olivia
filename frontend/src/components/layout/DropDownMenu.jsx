import { useNavigate } from "react-router-dom"


const DropDownMenu = ({ categories, setDropDown }) => {
    const navigate = useNavigate()
    const submitHandler = (product) => {
        navigate(`/products?category=${product.title}`)
        setDropDown(false)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    } 

  return (
    <div className="absolute w-[260px] bg-slate-50 z-30 rounded-b-xl shadow-xl">
        { categories && categories.map((category, index) => (
            <div 
                key={index} 
                onClick={() => submitHandler(category)} 
                className={`${categories.length === index + 1 && "border-b-0 rounded-b-xl"} border-b-2 flex items-center py-2 cursor-pointer hover:bg-slate-100 transition`}
            >
                <img 
                    src={category.image} 
                    alt={category.productName} 
                    style={{
                        width: "25px",
                        height: "25px",
                        marginLeft: "10px",
                        userSelect: "none",
                        objectFit: "cover",
                        borderRadius: "0.5rem"
                    }}
                />
                <h3 className="m-3 font-Roboto select-none">
                    { category.title }
                </h3>
            </div>
        ))}
    </div>
  )
}

export default DropDownMenu