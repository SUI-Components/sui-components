import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Input} from '@s-ui/documentation-library'
import {useState} from 'react'
import MoleculeValidationCode from '../../src/validationCode'

const ArticleDefault = ({className}) => {
  const [code, setCode] = useState('')

  const onChangeHandler = (event, args) => {
    setCode(args.value)
  }

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>Default style of InputComponent.</Paragraph>
      <MoleculeValidationCode
        sendButtonText="Send"
        deleteButtonText="Delete"
        labelText="Your verification code"
        resendButtonText="Resend"
        onChange={onChangeHandler}
      />
      <Input value={code} disabled />
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
