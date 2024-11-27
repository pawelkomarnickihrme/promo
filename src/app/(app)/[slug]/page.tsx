import { notFound } from 'next/navigation'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PromotionPage from '../../../components/promotion-page'

export default async function MovieDetails({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const promotions = await payload.find({
    collection: 'promotions',
    where: {
      slug: { equals: slug },
    },
  })

  if (promotions.docs.length === 0) {
    return notFound()
  }
  console.log(promotions.docs[0])
  const promotionData = promotions.docs[0]

  return (
    <div className="bg-gray-100 min-h-screen">
      <PromotionPage promotion={promotionData} />
    </div>
  )
}
