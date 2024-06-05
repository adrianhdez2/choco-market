import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

function VerifyEmail() {
    const { token } = useParams()
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:3001/users/verify")
            .then(res => {
                if (res.data.status) {
                    axios.post(`http://localhost:3001/auth/email/verify/${token}`)
                        .then(res => {
                            setMessage(res.data.message)
                        })
                        .catch(err => {
                            setError(err.response ? err.response.data.error : "Ocurrió un error inesperado")
                        })
                }
            })
            .catch(error => console.log("Error verifying user:", error.response ? error.response.data : error.message));

        return setError(null), setMessage(null)

    }, [token])

    return (
        <section className="verify_email_section">
            {
                message &&
                <p className="email_message">{message}</p>
            }
            {
                error &&
                <p className="email_message">{error}</p>
            }

            <Link to={"/"} className="button_email">Ir a inicio</Link>
        </section>
    )
}

export default VerifyEmail