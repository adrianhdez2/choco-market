import { useContext, useEffect } from 'react'
import { dataProducts } from '../constans/data'
import Product from '../components/home/Product'
import Filters from '../components/Filters'
import { useFilters } from '../customHooks/useFilters'
import { FilterContext } from '../components/context/filters'

function Search() {
    const { filterProducts } = useFilters()
    const { setFilters } = useContext(FilterContext);

    const products = filterProducts(dataProducts)

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('c') || 'all'
        const query = params.get('q') || ''
        setFilters({ category, query });
    }, [setFilters])

    return (
        <section id='home'>
            <Filters />
            <div id="products" style={{ margin: '50px 0' }}>
                {
                    products.length > 0 ?
                        products.map((item) => (
                            <Product key={item.id} product={item} />
                        ))
                    :
                    <div><h4>No hay resultados para esta búsqueda</h4></div>
                }
            </div>
        </section>
    )
}

export default Search