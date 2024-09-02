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
        if (activationToken) {
            const activateEmail = async () => {
                await axios.post(activateUser, { activationToken })
                .then(() => {
                    setTimeout(() => {
                        navigate('/')
                    }, 5000)
                }).catch(() => {
                    setError(true)
                })
            }
            activateEmail()
        }
    }, [activationToken, navigate])

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>

            { error ? (
                <h1>Your activation token is expired!</h1>
            ) : (
                <div>
                    <Confetti
                        recycle={false}
                        tweenDuration={20000}
                        numberOfPieces={1000}
                    />
                <h1>Your account has been created!</h1>
                </div>
            )}

        </div>
    )
}

export default ActivationPage