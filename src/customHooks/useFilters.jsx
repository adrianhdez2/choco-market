import { useContext } from "react"
import { FilterContext } from "../components/context/filters"

export function useFilters() {
    const { filters, setFilters } = useContext(FilterContext)

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                    product.name.toLowerCase().includes(filters.query) && (
                    filters.category === 'all' ||
                    product.category === filters.category

                ))
        })
    }

    return { filters, filterProducts, setFilters }
}