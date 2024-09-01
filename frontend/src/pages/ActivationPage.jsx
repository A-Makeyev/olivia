import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { activateUser } from "../constants"
import Confetti from "react-confetti"
import axios from "axios"


const ActivationPage = () => {
    const navigate = useNavigate()
    const { activationToken } = useParams()
    const [error, setError] = useState(false)

    useEffect(() => {
        console.log(activationToken)
        if (activationToken) {
            const activateEmail = async () => {
                try {
                    const res = await axios.post(activateUser, { activationToken })
                    console.log(res.data.message)
                    setTimeout(() => {
                        navigate('/')
                    }, 5000)
                } catch (err) {
                    setError(true)
                    console.log(err.response.data.message)
                }
            }
            activateEmail()
        }
    })

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>

        { error ? (
            <h1>Your Activation Token is Expired</h1>
        ) : (
            <div>
                <Confetti
                    recycle={false}
                    tweenDuration={20000}
                    numberOfPieces={1000}
                />
            <h1>Account Created</h1>
            </div>
        )}

        </div>
    )
}

export default ActivationPage