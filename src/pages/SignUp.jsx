import { User, KeyRound, Phone } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import InputField from "../components/form/InputField"

function SignUp() {
  const [values, setValues] = useState({
    names: '',
    lastnameP: '',
    lastnameM: '',
    phone: '',
    password: '',
    passwordConfirm: ''
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

  return (
    <div className="container_form_general">
      <div className="signup container_form">
        <h3 className="title_form">Registro</h3>
        <form id="login-signup-form" onSubmit={handleSubmit}>
          <div className="container_inputs_signup">
            <InputField type={"text"} name="names" value={values.names} placeholder="Nombre(s)" onChange={handleValues} icon={User} />
            <InputField type={"text"} name="lastnameP" value={values.lastnameP} placeholder="Apellidos paternos" onChange={handleValues} icon={User} />
          </div>
          <div className="container_inputs_signup">
            <InputField type={"text"} name="lastnameM" value={values.lastnameM} placeholder="Apellidos maternos" onChange={handleValues} icon={User} />
            <InputField type={"tel"} name="phone" value={values.phone} placeholder="Teléfono" onChange={handleValues} icon={Phone} />
          </div>
          <div className="container_inputs_signup">
            <InputField type={"password"} name="password" value={values.password} placeholder="Contraseña" onChange={handleValues} icon={KeyRound} />
            <InputField type={"password"} name="passwordConfirm" value={values.passwordConfirm} placeholder="Confirmar contraseña" onChange={handleValues} icon={KeyRound} />
          </div>
          <button className="btn btn_primary" type="submit">Registrarme</button>
        </form>
        <p className="form_link_question">¿Ya tienes cuenta?
          <Link to={"/login"} id="form_link_account">Entrar</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp