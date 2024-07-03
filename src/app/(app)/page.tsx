import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

import MovieCards from './MovieCards'

const payload = await getPayloadHMR({ config: configPromise })

export const dynamic = 'force-dynamic'

const Page = async () => {
  const movies = await payload.find({
    collection: 'movies',
    sort: '-votes',
  })

  return (
    <>
      <main className="mt-5">
        <MovieCards movies={movies.docs} />
      </main>
    </>
  )
}

export default Page
