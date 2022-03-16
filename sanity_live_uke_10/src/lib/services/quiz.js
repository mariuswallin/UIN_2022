import client from '../client'

const fields = `
  id,
  title,
  "slug": slug.current,
  "category": category->name.current,
`

export async function getQuizzes() {
  const data = await client.fetch(`*[_type == "quiz"]{${fields}}`)
  return data
}

export async function getQuizByCategory(category) {
  const data = await client.fetch(
    `*[_type == "quiz" && category->name.current==$category]{${fields}}`,
    { category }
  )
  return data
}

export async function getQuizBySlug(slug) {
  const data = await client.fetch(`*[_type == "quiz" && slug.current == $slug]{${fields}}`, {slug})
  return data?.[0]
}
