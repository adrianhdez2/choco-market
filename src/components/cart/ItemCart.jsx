import { Minus, Plus } from 'lucide-react'

function ItemCart({name, img, price, addToCart, quantity, removeFromCart, removeItemFromCart, stock }) {

    return (
        <div className="cart_item">
            <h6 className="cart_item_title">{name}</h6>
            <div className="cart_item_container">
                <div className="cart_item_img">
                    <img src={`/${img}`} alt="" />
                </div>
                <div className="cart_item_counter">
                    <div className="counter">
                        <button onClick={removeItemFromCart}><Minus size={15} className="icon_cart_counter" /></button>
                        <span>{quantity}</span>
                        <button onClick={addToCart}><Plus size={15} className="icon_cart_counter" /></button>
                    </div>
                    <small>{stock} disp.</small>
                </div>
                <div className="cart_item_price">
                    <h4>$ {price}</h4>
                </div>
            </div>
            <div className="cart_item_details">
                <button className="cart_item_delte_btn" onClick={removeFromCart}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart