import React from 'react'
import PropTypes from 'prop-types'

import CmsPreviewTemplate from '../CmsPreviewTemplate'
import { PostTemplate } from '../../templates/post'

const PostPreview = ({ entry, widgetFor, getAsset }) => {
  const featuredImageUrl = entry.getIn(['data', 'featuredImage'])

  return (
    <CmsPreviewTemplate>
      <PostTemplate
        content={widgetFor('body')}
        featuredImage={getAsset(featuredImageUrl)}
        description={entry.getIn(['data', 'description'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
        />
    </CmsPreviewTemplate>
  )
}

PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func
}

export default PostPreview
