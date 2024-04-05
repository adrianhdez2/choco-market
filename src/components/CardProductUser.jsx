import { Link } from 'react-router-dom'
import { useDate } from '../customHooks/useDate'

function CardProductUser({ product }) {
    const { name, img, price, id_unico, stock, date } = product
    let newName = name.trim().length > 15 ? name.substring(0, 15) + "..." : name

    const {month, year, day} = useDate(date)

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
                    <span className="card_user_page_date">{day}-{month}-{year}</span>
                </div>
            </div>
        </Link>
    )
}

export default CardProductUser