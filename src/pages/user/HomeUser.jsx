import { User } from "lucide-react"
import { users } from '../../constans/data'
import { Link } from "react-router-dom"
import OrdersCards from '../../components/user/home/OrdersCards'

function HomeUser() {
  return (
    <section className="user_page_rigth_container">
      <header className="user_page_rigth_header">
        <User size={30} className="user_page_icon" />

      </header>
      <article className="user_page_right_products">
        {
          users.map((user) => (
            <OrdersCards key={user.id} user={user} />
          ))
        }

        <Link className="card_orders_more">
          <span className="ver">VER</span>
          <span className="mas">MÁS</span>
        </Link>
      </article>
    </section>
  )
}

export default HomeUser