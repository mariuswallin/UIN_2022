import { PortableText } from '@portabletext/react'

export default function SanityContent({ data }) {
  // Sender data (som skal være block-content) til PortableText
  // Bruker || til å sette data til [] hvis den ikke har noen verdi
  return (
    <div className="prose mt-4 prose-h1:text-xl">
      <PortableText value={data || []} />
    </div>
  )
}
