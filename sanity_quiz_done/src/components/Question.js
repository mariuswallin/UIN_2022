import Code from './Code'
import SanityContent from './SanityContent'

export default function Question({ title, content, code }) {
  return (
    <article className="my-8">
      <h2 className="mt-16 mb-8 text-2xl font-semibold">{title}</h2>
      {content && <SanityContent data={content} />}
      {code && <Code code={code?.code} language={code?.language} />}
    </article>
  )
}
