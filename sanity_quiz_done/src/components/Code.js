/* eslint-disable import/no-extraneous-dependencies */
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import jsx from 'refractor/lang/jsx'

Refractor.registerLanguage(js)
Refractor.registerLanguage(jsx)

export default function Code({ language, code, highlightedLines }) {
  return (
    <Refractor language={language} value={code} markers={highlightedLines} />
  )
}
