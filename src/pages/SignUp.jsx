import { User, KeyRound, Mail } from "lucide-react"
import { useState } from "react"
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

    if (values.password === values.passwordConfirm) {
      await axios.post("http://localhost:8000/api/users/register", values)
        .then(res => {
          setValues({
            names: '',
            lastnameP: '',
            lastnameM: '',
            email: '',
            password: '',
            passwordConfirm: ''
          })

          navigate('/login')
        })


    } else {
      console.error("Las contraseñas no coinciden");
    }
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
            <InputField type={"email"} name="email" value={values.email} placeholder="Correo electrónico" onChange={handleValues} icon={Mail} />
          </div>
          <div className="container_inputs_signup">
            <InputField type={"password"} name="password" value={values.password} placeholder="Contraseña" onChange={handleValues} icon={KeyRound} />
            <InputField type={"password"} name="passwordConfirm" value={values.passwordConfirm} placeholder="Confirmar contraseña" onChange={handleValues} icon={KeyRound} />
          </div>
          <Button loading={false} title={'Registrarme'} />
        </form>
        <p className="form_link_question">¿Ya tienes cuenta?
          <Link to={"/login"} id="form_link_account">Entrar</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp