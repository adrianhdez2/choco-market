import { useState } from "react"
import { User, KeyRound } from "lucide-react"
import { Link } from "react-router-dom"
import InputField from '../components/form/InputField'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
  const [isShow, setIsShow] = useState(false)
  const [inputType, setInputType] = useState('password')
  const [values, setValues] = useState({
    matricula: '',
    password: ''
  })

  const handleValues = (e) => {
    let { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values);
  }

  const handleShow = () => {
    setIsShow(!isShow)
    setInputType(isShow ? 'password' : 'text')
  }

  return (
    <div className="container_form_general">
      <div className="login container_form">
        <h3 className="title_form">Iniciar sesión</h3>
        <GoogleLogin
          onSuccess={credentialResponse => {
            const decoded = jwtDecode(credentialResponse?.credential);
            console.log(decoded);
          }}
        />
        <form id="login-signup-form" onSubmit={handleSubmit}>
          <InputField type={"text"} name="matricula" value={values.matricula} placeholder="Matricula" onChange={handleValues} icon={User} />

          <InputField classN="form_input_password" classInput="password" type={inputType} name="password" value={values.password} placeholder="Contraseña" onChange={handleValues} handleShow={handleShow} icon={KeyRound} isShow={isShow} login={true} />

          <div id="forgot_password">
            <a className="forgot_password_link" href="#" >Olvidé mi contraseña</a>
          </div>
          <button className="btn btn_primary" type="submit">Entrar</button>
        </form>
        <p className="form_link_question">¿No tienes cuenta?
          <Link to={"/signup"} id="form_link_account">Registrarme</Link>
        </p>
      </div>
    </div>
  )
}

export default Login