import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

const Page = async () => {
  // const payload = await getPayloadHMR({ config: configPromise })

  // const promotions = await payload.find({
  //   collection: 'Promotions',
  //   sort: '-votes',
  // })

  return (
    <>
      <main className="mt-5">{/* <MovieCards movies={promotions.docs} /> */}</main>
    </>
  )
}

export default Page
