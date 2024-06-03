import { Check, KeyRound, LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Security() {
    const [values, setValues] = useState({
        password: '',
        passwordConfirm: ''
    })
    const [loading, setLoading] = useState(false)
    const [estate, setEstate] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()


        axios.get('http://localhost:3001/auth/validate')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
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
        if (estate) {
            const time = setTimeout(() => {
                setEstate(false)
            }, [1000])

            return () => clearTimeout(time);
        }

    }, [estate])

    return (
        <div className="user_page_rigth_container">
            <header className="user_page_rigth_header">
                <LockKeyhole size={30} className="user_page_icon" />
            </header>
            <div className="security_container">
                <form onSubmit={handleSubmit} className="security_container_top">
                    <label className="form_input">
                        <span className="form_input_icon">
                            <KeyRound size={20} className="form_icon" />
                        </span>
                        <input className="input" type="password" name="password" id="password" placeholder="Contraseña" autoComplete="off" aria-autocomplete="off" value={values.password} onChange={handleValues} required minLength={8} disabled={loading || undefined} />
                    </label>
                    <label className="form_input">
                        <span className="form_input_icon">
                            <KeyRound size={20} className="form_icon" />
                        </span>
                        <input className="input" type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmar contraseña" autoComplete="off" aria-autocomplete="off" value={values.passwordConfirm} onChange={handleValues} required disabled={loading || undefined} />
                    </label>
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
                                    'Guardar Cambios'
                        }
                    </button>
                </form>
                <small className="note_security">Solo llene los campos si desea cambiar su contraseña</small>
            </div>
        </div>
    )
}
