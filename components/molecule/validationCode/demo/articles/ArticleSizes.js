import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'
import {useState} from 'react'
import {SIZES} from '../../src/config'
import MoleculeValidationCode from '../../src/validationCode'

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
        {[undefined, ...Object.values(SIZES)].map((sizeValue, key) => {
          return (
            <RadioButton
              checked={sizeValue === size}
              value={sizeValue}
              key={key}
              label={sizeValue || 'undefined'}
            />
          )
        })}
      </RadioButtonGroup>
      <br />
      <br />
      <MoleculeValidationCode
        sendButtonText="Send"
        deleteButtonText="Delete"
        labelText="Your verification code"
        resendButtonText="Resend"
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
