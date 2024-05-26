import { useEffect, useState } from "react"
import { Mail, KeyRound } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import InputField from '../components/form/InputField'
import Button from "../components/form/Button"
import axios from "axios"
function Login() {
  const [isShow, setIsShow] = useState(false)
  const [inputType, setInputType] = useState('password')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleValues = (e) => {
    let { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }

  axios.defaults.withCredentials = true

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post("http://localhost:8000/api/users/login", values)
      .then(res => {
        if (res.status == 200) {
          navigate('/user')
          setLoading(false)
        }
      })
      .catch(err => {
        setError(err.response?.data?.error || "Error de inicio de sesión")
        setLoading(false)
      })
  }

  const handleShow = () => {
    setIsShow(!isShow)
    setInputType(isShow ? 'password' : 'text')
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
      <div className="login container_form">
        <h3 className="title_form">Iniciar sesión</h3>
        <form id="login-signup-form" onSubmit={handleSubmit}>
          {
            error &&
            <div className="error_dialog">
              <small className="error_dialog_text">{error}</small>
            </div>
          }
          <InputField type={"email"} name="email" value={values.email} placeholder="Correo electrónico" onChange={handleValues} icon={Mail} />

          <InputField classN="form_input_password" classInput="password" type={inputType} name="password" value={values.password} placeholder="Contraseña" onChange={handleValues} handleShow={handleShow} icon={KeyRound} isShow={isShow} login={true} />

          <div id="forgot_password">
            <Link className="forgot_password_link" to={"/forgotPassword"} >Olvidé mi contraseña</Link>
          </div>


          <Button loading={loading} title={'Entrar'} />
        </form>
        <p className="form_link_question">¿No tienes cuenta?
          <Link to={"/signup"} id="form_link_account">Registrarme</Link>
        </p>
      </div>
    </div>
  )
}

export default Login