import { useParams } from "react-router-dom"

function ProductDetails() {

    const { idProducto } = useParams()

    return (
        <div>Detalles del producto {idProducto}</div>
    )
}

export default ProductDetails