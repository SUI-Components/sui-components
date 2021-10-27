import PropTypes from 'prop-types'
import {Article, H2, Input, Paragraph} from '@s-ui/documentation-library'
import {useState} from 'react'
import MoleculeValidationCode from '../../src/validationCode'

const ArticleWithoutResend = ({className}) => {
  const [code, setCode] = useState([])

  const onChangeHandler = (event, args) => {
    setCode(args.innerValue)
  }

  return (
    <Article className={className}>
      <H2>Without Resend</H2>
      <Paragraph>
        Without resendButtonTextLabel the component will be render without
        resend button.
      </Paragraph>
      <MoleculeValidationCode
        sendButtonTextLabel="Send"
        deleteButtonTextLabel="Delete"
        labelText="Your verification code"
        onChange={onChangeHandler}
      />
      <Input value={code.filter(Boolean).join('')} disabled />
    </Article>
  )
}

ArticleWithoutResend.propTypes = {
  className: PropTypes.string
}

export default ArticleWithoutResend
