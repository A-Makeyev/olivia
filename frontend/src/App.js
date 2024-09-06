import { useEffect } from "react"
import { authenticateUser } from "./redux/actions/user"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage, SignUpPage, ActivationPage, HomePage } from "./Routes.js"
// import toast, { Toaster } from "react-hot-toast"
import Store from "./redux/store"
import "./App.css"


const App = () => {
  useEffect(() => {
    Store.dispatch(authenticateUser()) 
  }) 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/activation/:activationToken" element={<ActivationPage />} />
      </Routes>
      {/* <Toaster toastOptions={{
        duration: 3000,
        style: {
          textAlign: 'center',
          fontWeight: '600'
        },
      }}
      /> */}
    </BrowserRouter>
  )
}

export default App