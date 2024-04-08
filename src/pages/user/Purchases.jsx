import { ShoppingBasket } from "lucide-react"
import { Link } from "react-router-dom"

function Purchases() {
  return (
    <section className="user_page_rigth_container">
      <header className="user_page_rigth_header">
        <ShoppingBasket size={30} className="user_page_icon" />
      </header>
      <div className="purchases user_page_rigth_header_container">
        {
          Array.from({ length: 4 }).map((item, index) => (
            <Link to={""} className="purchases_container" key={index}>
              <div className="purchases_container_img">
                <img src="/profile.jpg" alt="" />
              </div>
              <div className="purchases_container_details">
                <h4>Mouse</h4>
                <small>feb-2024</small>
                <small>1 pza.</small>
              </div>
              <div className="purchases_container_total">
                <small>$ 50.00</small>
                <small>Total: $ 50.00</small>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default Purchases