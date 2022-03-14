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

const questions = [
  {
    id: '1',
    title: 'Title one',
    answers: [
      { id: 1, title: 'Answer one', correct: false },
      { id: 2, title: 'Answer two', correct: true },
    ],
  },
  {
    id: '2',
    title: 'Title two',
    answers: [
      { id: 1, title: 'Answer one', correct: false },
      { id: 2, title: 'Answer two', correct: true },
    ],
  },
]

function QuizComplete() {
  const [quiz, setQuiz] = useState({})
  const [current, setCurrent] = useState(1)
  const { slug } = useParams()

  const progress = () => {
    setCurrent((c) => c + 1)
  }

  useEffect(() => {
    const getQuizData = async () => {
      const data = await getQuiz(slug)
      setQuiz(data)
    }
    getQuizData()
  }, [slug])

  return (
    <div className="h-screen w-full bg-cyan-900">
      <div className="mx-auto max-w-3xl pt-6 text-white">
        <h1 className="text-xl font-bold">{quiz?.title}</h1>
        {/* <p>{JSON.stringify(quiz)}</p> */}
        {current && current > 0 && (
          <div className="relative mt-12 flex items-center gap-12 pt-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full text-sm font-semibold text-white">
                  Spørsmål {`${current} / ${questions.length}`}
                </span>
              </div>
            </div>
            <div className="relative h-2 flex-1 overflow-hidden rounded bg-gray-800">
              <div
                style={{
                  width: `${Math.round((current / questions.length) * 100)}%`,
                }}
                className="absolute inset-0 rounded bg-emerald-500"
              />
            </div>
          </div>
        )}
        <Question
          title={questions[current].title}
          progress={progress}
          answers={questions[current].answers}
        />
      </div>
    </div>
  )
}

function Question({ progress, title, answers }) {
  const handleAnswer = () => {
    console.log('answer')
    progress()
  }

  return (
    <article>
      {title}
      <fieldset>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {answers.map((answer) => (
            <label
              key={answer.id}
              htmlFor={answer.id}
              className="group flex cursor-pointer items-center gap-4 rounded-full border py-4 px-6 text-sm font-medium focus:outline-none active:ring-2 active:ring-emerald-400 active:ring-offset-2 sm:flex-1"
            >
              <input
                id={answer.id}
                type="radio"
                name="answer"
                value={answer.title}
                checked
                className="sr-only"
              />
              <p>{answer.title}</p>
            </label>
          ))}
        </div>
      </fieldset>
      <p>Beklager, svaret er feil</p>
      <button type="button" onClick={handleAnswer}>
        Neste
      </button>
    </article>
  )
}

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Quizzes />} />
        <Route path="quiz">
          <Route index element={<Quizzes />} />
          <Route path=":slug" element={<QuizComplete />} />
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
