import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import Footer from "../components/Layout/Footer/Footer"
import Header from "../components/Layout/Header"


const FaqPage = () => {
  return (
    <div>
        <Header activePageIndex={5} />
        <Faq />
        <Footer />
    </div>
  )
}

const Faq = () => {
    const [activeTab, setActiveTab] = useState(1)

    const toggleTab = (tab) => {
        if (activeTab === tab) {
            setActiveTab(0)
        } else {
            setActiveTab(tab)
        }
    }

    return (
        <div className="w-11/12 mx-auto mt-12 mb-5 h-screen overflow-y-scroll hide-scrollbar">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 ml-1">
                Frequently Asked Questions
            </h2>
            <div className="mx-auto space-y-2 ml-1">
                <div className="border-b border-slate-900 py-5">
                    <button
                        onClick={() => toggleTab(1)}
                        className="flex items-center justify-between w-full"
                    >
                        <span className="text-lg font-medium text-slate-900">
                            How can I track my order?
                        </span>

                        { activeTab === 1 ? 
                            <IoIosArrowUp size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                            :
                            <IoIosArrowDown size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                        }
                    </button>

                    { activeTab === 1 && (
                        <div className="mt-4">
                            <p className="w-[99%] text-base text-slate-800">
                                You can track your order by clicking the tracking link in your
                                shipping confirmation email, or by logging into your account on
                                our website and viewing the order details.
                            </p>
                        </div>
                    )}

                </div>
                <div className="border-b border-slate-800 py-5">
                    <button
                        onClick={() => toggleTab(2)}
                        className="flex items-center justify-between w-full"
                    >
                        <span className="text-lg font-medium text-slate-900">
                            What is the return policy?
                        </span>

                        { activeTab === 2 ? 
                            <IoIosArrowUp size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                            :
                            <IoIosArrowDown size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                        }
                    </button>

                    { activeTab === 2 && (
                        <div className="mt-4">
                            <p className="w-[99%] text-base text-slate-900">
                                If you're not satisfied with your purchase, we accept returns
                                within 30 days of delivery. To initiate a return, please email
                                us at support@myecommercestore.com with your order number and a
                                brief explanation of why you're returning the item.
                            </p>
                        </div>
                    )}

                </div>
                <div className="border-b border-slate-800 py-5">
                    <button
                        onClick={() => toggleTab(3)}
                        className="flex items-center justify-between w-full"
                    >
                        <span className="text-lg font-medium text-slate-900">
                            Which payment methods are available?
                        </span>

                        { activeTab === 3 ? 
                            <IoIosArrowUp size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                            :
                            <IoIosArrowDown size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                        }
                    </button>

                    { activeTab === 3 && (
                        <div className="mt-4">
                            <p className="w-[99%] text-base text-slate-900">
                                We accept visa, mastercard, and paypal.
                            </p>
                        </div>
                    )}

                </div>
                <div className="border-b border-slate-800 py-5">
                    <button
                        onClick={() => toggleTab(4)}
                        className="flex items-center justify-between w-full"
                    >
                        <span className="text-lg font-medium text-slate-900">
                            How can I change or cancel my order?
                        </span>

                        { activeTab === 4 ? 
                            <IoIosArrowUp size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                            :
                            <IoIosArrowDown size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                        }
                    </button>

                    { activeTab === 4 && (
                        <div className="mt-4">
                            <p className="w-[99%] text-base text-slate-900">
                                You can cancel your order whithin 24 hours for a full refund. 
                                After that it will not be available for cancellation.
                                If you no longer want the items you've ordered, 
                                you can return it for a refund within 30 days.
                            </p>
                        </div>
                    )}

                </div>
                <div className="border-b border-slate-800 py-5">
                    <button
                        onClick={() => toggleTab(5)}
                        className="flex items-center justify-between w-full"
                    >
                        <span className="text-lg font-medium text-slate-900">
                            How do I contact customer support?
                        </span>

                        { activeTab === 5 ? 
                            <IoIosArrowUp size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                            :
                            <IoIosArrowDown size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                        }
                    </button>

                    { activeTab === 5 && (
                        <div className="mt-4">
                            <p className="w-[99%] text-base text-slate-900">
                                You can contact our customer support team by emailing us at
                                support@myecommercestore.com, or by calling us at (555) 123-4567
                                between the hours of 9am and 5pm EST, Monday through Friday.
                            </p>
                        </div>
                    )}

                </div>
                <div className="border-b border-slate-800 py-5">
                    <button
                        onClick={() => toggleTab(6)}
                        className="flex items-center justify-between w-full"
                    >
                        <span className="text-lg font-medium text-slate-900">
                            How do I track my order?
                        </span>

                        { activeTab === 6 ? 
                            <IoIosArrowUp size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                            :
                            <IoIosArrowDown size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                        }
                    </button>

                    { activeTab === 6 && (
                        <div className="mt-4">
                            <p className="w-[99%] text-base text-slate-900">
                                You can track your order by clicking the tracking link in your
                                shipping confirmation email, or by logging into your account on
                                our website and viewing the order details.
                            </p>
                        </div>
                    )}

                </div>
                <div className="border-b border-slate-800 py-5">
                    <button
                        onClick={() => toggleTab(7)}
                        className="flex items-center justify-between w-full"
                    >
                        <span className="text-lg font-medium text-slate-900">
                            Is there international shipping?
                        </span>

                        { activeTab === 7 ? 
                            <IoIosArrowUp size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                            :
                            <IoIosArrowDown size={20} className="h-6 w-6 text-slate-900 cursor-pointer" />
                        }
                    </button>

                    { activeTab === 7 && (
                        <div className="mt-4">
                            <p className="w-[99%] text-base text-slate-900">
                                Yes, international shipping is available for most countries.
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default FaqPage