import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom"
import { dataProducts } from '../constans/data'
import Gallery from "../components/Gallery";
import { Star } from "lucide-react";
import UseErrorMsg from "../customHooks/UseErrorMsg";
import Error from './Error'

function Details() {
    const { id } = useParams()
    const [error, setErrorMsg] = UseErrorMsg()

    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(parseInt(searchParams.get('quantity') || 1));

    const [product, setProduct] = useState({})

    const handleIncreaseQuantity = (evt) => {
        let { target } = evt
        let { value } = target
        setQuantity(value)
        setSearchParams({ quantity: quantity.toString() })
        navigate(`/products/details/${id}?quantity=${encodeURIComponent(value)}`)
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
        let newProduct = dataProducts.find(product => product.id_unico === id)
        if (newProduct) {
            setProduct(newProduct);
        } else {
            setErrorMsg('Este producto ya no se encuentra disponible')
        }
    }, [id, navigate, setErrorMsg]);

    const addToCard = (evt) => {
        evt.preventDefault();
        console.log(quantity);
    }

    const img = [
        "profile.jpg", "profile.jpg",
    ]

    if (error) {
        return <Error error={error} />
    }

    return (
        <section id="details">
            <div className="details_movile">
                <div className="container_details_movile">
                    <div className="details_container_stars">
                        <Star size={13} className="star_icon" />
                        <span className="star_title">{product.stars}</span>
                    </div>
                    <h3 className="details_title">
                        {product.name}
                    </h3>
                </div>
            </div>
            <aside className="details_gallery">
                <div className="gallery_box">
                    <Gallery images={img} />
                </div>
            </aside>
            <aside className="details_info_box">
                <form className="info_box" onSubmit={addToCard}>
                    <span className="details_container_stars no_movile">
                        <Star size={13} className="star_icon" />
                        <span className="star_title">{product.stars}</span>
                    </span>
                    <h3 className="details_title no_movile">{product.name}</h3>
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