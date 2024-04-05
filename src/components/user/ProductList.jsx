import { ArrowDownWideNarrow, LayoutGrid, Plus } from "lucide-react"
import { dataProducts } from "../../constans/data"
import CardProductUser from "../CardProductUser"
import { Link } from "react-router-dom"


function ProductList() {

  return (
    <section className="user_page_rigth_container">
      <header className="user_page_rigth_header">
        <LayoutGrid size={30} className="user_page_icon" />
        <div className="user_page_rigth_header_container">
          <ArrowDownWideNarrow size={15} className="icon_header" />
          <select name="order" id="order">
            <option value="">A-Z</option>
            <option value="">Recientes</option>
            <option value="">Antigüos</option>
          </select>
        </div>
      </header>
      <article className="user_page_right_products">
        {
          dataProducts.map((item) => (
            <CardProductUser key={item.id} product={item}/>
          ))
        }
      </article>
      <Link to={"/user/productos/add/new"} className="user_page_right_add_product"><Plus size={30}/></Link>
    </section>
  )
}

export default ProductList