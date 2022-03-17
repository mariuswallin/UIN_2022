import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Answers from '../components/Answers'
import Next from '../components/Next'
import Progress from '../components/Progress'
import Question from '../components/Question'
import { createPlay, getPlay, getQuiz } from '../lib/services/quiz'

const validEmail = (email) => {
  const removedCurl = email.split('@')
  const removedDot = removedCurl.join('').split('.')
  const invalid = removedCurl.filter(
    (value) => !value || value === null || value?.length === 0
  )
  return invalid?.length === 0 && removedDot[1]?.length >= 2
}

export default function Quiz() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [quiz, setQuiz] = useState({})
  const [answers, setAnswers] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const question = +searchParams.get('question') || 1
  const done = searchParams.get('done')

  const checkedAnswer = answers[question - 1]
  const currentQuestion = quiz?.questions?.[question - 1]

  const isFail = !checkedAnswer?.correct
  const isDone =
    answers?.filter(Boolean)?.length === quiz?.questions?.length &&
    question >= quiz?.questions.length

  useEffect(() => {
    const getQuizData = async () => {
      setLoading(true)
      const data = await getQuiz(slug)
      setQuiz(data)
      setLoading(false)
    }
    getQuizData()
  }, [slug])

  const progress = async () => {
    if (isDone) {
      await createPlay({ email, quizId: quiz.id })
      setSearchParams(`?done=true`)
    } else {
      setSearchParams(`?question=${question + 1}`)
    }
  }

  const handleProgress = () => {
    // TODO: If want to handle fail later we can not do it like we do now
    if (isFail) return
    progress()
  }

  const updateAnswer = (answer) => {
    setAnswers([
      ...answers.slice(0, question - 1),
      answer,
      ...answers.slice(question),
    ])
  }

  const handleEmailChange = async (event) => {
    const { value } = event.target
    if (validEmail(value)) {
      setEmail(value)
      // const games = await getPlays(value)
      const play = await getPlay({ email: value, quizId: quiz.id })
      if (play?._id) {
        alert('Du har allerede gjennomført denne quizzen')
        setTimeout(() => {
          navigate('/quiz')
        }, 0)
      }
    }
  }

  if (!email) {
    return (
      <div className="w-full max-w-xs">
        <label
          htmlFor="email"
          className="block text-base font-medium text-white"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="name@email.com"
          onChange={handleEmailChange}
        />
      </div>
    )
  }

  if (loading) {
    return <p className="mt-4 text-white">Henter quiz ...</p>
  }

  if (done) {
    return (
      <section className="text-white">
        <p className="block text-3xl font-bold">Gratulerer, du er ferdig!</p>
        <Link to="/quiz" className="mt-2 inline-block underline">
          Tilbake til quiz oversikten
        </Link>
      </section>
    )
  }

  return (
    <div className="mx-auto w-full max-w-5xl pt-6 text-white">
      {/* {JSON.stringify(answers)} */}
      {question && question > 0 && quiz?.questions?.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold">{quiz?.title}</h1>
          <p className="mt-2 text-sm">Du spiller som {email}</p>
          <Progress current={question} total={quiz?.questions?.length} />
          <Question
            title={currentQuestion?.title}
            content={currentQuestion?.content}
            code={currentQuestion?.code}
          />
          <Answers
            answers={currentQuestion?.answeres}
            checkedAnswer={checkedAnswer}
            isFail={isFail}
            updateAnswer={updateAnswer}
          />
          {checkedAnswer && question <= quiz?.questions?.length ? (
            <Next handleProgress={handleProgress} isDone={isDone} />
          ) : null}
        </>
      ) : (
        <h1 className="text-3xl font-bold">Ingen quiz å se her</h1>
      )}
    </div>
  )
}
