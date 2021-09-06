import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'
import {useState} from 'react'
import MoleculeValidationCode from '../../src/validationCode'
import Input from '@s-ui/documentation-library/lib/components/Input/Input'
import {Cell} from '@s-ui/documentation-library/lib/components/Grid/Grid'
import Label from '@s-ui/documentation-library/lib/components/Label/Label'
import {validationCodeStatus} from '../../src/config'

const ArticleStatus = ({className}) => {
  const [status, setStatus] = useState()
  const [errorMessage, setErrorMessage] = useState('Error')

  const errorChangeHandler = e => {
    setErrorMessage(e.target.value)
  }

  const onChangeHandler = (event, value) => {
    setStatus(value)
  }

  return (
    <Article className={className}>
      <H2>Status</H2>
      <Paragraph>By default the element have an undefined state.</Paragraph>
      <RadioButtonGroup value={status} onChange={onChangeHandler}>
        {[undefined, ...Object.values(validationCodeStatus)].map(
          (statusValue, key) => {
            return (
              <RadioButton
                checked={statusValue === status}
                value={statusValue}
                key={key}
                label={statusValue || 'undefined'}
              />
            )
          }
        )}
      </RadioButtonGroup>
      <br />
      <Cell style={{display: 'flex', flexDirection: 'column'}}>
        <Label>value</Label>
        <Input onChange={errorChangeHandler} value={errorMessage} />
      </Cell>
      <br />
      <MoleculeValidationCode
        sendButtonTextLabel="Send"
        deleteButtonTextLabel="Delete"
        labelText="Your verification code"
        resendButtonTextLabel="Resend"
        status={status}
        statusMessage={errorMessage}
        defaultValue="827382"
      />
    </Article>
  )
}

ArticleStatus.propTypes = {
  className: PropTypes.string
}

export default ArticleStatus
