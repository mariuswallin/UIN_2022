import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getQuizBySlug } from "../lib/services/quiz"

export default function Quiz() {
  const [content, setContent] = useState(null)
  const {slug} = useParams()

  useEffect(() => {
    const getQuiz = async () => {
      const data = await getQuizBySlug(slug)
      setContent(data)
    }
    getQuiz()
  }, [])

  return (
    <div>
      <h1>Quiz</h1>
      {JSON.stringify(content)}
    </div>
  )
}
