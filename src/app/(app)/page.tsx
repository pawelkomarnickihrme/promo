import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import PromotionCard from '../../components/promotion-list-element'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const promotions = await payload.find({
    collection: 'promotions',
  })
  const promoList = promotions.docs
  return promoList.map((promotion) => <PromotionCard promotion={promotion} />)
}

export default Page
