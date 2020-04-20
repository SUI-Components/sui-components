import React from 'react'
import ReactDOM from 'react-dom'

import compose from './helpers/compose'

const renderTest = ({props = {}, Component, describeMessages = []}) => (
  testMessage = 'should render without crashing'
) => {
  const test = () => {
    it(testMessage, async done => {
      // Given

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
      done()
    })
  }
  return compose(
    describeMessages.map(describeMessage => func =>
      describe(describeMessage, func)
    ),
    test()
  )
}

export default renderTest
