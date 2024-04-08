import { useFilters } from "../customHooks/useFilters"

function Filters() {

    const { filters, setFilters } = useFilters()

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))

    }

    return (
        <div>
            {
                filters.query &&
                <div>
                    <strong>Resultados para: {filters.query}</strong>
                </div>
            }
            <select onChange={handleChangeCategory} value={filters.category}>
                <option value="all">Todos</option>
                <option value="comida">Comida</option>
                <option value="bebidas">Bebidas</option>
                <option value="postres">Postres</option>
                <option value="dulceria">Dulceria</option>
                <option value="accesorios">Accesorios</option>
            </select>
        </div>
    )
}

export default Filters