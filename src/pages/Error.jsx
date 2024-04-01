

function Error({ error = 'Está página no existe' }) {
  return (
    <section id="error_page">
      <h2>Error 404, {error}</h2>
    </section>
  )
}

export default Error