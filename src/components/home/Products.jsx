import Product from './Product'
import { dataProducts } from '../../constans/data'



function Products() {
  return (
    <section id="products">
      {
        dataProducts.map((item) => (
          <Product key={item.id} product={item} />
        ))
      }
    </section>
  )
}

export default Products