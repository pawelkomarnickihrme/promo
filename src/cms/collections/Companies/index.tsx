import { CollectionConfig } from 'payload'

export const CompaniesCollection: CollectionConfig = {
  slug: 'companies',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo_url',
      type: 'text', // Could be a media upload field too
      required: false,
    },
    {
      name: 'website',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
  ],
}
