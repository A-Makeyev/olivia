import { useEffect } from "react"
import { useSelector } from "react-redux"
import { authenticateUser } from "./redux/actions/user"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage, SignUpPage, ActivationPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FaqPage } from "./Routes.js"
import ScrollTop from "./components/utils/ScrollTop.jsx"
import Store from "./redux/store"
import "./App.css"


const App = () => {
  const { loading } = useSelector((state) => state.user)
  
  useEffect(() => {
    Store.dispatch(authenticateUser()) 
  }, []) 

  return (
    <>
      { loading ? (
        null
      ) : (
        <BrowserRouter>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/activation/:activationToken" element={<ActivationPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App