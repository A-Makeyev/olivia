import { Link } from "react-router-dom"


const Hero = () => {
  return (
    <div 
        style={{ background: "linear-gradient(170deg, #F9FCFF, #99A9FF)" }}
        className="flex items-center relative min-h-[70vh] 800px:min-h-[90vh] w-full bg-no-repeat"
    >
        <div className="w-11/12 mx-auto 800px:w-[60%] min-h-[60vh]">
            <h1 className="text-[35px] leading-[1.2] 800px:text-[60px] text-slate-800 font-[600] capitalize">
                home decoration <br /> collection
            </h1>
            <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-slate-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam alias delectus nostrum, 
                architecto necessitatibus at, sequi incidunt quasi ipsam repudiandae eligendi. 
                Magni architecto minus laboriosam repellendus atque harum delectus!
            </p>
            <Link to="/products" className="inline-block mt-5">
                <div className="w-[150px] h-[50px] my-3 flex items-center justify-center bg-slate-900 hover:bg-slate-800 transition rounded-xl cursor-pointer">
                    <span className="text-zinc-50  font-[Poppins] text-[18px]">
                        Shop Now
                    </span>
                </div>
            </Link>
        </div>   
    </div>
  )
}

export default Hero