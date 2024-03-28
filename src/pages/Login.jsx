import { useState } from "react"
import ShowPassword from "../components/ShowPassword"


function Login() {
  const [isShow, setIsShow] = useState(false)
  const [inputType, setInputType] = useState('password')
  const [values, setValues] = useState({
    matricula: '',
    password: ''
  })

  const handleValues = (e) => {
    let { target } = e
    const {name, value} = target

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
    <div className="container_login">
      <div className="login">
        <h3 className="title">Iniciar sesión</h3>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="form_input_user form_input">
            <span className="form_input_icon">O</span>
            <input
              className="input"
              type="text"
              id="matricula"
              name="matricula"
              placeholder="Ingrese su matrícula"
              autoComplete="off"
              value={values.matricula}
              onChange={handleValues}
              required />
          </div>

          <div className="form_input_password form_input">
            <span className="form_input_icon">O</span>
            <input
              className="input password"
              type={inputType}
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              autoComplete="off"
              value={values.password}
              onChange={handleValues}
              required />
            <span className="form_input_icon show_pass" onClick={handleShow}>
              <ShowPassword isShow={isShow} />
            </span>
          </div>

          <div id="forgot_password">
            <a href="#" >Olvidé mi contraseña</a>
          </div>
          <button className="btn btn_primary" type="submit">Entrar</button>
        </form>
        <p className="not_account">¿No tienes cuenta?
          <a href="#" id="signup_link">Registrarme</a>
        </p>
      </div>
    </div>
  )
}

export default Login