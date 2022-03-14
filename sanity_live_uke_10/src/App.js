import MyComponent from './components/MyComponent'
import { getQuizzes } from './lib/services/quiz'

export default function App() {
  // Write JavaScript, use Hooks, add state and more

  const getSanityData = () => {
    getQuizzes()
  }

  return (
    <main className="mx-auto mt-6 max-w-sm border-2 p-6">
      <p className="text-3xl font-bold underline">Legg til JSX</p>
      <MyComponent />
      <button type="button" onClick={getSanityData}>
        Klikk meg
      </button>
    </main>
  )
}
