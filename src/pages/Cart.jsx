import { Link } from "react-router-dom";
import ItemCart from "../components/cart/ItemCart"
import { useCart } from "../customHooks/useCart"


function Cart() {

    const { cart, addToCart, removeFromCart, removeItemFromCart } = useCart()

    return (
        <section id="cart">
            <h3 className="title_cart">Carrito de compras</h3>
            {
                cart.length > 0 ?
                    <div className="cart_container">
                        <aside className="cart_left_container">
                            {
                                cart.map((product) => (
                                    <ItemCart
                                        key={product.id}
                                        addToCart={() => addToCart(product)}
                                        removeFromCart={() => removeFromCart(product)}
                                        removeItemFromCart={() => removeItemFromCart(product)}
                                        {...product}
                                    />
                                ))
                            }
                        </aside>
                        <aside className="cart_right_container">
                            <div className="cart_box_container">
                                <div className="cart_box_item cart_title_box">
                                    <h4>Datos de la compra</h4>
                                </div>
                                <div className="cart_box_item">
                                    <p className="cart_box_subtotal">Productos</p>
                                    <p className="cart_box_subtotal">$ 300.00</p>
                                </div>
                                <hr className="cart_box_hr" color="transparent" />
                                <div className="cart_box_item">
                                    <p className="cart_box_total">Total</p>
                                    <p className="cart_box_total">$ 300.00</p>
                                </div>
                                <button className="btn btn_primary">Comprar</button>
                            </div>
                        </aside>
                    </div>
                    :
                    <div className="cart_empty">
                        <p>Aún no has agregado productos al carrito</p>
                        <Link to={"/"} className="btn_home_error_page">Descubir productos</Link>
                    </div>
            }
        </section>
    )
}

export default Cart