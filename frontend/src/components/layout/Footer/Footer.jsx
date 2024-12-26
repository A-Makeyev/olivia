import { Link } from "react-router-dom"
import { LuMail } from "react-icons/lu"
import { FaInstagram, FaFacebookSquare, FaTwitter, FaWhatsapp } from "react-icons/fa"


const Footer = () => {
    const companyLinks = [
        { name: 'About', url: '/about' },
        { name: 'Careers', url: '/carrers' },
        { name: 'Locations', url: '/locations' },
        { name: 'Reviews', url: '/reviews' },
        { name: 'Blog', url: '/blog' }
    ]

    const supportLinks = [
        { name: 'Contact Us', url: '/' },
        { name: 'Shipping', url: '/' },
        { name: 'Live chat', url: '/' },
        { name: 'Sellers', url: '/' },
        { name: 'FAQ', url: '/' }
    ]    

    return (
        <div className="bg-slate-900 text-slate-50">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-40 sm:px-8 px-5 py-16 sm:text-center">
                <div className="flex flex-col sm:flex-row justify-around xl:justify-between text-center mb-10 xl:mb-0 sm:text-start">
                    <div className="flex flex-col justify-center">
                        <img 
                            src="images/logo-text.png" 
                            alt="logo" 
                            className="object-scale-down lg:ml-1 h-20 w-25 hover:scale-105 transition" 
                            style={{filter: "brightness(0) invert(1)"}} 
                        /> 
                        <br />
                        <div className="flex items-center mb-3 m-auto sm:m-0">
                            <FaWhatsapp size={25} className="ml-[15px] cursor-pointer hover:scale-110 transition" />
                            <LuMail size={25} className="ml-[15px] cursor-pointer hover:scale-110 transition" />
                            <FaInstagram size={25} className="ml-[15px] cursor-pointer hover:scale-110 transition" />
                            <FaFacebookSquare size={25} className="ml-[15px] cursor-pointer hover:scale-110 transition" />
                            <FaTwitter size={25} className="ml-[15px] cursor-pointer hover:scale-110 transition" />
                        </div>
                    </div>
                    <ul className="text-center mt-4 sm:text-start">
                        <h1 className="mb-1 font-semibold">
                            Company
                        </h1> 

                        { companyLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.url} className="text-slate-500 hover:text-slate-50 transition text-sm leading-6 cursor-pointer">
                                    { link.name }
                                </Link>
                            </li>
                        ))}

                    </ul>
                    <ul className="text-center mt-4 sm:text-start">
                        <h1 className="mb-1 font-semibold">
                            Support
                        </h1> 

                        { supportLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.url} className="text-slate-500 hover:text-slate-50 transition text-sm leading-6 cursor-pointer">
                                    { link.name }
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="flex flex-col justify-center m-auto xl:m-0 px-4 py-5 w-full md:w-[80%] xl:w-[90%] bg-indigo-400 rounded">
                    <div>
                        <h1 className="text-base sm:text-lg lg:text-xl text-pretty mb-6 font-semibold">
                            <span className="text-slate-800 font-bold">Be the first</span> 
                            { ' ' }
                            to be notified on events
                            <br /> 
                            special offers, new arrivals and discounts
                        </h1>
                    </div>
                    <div>
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="text-slate-800 w-full text-sm md:text-base sm:w-72 mr-2 mb-4 py-3 px-3 rounded" 
                            required 
                        />
                        <button className="px-3 py-3 text-sm md:text-base sm:w-auto w-full font-semibold text-slate-50 bg-slate-900 hover:bg-slate-800 transition rounded">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center text-sm text-slate-500 pb-10">
                <span className="mb-[-15px]">
                    © { new Date().getFullYear() } Liv Bogen Prints
                </span>
                <span>
                    <a href="/" className="text-slate-500 hover:text-slate-50 transition text-sm leading-6 cursor-pointer">Privacy Notice</a>
                    { ' ' } · { ' ' }  
                    <a href="/" className="text-slate-500 hover:text-slate-50 transition text-sm leading-6 cursor-pointer">Conditions of Use</a>
                </span>
                <div className="w-full flex flex-row items-center justify-center mt-[-5px]">
                    <img src="/images/paypal.png" alt="Paypal" className="object-contain w-[50px] mx-1" style={{filter: "brightness(0) invert(1)"}} />
                    <img src="/images/mastercard.png" alt="Mastercard" className="object-contain w-[50px] mx-1" style={{filter: "brightness(0) invert(1)"}} />
                    <img src="/images/visa.png" alt="Visa" className="object-contain w-[50px] mx-1" style={{filter: "brightness(0) invert(1)"}} />
                </div>
            </div>
        </div>
    )
}

export default Footer