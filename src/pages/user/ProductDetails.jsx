import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useFetchData } from '../../customHooks/useFetchData'

function ProductDetails() {
    const { products, loading } = useFetchData({ url: '/api/data.json' })
    const navigate = useNavigate()
    const { idProducto } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        if (!loading) {
            let newProduct = products.find(product => product.id_unico === idProducto)
            if (newProduct) {
                setProduct(newProduct);
            } else {
                navigate('/user/products')
            }
        }
    }, [idProducto, loading, navigate, products]);

    return (
        <div>Detalles del producto {product.name}</div>
    )
}

export default ProductDetails