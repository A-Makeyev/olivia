import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import SignUp from "../components/SignUp/SignUp"


const SignUpPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  })

  return (
    <div>
        <SignUp />
    </div>
  )
}

export default SignUpPage