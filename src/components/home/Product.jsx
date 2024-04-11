import { Link } from "react-router-dom"
import { Star, Tag } from "lucide-react"
import { useSubstring } from "../../customHooks/useSubstring"

function Product({ product }) {
  const { name, descrip, img, stars, price, id_unico } = product

  const { text } = useSubstring(descrip, 60)

  return (
    <Link to={`/products/details/${id_unico}`} className="card_product">

      <span className="card_product_stars">
        <Star size={14} className="star_icon"/>
        {stars.toFixed(1)}
      </span>
      <div className="card_product_tag">
        <Tag size={14} className="star_icon" />
      </div>
      <img src={`/${img}`} alt="images ilustrativa del producto" className="card_product_img" />
      <div className="card_product_price_container">
        <span className="price">${price.toFixed(2)}</span>
      </div>
      <div className="card_product_details_container">
        <h4 className="card_product_title">{name}</h4>
        <p className="card_product_description">{text}</p>
      </div>
    </Link>
  )
}

export default Product