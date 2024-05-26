import { useEffect, useState } from 'react'
import InputField from '../components/form/InputField'
import { Check, KeyRound } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function ResetPassword() {
    const [loading, setLoading] = useState(false)
    const [estate, setEstate] = useState(false)
    const [error, setError] = useState(false)
    const [values, setValues] = useState({
        password: '',
        passwordConfirm: ''
    })
    const navigate = useNavigate()

    const { token } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)
        axios.post(`http://localhost:8000/api/users/reset-password/${token}`, values)
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
                setValues({ password: '', passwordConfirm: '' })
                setEstate(false)
                navigate('/login')
            }, [1000])

            return () => clearTimeout(time);
        }

    }, [estate])

    return (
        <div className="container_form_general">
            <div className="container_form_password">
                <h3 className="title_form">Nueva contraseña</h3>
                <form id="login-signup-form" onSubmit={handleSubmit}>
                    {
                        error &&
                        <div className="error_dialog">
                            <small className="error_dialog_text">{error}</small>
                        </div>
                    }
                    <InputField
                        type={"password"}
                        name="password"
                        value={values.password}
                        placeholder="Nueva contraseña"
                        onChange={handleValues}
                        onlyPass={estate}
                        icon={KeyRound} />
                    <InputField
                        type={"password"}
                        name="passwordConfirm"
                        value={values.passwordConfirm}
                        placeholder="Repite la contraseña"
                        onChange={handleValues}                        
                        onlyPass={estate}
                        icon={KeyRound} />


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
                                    'Actualizar contraseña'
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword