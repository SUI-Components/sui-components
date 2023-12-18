import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import {validationCodeMask} from '../../src/config.js'
import MoleculeValidationCode from '../../src/index.js'

const ArticleMask = ({className}) => {
  const [mask, setMask] = useState()

  const onChangeHandler = (event, value) => {
    setMask(value)
  }

  return (
    <Article className={className}>
      <H2>Mask</H2>
      <Paragraph>By using the prop mask we can define the mask is going to be applied to the pinInput.</Paragraph>
      <RadioButtonGroup value={mask} onChange={onChangeHandler}>
        {[undefined, ...Object.keys(validationCodeMask)].map((maskValue, key) => {
          return (
            <RadioButton checked={maskValue === mask} value={maskValue} key={key} label={maskValue || 'undefined'} />
          )
        })}
      </RadioButtonGroup>
      <br />
      <br />
      <MoleculeValidationCode
        sendButtonTextLabel="Send"
        deleteButtonTextLabel="Delete"
        labelText="Your verification code"
        resendButtonTextLabel="Resend"
        status="focus"
        mask={validationCodeMask[mask]}
        defaultValue="827382"
      />
    </Article>
  )
}

ArticleMask.propTypes = {
  className: PropTypes.string
}

export default ArticleMask
