import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom"
import { dataProducts } from '../constans/data'

function Details() {
    const { id } = useParams()

    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(parseInt(searchParams.get('cantidad') || 1));

    const [product, setProduct] = useState({})

    const handleIncreaseQuantity = (evt) => {
        let { target } = evt
        let { value } = target
        setQuantity(value)
        setSearchParams({ cantidad: quantity.toString() })
        navigate(`/product/details/${id}?cantidad=${encodeURIComponent(value)}`);
        window.location.reload()
    }

    useEffect(() => {
        const handlePopstate = () => {
            window.location.reload();
        };

        window.addEventListener("popstate", handlePopstate);

        return () => {
            window.removeEventListener("popstate", handlePopstate);
        };
    }, []);

    useEffect(() => {
        let newProduct = dataProducts.find(product => product.id === parseInt(id))
        if (newProduct) {
            setProduct(newProduct);
        } else {
            console.log("Producto no encontrado");
        }
    }, [id]);

    const addToCard = (evt) => {
        evt.preventDefault();
        console.log(quantity);
    }

    return (
        <section id="details">
            <aside className="details_gallery">
                <h1>imganenes</h1>
            </aside>
            <aside className="details_info_box">
                <form className="info_box" onSubmit={addToCard}>
                    <div className="details_container_stars">
                        <span className="star">&#9733;</span>
                        {product.stars}
                    </div>
                    <h3 className="details_title">{product.name}</h3>
                    <p className="details_description">{product.descrip}</p>
                    <h3 className="details_price">$ {product.price}</h3>

                    <div className="details_container_quantity">
                        <span className="details_title_quantity">Cantidad: </span>
                        <select name="quantity" id="quantity" onChange={handleIncreaseQuantity} defaultValue={quantity}>
                            <option value="1">1 pza</option>
                            <option value="2">2 pzas</option>
                            <option value="3">3 pzas</option>
                            <option value="4">4 pzas</option>
                            <option value="5">5 pzas</option>
                        </select>
                        <small>(10 disponibles)</small>
                    </div>

                    <div className="details_container_buttons">
                        <button type="button" className="details_btn_buy btn btn_primary">Comprar</button>
                        <button type="submit" className="details_btn_cart btn btn_secondary">Agregar al carrito</button>
                    </div>
                </form>
            </aside>
        </section>
    )
}

export default Details