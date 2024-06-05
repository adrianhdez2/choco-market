import Product from './Product'
// import { useFetchData } from "../../customHooks/useFetchData"
import { useEffect, useState } from 'react'
import axios from 'axios'

function Products() {
  const [products, setProducts] = useState({})

  // const { products, error, loading } = useFetchData({ url: '/api/data.json' })

  // if (loading) {
  //   return <div>Cargando...</div>;
  // }

  // if (error) {
  //   return <div>Oops! Parece que ocurrió un eror :c</div>;
  // }

  useEffect(() => {
    axios.get('http://localhost:3001/products/')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])



  return (
    <section id="products">
      {
        products.length > 0 ?
          products.map((item) => (
            <Product key={item.product_id} product={item} />
          ))
          :
          <p>No hay productos disponibles por el momento</p>
      }

    </section>
  )
}

export default Products