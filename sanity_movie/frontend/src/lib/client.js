import sanityClient from '@sanity/client'

const options = {
  projectId: '8uxgoxup',
  dataset: 'production',
  apiVersion: '2021-03-25',
}

const client = sanityClient({
  ...options,
  useCdn: false,
})

export default client
