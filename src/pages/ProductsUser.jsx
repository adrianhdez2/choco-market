import { useNavigate, useParams } from "react-router-dom"
import Product from '../components/home/Product'
import { dataProducts, users } from '../constans/data'
import { useEffect, useState } from "react"
function ProductsUser() {
    const { user } = useParams()
    const [name, setName] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        let userExist = users.find(usEx => usEx.name === user)

        if (userExist) {
            setName(userExist.name)
        } else {
            navigate('/page-not-found')
        }

    }, [user, navigate])

    return (
        <section id="products_user">
            ProductsUser de {name}
            <div id="products">
                {
                    dataProducts.map((item) => (
                        <Product key={item.id} product={item} />
                    ))
                }
            </div>
        </section>

    )
}

export default ProductsUser