import { Link } from "react-router-dom"


function Product({product}) {
  const {id, name, descrip, img, stars, price} = product
  let newDescrip = descrip.trim().length > 70 ? descrip.substring(0, 70) + "..." : descrip

  return (
    <Link to={`/product/details/${id}`} className="card_product">
      <div className="card_product_img_container">
        <img className="card_product_img" src={`/${img}`} alt="" />
        <span className="card_product_stars">
          <span className="star">&#9733;</span>
          {stars}
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