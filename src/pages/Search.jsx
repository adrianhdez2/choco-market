import { useContext, useEffect } from 'react'
import { dataProducts } from '../constans/data'
import Product from '../components/home/Product'
import { useFilters } from '../customHooks/useFilters'
import { FilterContext } from '../components/context/filters'
import Filters from '../components/search/Filters'

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
        <section id='search_page'>
            <Filters count={products.length} />
            <div id="products_search">
                <div className='products_search_right'>
                    {
                        products.length > 0 ?
                            products.map((item) => (
                                <Product key={item.id} product={item} />
                            ))
                            :
                            <h4>No hay resultados para esta búsqueda</h4>
                    }
                </div>
            </div>
        </section>
    )
}

export default Search