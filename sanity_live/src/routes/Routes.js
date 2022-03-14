import React, { useEffect, useState } from 'react'
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
      { id: '1', title: 'Answer one', correct: false },
      { id: '2', title: 'Answer two', correct: true },
    ],
  },
  {
    id: '2',
    title: 'Title two',
    answers: [
      { id: '1', title: 'Answer one', correct: false },
      { id: '2', title: 'Answer two', correct: true },
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
          title={questions[current - 1].title}
          progress={progress}
          answers={questions[current - 1].answers}
          isDone={questions.length <= current}
        />
      </div>
    </div>
  )
}

function Question({ progress, title, answers, isDone }) {
  const [checked, setChecked] = useState(null)
  const [isFail, setFail] = useState(false)

  const isChecked = (answer) => checked?.id === answer?.id

  const handleAnswer = () => {
    setFail(!checked?.correct)
    setChecked(null)
    progress()
  }

  const updateChecked = (answer) => {
    setFail(false)
    setChecked(answer)
  }

  return (
    <article>
      {title}
      <fieldset>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {answers.map((answer, index) => (
            <div className="group mt-8" key={answer.id}>
              <input
                id={answer.id}
                type="radio"
                name="answer"
                value={answer.title}
                className="peer appearance-none"
                onChange={() => updateChecked(answer)}
                checked={isChecked(answer)}
              />
              <label
                htmlFor={answer.id}
                className={`group flex items-center gap-4 rounded-full bg-white py-4 px-6 text-sm font-medium text-black hover:bg-cyan-800 ${
                  isChecked(answer)
                    ? 'pointer-events-none hover:cursor-default'
                    : 'cursor-pointer'
                } peer-checked:bg-cyan-500 sm:flex-1`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full p-2  ${
                    isChecked(answer)
                      ? 'bg-white text-gray-800'
                      : 'bg-cyan-700 text-white group-hover:bg-white group-hover:text-gray-800'
                  }`}
                >
                  {index}
                </span>
                {answer.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      {isFail ? <p>Beklager, feil svar</p> : null}
      {isDone ? (
        <button
          type="button"
          disabled={!checked}
          className="ml-auto mt-6 flex items-center gap-4 rounded-full bg-orange-400 py-4 px-6 text-sm font-medium text-black disabled:bg-opacity-40"
          onClick={handleAnswer}
        >
          Fullfør
        </button>
      ) : (
        <button
          type="button"
          disabled={!checked}
          className="ml-auto mt-6 flex items-center gap-4 rounded-full bg-orange-400 py-4 px-6 text-sm font-medium text-black disabled:bg-opacity-40"
          onClick={handleAnswer}
        >
          Neste
        </button>
      )}
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
