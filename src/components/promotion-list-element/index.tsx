import React from 'react'
import { Promotion } from '../../../payload-types'

const PromotionCard: React.FC<{ promotion: Promotion }> = ({ promotion }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={promotion.thumbnail.url}
            alt={promotion.thumbnail.text}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {promotion.company.name}
          </div>
          <a
            href={promotion.promotion_link}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {promotion.title}
          </a>
          <p className="mt-2 text-gray-500">{promotion.content}</p>
          <div className="mt-4">
            <span className="text-sm font-semibold text-gray-700">Od: </span>
            <span className="text-sm text-gray-600">
              {new Date(promotion.start_date).toLocaleDateString()}
            </span>
          </div>
          <div className="mt-1">
            <span className="text-sm font-semibold text-gray-700">Do: </span>
            <span className="text-sm text-gray-600">
              {new Date(promotion.end_date).toLocaleDateString()}
            </span>
          </div>
          <div className="mt-4">
            <a
              href={promotion.company.website}
              className="text-indigo-500 hover:text-indigo-600 text-sm font-semibold"
            >
              Odwiedź stronę {promotion.company.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionCard
