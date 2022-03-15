import Answer from './Answer'

const letters = Array.from('abcdefghijklmnopqrstuvwxyz')

export default function Answers({
  answers,
  updateAnswer,
  checkedAnswer,
  isFail,
}) {
  return (
    <fieldset>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {answers?.map((answer, index) => (
          <Answer
            key={answer?._key}
            letter={letters[index]}
            updateAnswer={updateAnswer}
            checkedAnswer={checkedAnswer}
            isFail={isFail}
            answer={answer}
          />
        ))}
      </div>
    </fieldset>
  )
}
