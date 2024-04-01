import { Link } from "react-router-dom"
import { Star } from "lucide-react"

function Product({ product }) {
  const { name, descrip, img, stars, price, id_unico } = product
  let newDescrip = descrip.trim().length > 70 ? descrip.substring(0, 70) + "..." : descrip

  return (
    <Link to={`/product/details/${id_unico}`} className="card_product">
      <div className="card_product_img_container">
        <img className="card_product_img" src={`/${img}`} alt="" />
        <span className="card_product_stars">
          <Star size={13} className="star_icon"/>
          <span className="star_title">{stars}</span>
        </span>
      </div>
      <div className="card_product_details_container">
        <h4 className="card_product_title">{name}</h4>
        <p className="card_product_description">{newDescrip}</p>
      </div>
      <div className="card_product_price_container">
        <span className="card_product_price">$ {price}</span>
      </div>
    </Link>
  )
}

export default Product