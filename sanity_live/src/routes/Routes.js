import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Quiz from '../pages/Quiz'
import Quizzes from '../pages/Quizzes'

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Quizzes />} />
        <Route path="quiz">
          <Route index element={<Quizzes />} />
          <Route path=":slug" element={<Quiz />} />
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
