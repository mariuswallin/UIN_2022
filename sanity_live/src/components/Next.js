export default function Next({ handleProgress, isDone }) {
  return (
    <button
      type="button"
      className="ml-auto mt-6 flex items-center gap-4 rounded-full bg-orange-400 py-4 px-6 text-sm font-medium text-black disabled:bg-opacity-40"
      onClick={handleProgress}
    >
      {isDone ? 'Fullfør' : 'Neste'}
    </button>
  )
}
