import { Route, Routes } from 'react-router-dom'
import Actor from './pages/Actor'
import Actors from './pages/Actors'
import Movies from './pages/Movies'

export default function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <main className="mx-auto mt-6 max-w-2xl p-6">
      <Routes>
        <Route index element={<Movies />} />
        <Route path="movies">
          <Route index element={<Movies />} />
        </Route>
        <Route path="actors">
          <Route index element={<Actors />} />
          <Route path=":name" element={<Actor />} />
        </Route>
      </Routes>
    </main>
  )
}
