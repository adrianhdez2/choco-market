import { Link } from 'react-router-dom'

function OrdersCards({ user }) {
    const { img, name, order, div, edi } = user
    return (
        <Link to={`/orders/${order}`} className="card_orders">
            <div className="card_orders_top">
                <div className="card_orders_top_title">
                    <h4 className="orders_title">Tortas</h4>
                    <small className="orders_location">{edi}</small>
                </div>
                <div className="card_orders_top_quantity">
                    <p className="orders_quantity">Cantidad: <span>3 pzas.</span></p>
                </div>
            </div>
            <div className="card_orders_bottom">
                <p className="orders_division">{div}</p>
                <span>
                    <img className="orders_img_user" src={`/users/${img}`} alt="" />
                    <p className="orders_user">{name}</p>
                </span>
            </div>
        </Link>
    )
}

export default OrdersCards