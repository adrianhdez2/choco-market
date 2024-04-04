import { Link } from 'react-router-dom'

function CardProductUser({ product }) {
    const { name, img, price, id_unico, stock } = product
    let newName = name.trim().length > 15 ? name.substring(0, 15) + "..." : name
    return (
        <Link to={`/user/productos/${id_unico}`} className="card_user_page">
            <div className="card_user_page_container_img">
                <img src={`/${img}`} alt="" className="card_user_page_img" />
            </div>
            <div className="card_user_page_container_details">
                <div className="card_user_page_details">
                    <h4 className="card_user_page_title">{newName}</h4>
                    <p className="card_user_page_price">$ {price.toFixed(2)}</p>
                </div>
                <div className="card_user_page_container_qnty_date">
                    <small className="card_user_page_quantity">{stock} pzas.</small>
                    <span className="card_user_page_date">feb - 2024</span>
                </div>
            </div>
        </Link>
    )
}

export default CardProductUser