import {render} from '@testing-library/react'
import React from 'react'

const setupBuilder = (renderFunction = element => element) => (
  Component,
  debug = false
) => props => {
  const container = document.createElement('div')
  container.setAttribute('id', 'test-container')
  const utils = render(renderFunction(<Component {...props} />), {
    container: document.body.appendChild(container)
  })
  if (debug) {
    console.log(utils.debug())
  }
  return utils
}

export default setupBuilder
