import React from 'react'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PromotionCard from '../../components/promotion-list-element'

const Page = async () => {
  const payload = await getPayload({ config: configPromise })

  const promotions = await payload.find({
    collection: 'promotions',
  })
  const promoList = promotions.docs
  return promoList.map((promotion) => <PromotionCard {...promotion} />)
}

export default Page
