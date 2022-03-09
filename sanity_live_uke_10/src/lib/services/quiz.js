import client from '../client'

const fields = `
  title,
  "slug": slug.current,
  "category": category->name.current,
`

export async function getQuizzes() {
  const data = await client.fetch(`*[_type == "quiz"]{${fields}}`)
  console.log(data)
}
