import { useParams } from "react-router-dom"
import Product from '../components/Product'
import { dataProducts, users } from '../constans/data'
import UseErrorMsg from '../customHooks/UseErrorMsg'
import { useEffect, useState } from "react"
import Error from './Error'

function ProductsUser() {
    const { user } = useParams()
    const [name, setName] = useState('')
    const [error, setErrorMsg] = UseErrorMsg()

    useEffect(() => {
        let userExist = users.find(usEx => usEx.name === user)

        if (userExist) {
            setName(userExist.name)
        } else {
            setErrorMsg("No se encontró al usuario")
        }

    }, [user, setErrorMsg])

    if (error) {
        return <Error error={error} />
    }

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