import { useEffect, useState } from 'react'
import InputField from '../components/form/InputField'
import { Mail, Check } from 'lucide-react'
import axios from 'axios'

function ForgotPassword() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [estate, setEstate] = useState(false)
    const [values, setValues] = useState({
        email: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post("http://localhost:8000/api/users/forgot-password", values)
            .then(res => {
                setEstate(res.data.status);
                setLoading(false)
            })
            .catch(err => {
                setError(err.response?.data?.error || "Error de inicio de sesión")
                setLoading(false)
                setEstate(false)
            })
    }

    const handleValues = (e) => {
        let { target } = e
        const { name, value } = target

        const newValues = {
            ...values,
            [name]: value,
        };

        setValues(newValues);
    }

    useEffect(() => {
        if (error) {
            setError(error);
            const timer = setTimeout(() => {
                setError('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    useEffect(() => {
        if (estate) {
            const time = setTimeout(() => {
                setValues({email: ''})
                setEstate(false)
            }, [3000])

            return () => clearTimeout(time);
        }
        
    }, [estate])

    return (
        <div className="container_form_general">
            <div className="container_form_password">
                <h3 className="title_form">Recuperar contraseña</h3>
                <form id="login-signup-form" onSubmit={handleSubmit}>
                    {
                        error &&
                        <div className="error_dialog">
                            <small className="error_dialog_text">{error}</small>
                        </div>
                    }
                    <InputField
                        type={"email"}
                        name="email"
                        value={values.email}
                        placeholder="Correo electrónico"
                        onChange={handleValues}
                        onlyPass={estate}
                        icon={Mail} />


                    <button
                        className="btn btn_primary"
                        type="submit"
                        disabled={loading || estate ? true : undefined}
                    >
                        {

                            loading ?
                                <div className="loading"></div>
                                :
                                estate ?
                                    <Check />
                                    :
                                    'Enviar'
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword