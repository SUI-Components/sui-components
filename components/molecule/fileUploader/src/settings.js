export const download = (
  base64DataURLString,
  {filename, target = '_self'} = {}
) => {
  const downloadLink = document.createElement('a')
  downloadLink.href = base64DataURLString
  downloadLink.target = target
  downloadLink.download = filename
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}
