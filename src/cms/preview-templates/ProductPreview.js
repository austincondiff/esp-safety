import React from 'react'
import PropTypes from 'prop-types'
import CmsPreviewTemplate from '../CmsPreviewTemplate'
import { ProductTemplate } from '../../templates/product'

const ProductPreview = ({ entry, widgetFor, widgetsFor }) => {
  const data = entry.getIn(['data']).toJS()
  const product = {
    ...data,
    category: data.category && {
      slug: data.category,
      title: data.category.replace('-', ' ')
    }
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
