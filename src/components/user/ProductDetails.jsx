import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { dataProducts } from "../../constans/data";

function ProductDetails() {
    const navigate = useNavigate()
    const { idProducto } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        let newProduct = dataProducts.find(product => product.id_unico === idProducto)
        if (newProduct) {
            setProduct(newProduct);
        } else {
            navigate('/user/productos')
        }
    }, [idProducto, navigate]);

    return (
        <div>Detalles del producto {product.name}</div>
    )
}

export default ProductDetails