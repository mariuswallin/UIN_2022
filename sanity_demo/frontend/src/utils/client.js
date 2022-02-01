import sanityClient from '@sanity/client'

const options = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
}

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
})

export default client
