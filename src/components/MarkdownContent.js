import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const MarkdownContent = ({ content, ...props }) => <ReactMarkdown source={content} {...props} />

MarkdownContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
}

export default MarkdownContent
