import { useParams } from "react-router-dom"

const DetailsPurch = () => {
  const { id } = useParams()

  return (
    <div>Detalles de compras No. {id}</div>
  )
}

export default DetailsPurch