import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "./Routes.js"
import { SignUpPage } from "./Routes.js"
import { ActivationPage } from "./Routes.js"
import "./App.css"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/activation/:activationToken" element={<ActivationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App