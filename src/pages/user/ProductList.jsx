import { ArrowDownWideNarrow, LayoutGrid, Plus } from "lucide-react"

import CardProductUser from "../../components/user/products/CardProductUser"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useFetchData } from "../../customHooks/useFetchData";


function ProductList() {
  const [orderBy, setOrderBy] = useState(window.localStorage.getItem('orderBy') || 'A-Z');
  const { products } = useFetchData({ url: '/api/data.json' })

  const handleChangeOrder = (e) => {
    const selectedOrder = e.target.value;
    setOrderBy(selectedOrder);
    window.localStorage.setItem("orderBy", selectedOrder);
  };

  const sortedProducts = () => {
    switch (orderBy) {
      case 'A-Z':
        return products.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'recientes':
        return products.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'antiguos':
        return products.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
      default:
        return products;
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