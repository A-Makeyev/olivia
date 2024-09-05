import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authenticateUser } from "./redux/actions/user"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "./Routes.js"
import { SignUpPage } from "./Routes.js"
import { ActivationPage } from "./Routes.js"
import toast, { Toaster } from "react-hot-toast"
import "./App.css"


const App = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, user, loading, error } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(authenticateUser()) 
  }, [dispatch]) 

  useEffect(() => {
    if (!loading && isAuthenticated) {
      toast(`Welcome back ${user.name}`, {
        className: 'bg-green-500 text-zinc-50'
      })
    }
  }, [isAuthenticated, user, loading, error]) 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/activation/:activationToken" element={<ActivationPage />} />
      </Routes>
      <Toaster toastOptions={{
        duration: 3000,
        style: {
          textAlign: 'center',
          fontWeight: '600'
        },
      }}
      />
    </BrowserRouter>
  )
}

export default App