export default function Answer({
  answer,
  updateAnswer,
  checkedAnswer,
  isFail,
  letter,
}) {
  const isChecked = () => checkedAnswer?._key === answer?._key

  return (
    <div className="group mt-2">
      <input
        id={answer?._key}
        type="radio"
        name="answer"
        value={answer?.title}
        className="peer appearance-none border-none bg-transparent bg-none checked:border-none checked:bg-transparent checked:bg-none focus:bg-transparent focus:text-transparent focus:outline-none focus:ring-0 focus:ring-offset-0"
        onChange={() => updateAnswer(answer)}
        checked={isChecked()}
      />
      <label
        htmlFor={answer?._key}
        className={`group flex items-center gap-4 rounded-full border-2 py-4 px-6 text-sm font-medium text-white hover:bg-cyan-800 ${
          isChecked()
            ? 'pointer-events-none border-transparent text-gray-800 hover:cursor-default'
            : 'cursor-pointer border-gray-100'
        } peer-checked:bg-emerald-400 sm:flex-1 ${
          isChecked() && isFail ? 'peer-checked:bg-red-400' : ''
        }`}
      >
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 p-2 text-lg ${
            isChecked()
              ? 'bg-emerald-800 text-white'
              : 'text-white group-hover:bg-white group-hover:text-gray-800'
          } ${isChecked() && isFail ? 'bg-red-700' : ''}`}
        >
          {letter}
        </span>
        {answer?.title}
      </label>
      {isFail && isChecked() ? (
        <p className="mt-2 text-xl font-normal text-red-400">
          Beklager, feil svar
        </p>
      ) : null}
    </div>
  )
}
