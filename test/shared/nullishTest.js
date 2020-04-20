import {expect} from 'chai'

import compose from './helpers/compose'

const nullishTest = ({
  props = {},
  setup,
  describeMessages = [],
  isNull = false
}) => (testMessage = `should ${isNull === false ? 'not ' : ''}render null`) => {
  const test = () => {
    it(testMessage, async done => {
      // Given
      const testProps = props

      // When
      const {container} = setup(testProps)

      // Then
      if (isNull) {
        expect(container).to.not.null
      } else {
        expect(container).to.not.be.null
      }
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

export default nullishTest
