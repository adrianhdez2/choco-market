import { useFilters } from "../../customHooks/useFilters"

function Filters({ count = 0 }) {

    const { filters, setFilters } = useFilters()

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))

    }

    return (
        <div className="products_search_left">
            <div className="products_search_left_container">
                {
                    filters.query &&
                    <div className="products_search_query">
                        <p>Búsqueda: <span>{filters.query}</span></p>
                    </div>
                }
                <div className="products_search_count">
                    <p>({count}) resultados encontrados</p>
                </div>
                <div className="products_search_select_container">
                    <label>Filtrar por:</label>
                    <select onChange={handleChangeCategory} value={filters.category} className="products_search_select">
                        <option value="all">Todos</option>
                        <option value="comida">Comida</option>
                        <option value="bebidas">Bebidas</option>
                        <option value="postres">Postres</option>
                        <option value="dulceria">Dulceria</option>
                        <option value="accesorios">Accesorios</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filters