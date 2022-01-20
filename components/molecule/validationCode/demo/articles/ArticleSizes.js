import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'
import {useState} from 'react'
import MoleculeValidationCode from '../../src/index.js'
import {validationCodeSizes} from '../../src/config.js'

const ArticleSizes = ({className}) => {
  const [size, setSize] = useState()

  const onChangeHandler = (event, value) => {
    setSize(value)
  }

  return (
    <Article className={className}>
      <H2>Sizes</H2>
      <Paragraph>
        size prop allows to change the size of the pinInput inputs, working with
        the following props:
      </Paragraph>
      <RadioButtonGroup value={size} onChange={onChangeHandler}>
        {[undefined, ...Object.values(validationCodeSizes)].map(
          (sizeValue, key) => {
            return (
              <RadioButton
                checked={sizeValue === size}
                value={sizeValue}
                key={key}
                label={sizeValue || 'undefined'}
              />
            )
          }
        )}
      </RadioButtonGroup>
      <br />
      <br />
      <MoleculeValidationCode
        sendButtonTextLabel="Send"
        deleteButtonTextLabel="Delete"
        labelText="Your verification code"
        resendButtonTextLabel="Resend"
        status="focus"
        size={size}
        defaultValue="827382"
      />
    </Article>
  )
}

ArticleSizes.propTypes = {
  className: PropTypes.string
}

export default ArticleSizes
