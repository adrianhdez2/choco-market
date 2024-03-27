
function Login() {
  return (
    <div className="containerlogin">
      <h1>Iniciar sesión</h1>
      <form id="login-form">
        <input type="text" id="matricula" name="matricula" placeholder="Ingrese su matrícula" required />
        <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />
        <p id="forgot-password">Olvidé mi contraseña</p>
        <button type="submit">Entrar</button>
      </form>
      <p>¿No tienes cuenta? <span id="signup-link">Registrarme</span></p>
    </div>
  )
}

export default Login