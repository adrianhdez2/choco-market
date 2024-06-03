import { Link } from "react-router-dom"


function CardPurchases() {
    return (
        <Link to={"/user/shopping/1231J123"} className="purchases_container">
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
    )
}

export default CardPurchases