import React from 'react'
import PropTypes from 'prop-types'
import CmsPreviewTemplate from '../CmsPreviewTemplate'
import { ProductTemplate } from '../../templates/product'

const ProductPreview = ({ entry, widgetFor, widgetsFor }) => {
  const data = entry.getIn(['data']).toJS()
  const product = {
    title: data.title,
    subtitle: data.subtitle,
    highlight: data.highlight,
    slug: data.slug,
    category: data.category && {
      slug: data.category,
      title: data.category.replace('-', ' ')
    },
    summary: data.summary,
    model: data.model,
    'function': data.function,
    rating: data.rating,
    images: data.images && data.images.map(img => ({ relativePath: img.replace('/media/', '') })),
    overview: data.overview,
    sections: data.sections && data.sections.map(s => ({
      ...s,
      image: {
        relativePath: s.image.replace('/media/', '')
      }
    })),
    applications: data.applications,
    features: data.features,
    downloadCategories: data.downloadCategories,
    specificationCategories: data.specificationCategories
  }

  return (
    <CmsPreviewTemplate>
      <ProductTemplate
        title={entry.getIn(['data', 'title'])}
        data={product}
      />
    </CmsPreviewTemplate>
  )
}

ProductPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductPreview
