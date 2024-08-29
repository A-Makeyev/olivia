import { useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai" 


const Login = () => {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false) 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1  relative">
                <input 
                  type="email"
                  name="email" 
                  autoComplete="email" 
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                  placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email} 
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input 
                  type={visible ? 'text' : 'password'}
                  name="password" 
                  autoComplete="current-password" 
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                  placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                />

                { visible ? (
                  <AiOutlineEye 
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={() => setVisible(false)}
                    size={25}
                  />
                ) : (
                  <AiOutlineEyeInvisible 
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={() => setVisible(true)}
                    size={25}
                  />
                )}

              </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    name="remember-me" 
                    id="remember-me" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember Me
                  </label>
                </div>
                <div className="text-sm">
                  <a href=".forgot-password" className="font-medium text-blue-500 hover:text-blue-600 transition">
                    Forgot Your Password?
                  </a>
                </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] py-2 px-4 flex justify-center border border-transparent 
                text-sm font-medium rounded-md text-zinc-50 bg-slate-800 hover:bg-slate-900 transition"
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-center w-full">
                <h4>Don't have an account yet?</h4>
                <Link to="/sign-up" className="ml-1 font-medium text-blue-500 hover:text-blue-600 transition">
                  Sign Up
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
 
 export default Login