import { useContext, useEffect } from 'react'
import Product from '../components/home/Product'
import { useFilters } from '../customHooks/useFilters'
import { FilterContext } from '../components/context/filters'
import Filters from '../components/search/Filters'
import { useFetchData } from '../customHooks/useFetchData'

function Search() {
    const { filterProducts } = useFilters()
    const { setFilters } = useContext(FilterContext);
    const { products, loading } = useFetchData({ url: '/api/data.json' })

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('c') || 'all'
        const query = params.get('q') || ''
        setFilters({ category, query });
    }, [setFilters])

    return (
        <section id='search_page'>
            <Filters count={loading ? 0 : filterProducts(products).length} />
            <div id="products_search">
                <div className='products_search_right'>
                    {
                        loading ? (
                            <p className='not-results'>Cargando...</p>
                        ) : (
                            filterProducts(products).length > 0 ?
                                filterProducts(products).map((item) => (
                                    <Product key={item.id} product={item} />
                                ))
                                :
                                <h4 className='not-results'>No hay resultados para esta búsqueda</h4>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Search