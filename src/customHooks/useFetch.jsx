import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = ({ url }) => {
    const [data, setData] = useState(null)  // Inicializar como null para manejar mejor el estado de carga
    const [loading, setLoading] = useState(true)  // Inicializar como true porque la solicitud comienza inmediatamente
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (error) {
                setError(error.response?.data?.error || "Ocurrió un error")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { data, loading, error }
}
