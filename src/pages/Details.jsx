import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom"
import Gallery from "../components/details/Gallery";
import { Star } from "lucide-react";
import { useCart } from "../customHooks/useCart";
import { useFetchData } from '../customHooks/useFetchData'

function Details() {
    const { id } = useParams()

    const [searchParams, setSearchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState({})

    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(parseInt(searchParams.get('quantity') || 1));

    const { addToCart } = useCart()

    const handleIncreaseQuantity = (evt) => {
        let { target } = evt
        let { value } = target
        setQuantity(value)
        setSearchParams({ quantity: value.toString() })
        navigate(`/products/details/${id}?quantity=${encodeURIComponent(value)}`)
    }

    const { products, loading } = useFetchData({ url: '/api/data.json' })

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
        if (quantity > 5) {
            let quanti = '5';
            setQuantity(quanti)
            setSearchParams({ quantity: '5' })
        }

        if (quantity <= 0) {
            let quanti = '1';
            setQuantity(quanti)
            setSearchParams({ quantity: '1' })
        }
    }, [id, navigate, quantity, setSearchParams])

    useEffect(() => {
        if (!loading) {
            let newProduct = products.find(product => product.id_unico === id)
            if (newProduct) {
                setProduct(newProduct);
            } else {
                navigate('/page-not-found')
            }
        }

    }, [id, loading, navigate, products]);


    const img = [
        "profile.jpg", "profile.jpg",
    ]

    const addCartitem = () => {
        setIsLoading(true)
        setTimeout(() => {
            addToCart(product, parseInt(quantity))
            setIsLoading(false)
        }, 500);
    }

    return (
        <section id="details">
            {
                product &&
                <>
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
                        <form className="info_box">
                            <span className="details_container_stars no_movile">
                                <Star size={13} className="star_icon" />
                                <span className="star_title">{product.stars}</span>
                            </span>
                            <h3 className="details_title no_movile">{product.name}</h3>
                            <p className="details_description">{product.descrip}</p>
                            <h3 className="details_price">$ {product.price}</h3>

                            <div className="details_container_quantity">
                                <span className="details_title_quantity">Cantidad: </span>
                                <select name="quantity" id="quantity" onChange={handleIncreaseQuantity} value={quantity}>
                                    <option value="1">1 pza</option>
                                    <option value="2">2 pzas</option>
                                    <option value="3">3 pzas</option>
                                    <option value="4">4 pzas</option>
                                    <option value="5">5 pzas</option>
                                </select>
                                <small>({product.stock} disponibles)</small>
                            </div>

                            <div className="details_container_buttons">
                                <button type="submit" className="details_btn_buy btn btn_primary">Comprar</button>
                                <button type="button" disabled={isLoading ? true : undefined} onClick={addCartitem} className="details_btn_cart btn btn_secondary">
                                    {
                                        isLoading ?
                                            <div className="loading"></div>
                                            :
                                            'Agregar al carrito'
                                    }
                                </button>
                            </div>
                        </form>
                    </aside>
                </>
            }
        </section>
    )
}

export default Details