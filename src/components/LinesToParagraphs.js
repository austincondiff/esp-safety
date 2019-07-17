import React from 'react'

const LinesToParagraphs = ({ text }) => (
  <React.Fragment>
    {text
      .split(/\n/)
      .filter(t => t)
      .map(t => (
        <p>{t}</p>
      ))}
  </React.Fragment>
)

export default LinesToParagraphs
