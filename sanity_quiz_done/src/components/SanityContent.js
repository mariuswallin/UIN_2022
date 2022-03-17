import { PortableText } from '@portabletext/react'
// import { getImageDimensions } from '@sanity/asset-utils'
// import { urlFor } from '../lib/image'

// github.com/portabletext/react-portabletext#types

// function ImageComponent({ value, isInline }) {
//   const { width, height } = getImageDimensions(value)
//   return (
//     <img
//       src={urlFor(value)
//         .width(isInline ? 100 : 800)
//         .fit('max')
//         .auto('format')
//         .url()}
//       alt={value.alt || ' '}
//       loading="lazy"
//       style={{
//         // Display alongside text if image appears inside a block text span
//         display: isInline ? 'inline-block' : 'block',

//         // Avoid jumping around with aspect-ratio CSS property
//         aspectRatio: width / height,
//       }}
//     />
//   )
// }

// const components = {
//   types: {
//     customImage: ImageComponent,
//   },
// }

export default function SanityContent({ data }) {
  // Sender data (som skal være block-content) til PortableText
  // Bruker || til å sette data til [] hvis den ikke har noen verdi
  return (
    <div className="prose mt-4 prose-h1:text-xl">
      {/* Sender components med som prop */}
      {/* <PortableText value={data || []} components={components} /> */}
      <PortableText value={data || []} />
    </div>
  )
}
