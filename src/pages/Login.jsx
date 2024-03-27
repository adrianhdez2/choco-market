
function Login() {
  return (
    <div className="container_login">
      <div className="login">
        <h3 className="title">Iniciar sesión</h3>
        <form id="login-form">
          <div className="form_input_user form_input">
            <span className="form_input_icon">O</span>
            <input className="input" type="text" id="matricula" name="matricula" placeholder="Ingrese su matrícula" required />
          </div>
          <div className="form_input_password form_input">
            <span className="form_input_icon">O</span>
            <input className="input password" type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />
            <span className="form_input_icon show_pass">O</span>
          </div>
          <a href="#" id="forgot_password">Olvidé mi contraseña</a>
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