/* eslint-disable no-console */
/* eslint-disable react/prop-types */

const variationAdapter = {
  negative: 'solid',
  positive: 'solid',
  outline: 'outline'
}

const typeAdapter = {
  info: 'primary',
  error: 'error',
  success: 'success',
  system: 'neutral',
  warning: 'alert'
}

const negativeAdapter = {
  negative: true,
  positive: false,
  outline: false
}

export function getButtons(variation, type) {
  return [
    {
      design: variationAdapter[variation],
      color: typeAdapter[type],
      children: 'btn 1',
      negative: negativeAdapter[variation],
      size: 'small'
    },
    {
      design: variationAdapter[variation],
      color: typeAdapter[type],
      children: 'btn 2',
      negative: negativeAdapter[variation],
      size: 'small'
    }
  ]
}

export const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae orci consectetur ligula vel.'

export function logClose() {
  console.log('Closed!')
}

export function Title({children}) {
  return <p style={{color: '#999', fontSize: 12, textTransform: 'uppercase'}}>{children}</p>
}
