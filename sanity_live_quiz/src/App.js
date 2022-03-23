import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Quiz from './pages/Quiz'
import Quizzes from './pages/Quizzes'

export default function App() {
  return (
    <Routes>
      {/* Gir konsistent layout på alle ruter */}
      <Route element={<Layout />}>
        {/* / */}

        <Route index element={<Quizzes />} />
        {/* /quiz */}

        <Route path="quiz">
          {/* /quiz */}
          <Route index element={<Quizzes />} />
          {/* /quiz/et-eller-annet */}
          <Route path=":slug" element={<Quiz />} />
        </Route>
      </Route>
    </Routes>
  )
}
