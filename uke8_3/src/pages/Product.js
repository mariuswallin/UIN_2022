import { useParams } from 'react-router-dom'

export default function Product() {
  const { id } = useParams()
  return <h1>Produkt {id}</h1>
}
