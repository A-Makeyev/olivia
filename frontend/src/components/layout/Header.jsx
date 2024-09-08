import { useState } from "react"
import { Link } from "react-router-dom"
import { categories, products } from "../../static/data.js"
import { IoSearch, IoHeartOutline } from "react-icons/io5"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { BiMenuAltLeft, BiShoppingBag, BiUserCircle } from "react-icons/bi"
import DropDownMenu from "./DropDownMenu.jsx"
import Navbar from './Navbar.jsx'


const Header = ({ activePageIndex }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState(null)
  const [dropDown, setDropDown] = useState(false)
  const [active, setActive] = useState(false)

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)

    const filteredProducts = products && products.filter((product) =>
      product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    )
    setSearchData(filteredProducts)
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
      setActive(true)
    } else {
      setActive(false)
    }
  })

  const number = 69

  return (
    <>
      <div className="w-11/12 mx-auto">
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img src="images/logo-text.png" alt="logo" className="object-scale-down lg:ml-14 h-20 w-25 hover:scale-105 transition" />
            </Link>
          </div>
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product.."
              className="h-[40px] w-full px-2 border-[2px] border-slate-500 rounded-md p-5"
              onChange={handleSearch}
              value={searchTerm}
            />
            <IoSearch size={30} className="absolute right-2 top-1.5 cursor-pointer" />
            {searchData && searchData.length !== 0 && (
              <div className="w-full absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4 rounded-b-xl shadow-xl">
                {searchData && searchData.map((data, index) => {
                  const productName = data.name.replace(/\s+/g, '-')
                  return (
                    <Link to={`/product/${productName}`} key={index}>
                      <div className="w-full flex items-start-py-3">
                        <img src={data.image[0].url} alt={productName} className="w-[90px] h-[90px] mr-[35px]" />
                        <h1>{data.name}</h1>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
          <div className="w-[150px] h-[50px] my-3 flex items-center justify-center bg-slate-900 hover:bg-slate-800 transition rounded-xl cursor-pointer">
            <Link to="/seller">
              <h1 className="flex items-center font-semibold text-zinc-50">
                Become a seller
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${active && "shadow-sm fixed top-0 left-0 z-10"} hidden w-full bg-indigo-400 h-[70px] 800px:flex items-center justify-between transition`}>
        <div className="w-11/12 mx-auto relative flex items-center justify-between">
          <div>
            <div onClick={() => setDropDown(!dropDown)} className="hidden relative h-[60px] mt-[10px] w-[260px] lg:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2 cursor-pointer" />
              <button className="w-full flex justify-between items-center h-[100%] pl-10 pb-1 bg-slate-50 font-sans text-lg font-[500] select-none rounded-t-xl">
                Categories

                { dropDown ?
                  <IoIosArrowUp size={20} className="absolute right-5 top-5 cursor-pointer" />
                  :
                  <IoIosArrowDown size={20} className="absolute right-5 top-5 cursor-pointer" />
                }

              </button>

              {dropDown && <DropDownMenu categories={categories} setDropDown={setDropDown} />}


            </div>
          </div>
          <div className="flex items-center">
            <Navbar active={activePageIndex} />
          </div>
          <div className="flex">
            <div className="flex items-center">
              <div className="relative mr-[15px] cursor-pointer">
                <IoHeartOutline size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute left-5 bottom-4 rounded-full text-center font-bold text-[11px] bg-red-500 text-zinc-50 w-5 h-5 leading-tight">
                  <span className={`${number > 9 ? "right-[3.5px]" : "right-[6.5px]"} top-[3px] absolute`}>
                    {number}
                  </span>
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative mr-[15px] cursor-pointer">
                <BiShoppingBag size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute left-5 bottom-4 rounded-full text-center font-bold text-[11px] bg-red-500 text-zinc-50 w-5 h-5 leading-tight">
                  <span className={`${number > 9 ? "right-[3.5px]" : "right-[6.5px]"} top-[3px] absolute`}>
                    {number}
                  </span>
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative mr-[15px] cursor-pointer">
                <Link to="/login">
                  <BiUserCircle size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header