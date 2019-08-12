import React from 'react'
import PropTypes from 'prop-types'
import CmsPreviewTemplate from '../CmsPreviewTemplate'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  console.log({data})

  if (data) {
    return (
      <CmsPreviewTemplate>
        <IndexPageTemplate
          header={data.header}
          mainPitch={data.mainPitch}
          productCategories={data.productCategories}
          detectors={data.detectors}
          certifications={data.certifications}
          convenience={data.convenience}
          customerService={data.customerService}
          statistics={data.statistics}
          customerTestimonials={data.customerTestimonials}
        />
      </CmsPreviewTemplate>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
