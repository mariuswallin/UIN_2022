import client from '../client'

const fields = `
  "id": _id,
  title,
  "slug": slug.current,
  "category": category->name.current,
`

const quizFields = `
  _key,
  title,
  "slug": slug.current,
  "questions": questions[]{...},
`

export async function getQuizzes() {
  const data = await client.fetch(`*[_type == "quiz"]{${fields}}`)
  return data
}

export async function getQuiz(slug) {
  const data = await client.fetch(
    `*[_type == "quiz" && slug.current == $slug]{${quizFields}}`,
    { slug }
  )
  return data?.[0]
}

export async function getQuizByCategory(category) {
  const data = await client.fetch(
    `*[_type == "quiz" && category->name.current==$category]{${fields}}`,
    { category }
  )
  return data
}
