import React from 'react'
import { Promotion } from '../../../payload-types'

const PromotionPage: React.FC<{ promotion: Promotion }> = ({ promotion }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={promotion.thumbnail.url}
          alt={promotion.thumbnail.text}
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{promotion.title}</h1>
          <p className="text-gray-600 text-lg mb-4">{promotion.content}</p>
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={promotion.company.thumbnail.url}
              alt={promotion.company.name}
            />
            <div>
              <h2 className="text-xl font-semibold">{promotion.company.name}</h2>
              <a href={promotion.company.website} className="text-blue-600 hover:underline">
                Odwiedź stronę bukmachera
              </a>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{promotion.company.description}</p>
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Promocja ważna od: {new Date(promotion.start_date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              do: {new Date(promotion.end_date).toLocaleDateString()}
            </p>
          </div>
          <a
            href={promotion.promotion_link}
            className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Odbierz bonus
          </a>
        </div>
      </div>
    </div>
  )
}

export default PromotionPage
