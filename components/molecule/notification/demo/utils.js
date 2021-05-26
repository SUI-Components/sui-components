/* eslint-disable no-console */
/* eslint-disable react/prop-types */
export function getButtons(variation = 'negative') {
  return [
    {
      type: variation !== 'negative' ? 'primary' : 'secondary',
      children: 'Secondary',
      negative: true
    },
    {
      type: variation !== 'negative' ? 'primary' : 'secondary',
      children: 'Primary',
      negative: true
    }
  ]
}

export const TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae orci consectetur ligula vel.'

export function logClose() {
  console.log('Closed!')
}

export function Title({children}) {
  return (
    <p style={{color: '#999', fontSize: 12, textTransform: 'uppercase'}}>
      {children}
    </p>
  )
}
