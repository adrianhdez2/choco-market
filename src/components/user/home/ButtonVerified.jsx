import axios from "axios"
import { useEffect, useState } from "react"


function ButtonVerified() {
    const [loading, setLoading] = useState(false)
    const [loadingPage, setLoadingPage] = useState(true)
    const [state, setState] = useState(false)
    const [verified, setVerified] = useState(false)
    const [email, setEmail] = useState(null)

    const handleValidate = (e) => {
        e.preventDefault()
        setLoading(true)

        axios.post('http://localhost:3001/auth/verifyEmail')
            .then(res => {
                setLoading(false)
                setState(res.data.status)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }

    useEffect(() => {
        axios.get('http://localhost:3001/auth/verifiedEmail')
            .then(res => {
                if (res.data.verified === 1) {
                    setVerified(true)
                    setEmail(res.data.email)
                } else {
                    setVerified(false)
                }
                setLoadingPage(false)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (state) {
            const timer = setTimeout(() => {
                setState(false)
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [state])

    return (
        <div className="security_container_bottom">
            {
                loadingPage ? 
                    <button disabled>Cargando...</button>
                :

                    <button onClick={handleValidate} disabled={verified ? true : undefined}>
                        {
                            verified ? `${email} está verificado` : 'Enviar correo electrónico para verificación'
                        }
                    </button>
            }
            {
                loading &&
                <div className="loading"></div>
            }
            {
                state &&
                <span className="security_alert">
                    Enviado, revisa tu <a rel="noreferrer noopener" target="_blank" href="https://mail.google.com/mail/u/0/">bandeja de correo</a>
                </span>
            }
        </div>
    )
}

export default ButtonVerified