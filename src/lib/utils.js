export const convertLinesToParagraphs = text => {
  let result = '<p>' + text + '</p>'
  result = result.replace(/\r\n\r\n/g, '</p><p>').replace(/\n\n/g, '</p><p>')
  result = result.replace(/\r\n/g, '<br />').replace(/\n/g, '<br />')

  const splitString = text.split(/\n/).filter(s => s)

  console.log({ splitString })

  return result
}
