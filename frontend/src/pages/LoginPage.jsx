import { useEffect } from "react"
import Login from "../components/Login/Login"


const LoginPage = () => {
  useEffect(() => {
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
    getCookie('token')
  })

  return (
    <div>
      <Login />
    </div>
  )
}

export default LoginPage