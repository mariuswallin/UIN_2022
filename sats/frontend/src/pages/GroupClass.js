import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Lead from '../components/Lead'
import Title from '../components/Title'
import { Container } from '../styles/Styles'
import { getPage } from '../utils/pageService'

export default function GroupClass() {
  const { slug } = useParams()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getPageData = async () => {
      setLoading(true)
      try {
        const page = await getPage(slug)
        setData(page)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getPageData()
  }, [slug])

  if (loading) return <p>Loading ...</p>
  if (!data && error) return <p>{error?.message}</p>
  return (
    <Container>
      <Title title={data?.title} />
      <Lead lead={data?.lead} />
    </Container>
  )
}
