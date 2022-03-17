import client from '../client'

const fields = `
  "id": _id,
  title,
  "slug": slug.current,
  "category": category->name.current,
`

const quizFields = `
  "id": _id,
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

export async function getPlays(email) {
  const query = `*[_type == "game" && email==$email]{...}`
  const data = await client.fetch(query, { email })
  return data
}

export async function getPlay({ email, quizId }) {
  const query = `*[_type == "game" && email==$email && quiz->_id==$quizId]{...}`
  const data = await client.fetch(query, { email, quizId })
  return data?.[0]
}

export async function createPlay({ email, quizId }) {
  const data = await client.create({
    _type: 'game',
    email,
    quiz: {
      _type: 'reference',
      _ref: quizId,
    },
  })
  console.log(data)
  console.log(quizId)
  return data
}
