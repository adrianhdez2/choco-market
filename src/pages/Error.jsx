import { Link } from "react-router-dom"


function Error({ error = 'Está página no existe' }) {
  return (
    <section id="error_page">
      <div className="container_error_page">
        <div>
            <span className="error_4">4</span>
            <span className="error_4">0</span>
            <span className="error_4">4</span>
        </div>
        <p className="description_error_page">{error}</p>
        <Link to={"/"} className="btn_home_error_page">Ir a inicio</Link>
      </div>
    </section>
  )
}

export default Error