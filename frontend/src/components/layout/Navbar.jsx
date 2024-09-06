import { Link } from "react-router-dom"
import { navItems } from "../../static/data"


const Navbar = ({ active }) => {
  return (
    <div className="flex items-center">

        { navItems && navItems.map((item, index) => (
            <div key={index} className="flex">
                <Link to={item.url} className={`${active === index + 1 && "bg-slate-900 rounded-md pb-1"} text-zinc-50 font-[500] px-6 cursor-pointer`}>
                    { item.title }
                </Link>
            </div>
        ))}

    </div>
  )
}

export default Navbar