import { useEffect, useState } from 'react'
import { Routes, Route, Outlet, useParams, Link } from 'react-router-dom'
import { getQuiz, getQuizByCategory, getQuizzes } from '../lib/services/quiz'

function Layout() {
  return (
    <main>
      <Outlet />
    </main>
  )
}

const categories = ['Sanity', 'React']

function Quizzes() {
  const [content, setContent] = useState([])

  useEffect(() => {
    const listQuizzes = async () => {
      const data = await getQuizzes()
      setContent(data)
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

  return (
    <>
      <h1>Quizzes</h1>
      <select defaultValue="Alle" onChange={handleFilter}>
        <option value="Alle">Alle</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {content?.map((quiz) => (
          <li key={quiz.slug}>
            <Link to={`/quiz/${quiz.slug}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

function Quiz() {
  const [quiz, setQuiz] = useState({})
  const { slug } = useParams()
  const getCurrentQuiz = async () => {
    const data = await getQuiz(slug)
    setQuiz(data)
  }
  return (
    <>
      <h1>Quiz</h1>
      <p>{JSON.stringify(quiz)}</p>
      <button type="button" className="btn" onClick={getCurrentQuiz}>
        Hent quiz med slug: {slug}
      </button>
    </>
  )
}

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Quizzes />} />
        <Route path="quiz">
          <Route index element={<Quizzes />} />
          <Route path=":slug" element={<Quiz />} />
        </Route>
      </Route>
    </Routes>
  )
}

/**
  // *[_type == "quiz" && category->name.current==$category]{..., "category": category->name.current}
  // *[_type == "quiz"]{..., "category": category->name.current}[0...1]
  // *[_type == "quiz"]{..., "category": category->name.current}[0..1]
  // *[_type == "quiz"]{..., "category": category->name.current} | order(_createdAt desc)
  // *[_type == "quiz" && title match $search]{..., "category": category->name.current}
  // *[_type == "quiz" && title match $search]{..., "category": category->name.current}
  // *[_type == "quiz" && category->name.current==$category]{..., "category": category->name.current}
  // *[_type == "category"]{..., 'quizzes': *[_type=='quiz' && references(^._id)]{title,'slug': slug.current,}}
 */
