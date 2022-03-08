import client from '../client'

const fields = `
  title,
  "slug": slug.current,
  "category": category->name.current,
`

export async function getQuizzes() {
  const data = await client.fetch(`*[_type == "quiz"]{${fields}}`)
  return data
}

export async function getQuiz(slug) {
  const data = await client.fetch(
    `*[_type == "quiz" && slug.current == $slug]{${fields}}`,
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
