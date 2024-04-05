import { ArrowDownWideNarrow, LayoutGrid, Plus } from "lucide-react"
import { dataProducts } from "../../constans/data"
import CardProductUser from "../../components/user/products/CardProductUser"
import { Link } from "react-router-dom"
import { useState } from "react";


function ProductList() {
  const [orderBy, setOrderBy] = useState(window.localStorage.getItem('orderBy') || 'A-Z');

  const handleChangeOrder = (e) => {
    const selectedOrder = e.target.value;
    setOrderBy(selectedOrder);
    window.localStorage.setItem("orderBy", selectedOrder);
  };

  const sortedProducts = () => {
    switch (orderBy) {
      case 'A-Z':
        return dataProducts.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'recientes':
        return dataProducts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'antiguos':
        return dataProducts.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
      default:
        return dataProducts;
    }
  };

  return (
    <section className="user_page_rigth_container">
      <header className="user_page_rigth_header">
        <LayoutGrid size={30} className="user_page_icon" />
        <div className="user_page_rigth_header_container">
          <ArrowDownWideNarrow size={15} className="icon_header" />
          <select name="order" id="order" onChange={handleChangeOrder} defaultValue={orderBy}>
            <option value="A-Z">A-Z</option>
            <option value="recientes">Recientes</option>
            <option value="antiguos">Antigüos</option>
          </select>
        </div>
      </header>
      <article className="user_page_right_products">
        {
          sortedProducts().map((item) => (
            <CardProductUser key={item.id} product={item} />
          ))
        }
      </article>
      <Link to={"/user/productos/add/new"} className="user_page_right_add_product"><Plus size={30} /></Link>
    </section>
  )
}

export default ProductList