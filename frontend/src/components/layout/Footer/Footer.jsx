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

    const shopLinks = [
        { name: 'Games', url: '/' },
        { name: 'Computers', url: '/' },
        { name: 'Watches', url: '/' },
        { name: 'Paintings', url: '/' },
        { name: 'Events', url: '/' }
    ]


    const supportLinks = [
        { name: 'FAQ', url: '/' },
        { name: 'Contact Us', url: '/' },
        { name: 'Shipping', url: '/' },
        { name: 'Live chat', url: '/' },
        { name: 'Sellers', url: '/' }
    ]    

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
                        <LuMail size={25} className="ml-[15px] cursor-pointer hover:scale-105 transition" />
                    </div>
                </ul>
                <ul className="text-center sm:text-start">
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
                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">
                        Shop
                    </h1> 

                    { shopLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.url} className="text-slate-500 hover:text-slate-50 transition text-sm leading-6 cursor-pointer">
                                { link.name }
                            </Link>
                        </li>
                    ))}

                </ul>
                <ul className="text-center sm:text-start">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-sm text-slate-500 pb-8">
                <span>
                    © { new Date().getFullYear() } Olivia
                </span>
                <span>
                    Terms · Policy
                </span>
                <div className="w-full flex items-center justify-center sm:block">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer