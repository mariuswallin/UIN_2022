import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Answers from '../components/Answers'
import Next from '../components/Next'
import Progress from '../components/Progress'
import Question from '../components/Question'
import { getQuiz } from '../lib/services/quiz'

export default function Quiz() {
  const { slug } = useParams()
  const [loading, setLoading] = useState(false)
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

  const progress = () => {
    if (isDone) {
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
