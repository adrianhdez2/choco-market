import { Link } from "react-router-dom"
import { Star, Tag } from "lucide-react"
// import { useSubstring } from "../../customHooks/useSubstring"

function Product({ product }) {
  const { product_name, description, price, product_id } = product

  // const { text } = useSubstring(descrip, 60)

  return (
    <Link to={`/products/details/${product_id}`} className="card_product">

      <span className="card_product_stars">
        <Star size={14} className="star_icon" />
        2
      </span>
      <div className="card_product_tag">
        <Tag size={14} className="star_icon" />
      </div>
      <img src={'/users/default.png'} alt="images ilustrativa del producto" className="card_product_img" />
      <div className="card_product_price_container">
        <span className="price">${price}</span>
      </div>
      <div className="card_product_details_container">
        <h4 className="card_product_title">{product_name}</h4>
        <p className="card_product_description">{description}</p>
      </div>
    </Link>
  )
}

export default Product