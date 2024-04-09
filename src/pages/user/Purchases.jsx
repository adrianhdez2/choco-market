import { ShoppingBasket } from "lucide-react"
import CardPurchases from '../../components/user/purchases/CardPurchases'

function Purchases() {
  return (
    <section className="user_page_rigth_container">
      <header className="user_page_rigth_header">
        <ShoppingBasket size={30} className="user_page_icon" />
      </header>
      <div className="purchases user_page_rigth_header_container">
        {
          Array.from({ length: 4 }).map((item, index) => (
            <CardPurchases key={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Purchases