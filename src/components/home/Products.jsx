import Product from './Product'
import { useFetchData } from "../../customHooks/useFetchData"

function Products() {

  const { products, error, loading } = useFetchData({ url: '/api/data.json' })

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Oops! Parece que ocurrió un eror :c</div>;
  }

  return (
    <section id="products">
      {
        products.length > 0 ?
          products.map((item) => (
            <Product key={item.id} product={item} />
          ))
          :
          <p>No hay productos disponibles por el momento</p>
      }
    </section>
  )
}

export default Products