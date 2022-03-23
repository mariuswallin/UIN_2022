import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getQuizByCategory, getQuizzes } from '../lib/services/quiz'

// const quizzes = [
//   {
//     id: '1',
//     title: 'test',
//     slug: 'slug-1',
//     category: 'react',
//   },
//   {
//     id: '2',
//     title: 'test 2',
//     slug: 'slug-2',
//     category: 'sanity',
//   },
// ]

const categories = ['Sanity', 'React']

export default function Quizzes() {
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(false)

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

  useEffect(() => {
    const listQuizzes = async () => {
      setLoading(true)
      const data = await getQuizzes()
      setLoading(false)
      setContent(data)
    }
    listQuizzes()
  }, [])

  if (loading) {
    return <p>Henter data ...</p>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Velkommen til HIOF quiz</h1>
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
