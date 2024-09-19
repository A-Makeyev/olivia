import { FaInstagram, FaFacebookSquare, FaTwitter, FaWhatsapp } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="bg-slate-900 text-slate-50">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7 bg-indigo-400">
            <h1 className="text-2xl md:mb-0 md:w-2/5 mb-6 lg:leading-normal font-semibold">
                <span className="text-slate-800 font-bold">Be the first</span> 
                { ' ' }
                to get notified on new arrivals 
                <br /> 
                special offers, events and discounts
            </h1>
            <div>
                <input 
                    type="email" 
                    placeholder="Email address" 
                    className="text-slate-800 w-full sm:w-72 sm:mr-1 lg:mb-4 py-3 px-2.5 rounded" 
                    required 
                />
                <button className="px-3 py-3 rounded-md md:w-auto w-full font-semibold text-slate-50 bg-slate-900 hover:bg-slate-800 transition">
                    Subscribe
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
            <ul className="sm:block flex flex-col items-center text-center sm:text-start">
                <img 
                    src="images/logo-text.png" 
                    alt="logo" 
                    className="object-scale-down lg:ml-14 h-20 w-25 hover:scale-105 transition" 
                    style={{filter: "brightness(0) invert(1)"}} 
                /> 
                <br />
                <p>
                    some text but do i really need it here?
                </p>
                <div className="flex items-center mt-[15px]">
                    <FaInstagram size={25} className="ml-[15px] cursor-pointer hover:scale-105 transition" />
                    <FaFacebookSquare size={25} className="ml-[15px] cursor-pointer hover:scale-105 transition" />
                    <FaTwitter size={25} className="ml-[15px] cursor-pointer hover:scale-105 transition" />
                    <FaWhatsapp size={25} className="ml-[15px] cursor-pointer hover:scale-105 transition" />
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Footer