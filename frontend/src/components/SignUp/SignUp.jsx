import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { PiUserCircleDuotone } from "react-icons/pi"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai" 
import { createUser } from "../../constants"
import axios from 'axios'


const SignUp = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false) 
    const [avatar, setAvatar] = useState(null)

    const handleImageUpload = (e) => {
      const file = e.target.files[0]
      setAvatar(file)
    }

    const handleSignUp = async (e) => {
      e.preventDefault()

      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }

      const newForm = new FormData()

      newForm.append('name', name)
      newForm.append('email', email)
      newForm.append('password', password)
      newForm.append('file', avatar)

      await axios.post(createUser, newForm, config)
      .then((res) => {
        if (res.data.success) {
          setName('')
          setEmail('')
          setPassword('')
          setAvatar(null)
          //navigate('/')
        }
      }).catch((err) => {
        console.log(err)
      })
    }

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Create your new account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-lg rounded-lg">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSignUp} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <div className="mt-1  relative">
                  <input 
                    type="text"
                    name="name" 
                    autoComplete="name" 
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                  />
                </div>
              </div>
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
              <div>
                  <label 
                    htmlFor="avatar" 
                    className="block text-sm font-medium text-gray-700">
                  </label>
                  <div className="mt-2 ml-1 flex items-center">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden">

                        { avatar ? (
                            <img src={URL.createObjectURL(avatar)} alt="avatar" className="h-full w-full object-cover rounded-full" />
                        ) : (
                            <PiUserCircleDuotone className="h-12 w-12" />
                        )}

                    </span>
                    <label 
                        htmlFor="file-input" 
                        className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 cursor-pointer
                        rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition">
                            <span>Profile Image</span>
                            <input 
                                type="file" 
                                accept=".jpg, .jpeg, .png" 
                                name="avatar" 
                                id="file-input" 
                                className="sr-only"
                                onChange={handleImageUpload}
                            />
                    </label>
                    <span className="ml-4 text-sm text-gray-700">
                        (optional)
                    </span>
                  </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full h-[40px] py-2 px-4 flex justify-center border border-transparent 
                  text-sm font-medium rounded-md text-zinc-50 bg-slate-800 hover:bg-slate-900 transition"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex items-center justify-center w-full">
                  <h4>Have an account already?</h4>
                  <Link to="/login" className="ml-1 font-medium text-blue-500 hover:text-blue-600 transition">
                    Login
                  </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default SignUp