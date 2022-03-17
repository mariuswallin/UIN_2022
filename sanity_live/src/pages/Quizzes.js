import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getQuizByCategory, getQuizzes } from '../lib/services/quiz'

const categories = ['Sanity', 'React']

export default function Quizzes() {
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState([])

  useEffect(() => {
    const listQuizzes = async () => {
      setLoading(true)
      const data = await getQuizzes()

      setContent(data)
      setLoading(false)
    }
    listQuizzes()
  }, [])

  const handleFilter = async (event) => {
    const category = event.target.value.toLowerCase()
    let data
    if (category === 'alle') {
      data = await getQuizzes()
    } else {
      data = await getQuizByCategory(category)
    }
    setContent(data)
  }

  if (loading) {
    return <p className="mt-4 text-white">Henter quizzer ...</p>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Velkommen til HIOF Quiz</h1>
      <label
        htmlFor="category"
        className="mt-6 block text-sm font-medium text-white"
      >
        Velg kategori
      </label>
      <select
        id="category"
        defaultValue="Alle"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-8 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        onChange={handleFilter}
      >
        <option value="Alle">Alle</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul className="mt-4 list-inside list-disc">
        {content?.map((quiz) => (
          <li key={quiz.slug} className="mb-2 text-white underline">
            <Link to={`/quiz/${quiz.slug}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
