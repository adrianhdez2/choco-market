import { User, KeyRound, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import InputField from "../components/form/InputField"
import Button from "../components/form/Button"
import axios from "axios"

function SignUp() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    names: '',
    lastnameP: '',
    lastnameM: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleValues = (e) => {
    let { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const res = await axios.post("http://localhost:8000/api/users/register", values)
      if (res.status == 200) {
        setValues({
          names: '',
          lastnameP: '',
          lastnameM: '',
          email: '',
          password: '',
          passwordConfirm: ''
        })

        navigate('/login')
      }
    } catch (err) {
      setError(err.response?.data?.error || "Error de inicio de sesión");
      setLoading(false);
    }
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

  return (
    <div className="container_form_general">
      <div className="signup container_form">
        <h3 className="title_form">Registro</h3>
        <form id="login-signup-form" onSubmit={handleSubmit}>
          {
            error &&
            <div className="error_dialog">
              <small className="error_dialog_text">{error}</small>
            </div>
          }
          <div className="container_inputs_signup">
            <InputField type={"text"} name="names" value={values.names} placeholder="Nombre(s)" onChange={handleValues} icon={User} />
            <InputField type={"text"} name="lastnameP" value={values.lastnameP} placeholder="Apellidos paternos" onChange={handleValues} icon={User} />
          </div>
          <div className="container_inputs_signup">
            <InputField type={"text"} name="lastnameM" value={values.lastnameM} placeholder="Apellidos maternos" onChange={handleValues} icon={User} />
            <InputField type={"email"} name="email" value={values.email} placeholder="Correo electrónico" onChange={handleValues} icon={Mail} />
          </div>
          <div className="container_inputs_signup">
            <InputField type={"password"} name="password" value={values.password} placeholder="Contraseña" onChange={handleValues} icon={KeyRound} />
            <InputField type={"password"} name="passwordConfirm" value={values.passwordConfirm} placeholder="Confirmar contraseña" onChange={handleValues} icon={KeyRound} />
          </div>
          <Button loading={loading} title={'Registrarme'} />
        </form>
        <p className="form_link_question">¿Ya tienes cuenta?
          <Link to={"/login"} id="form_link_account">Entrar</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp