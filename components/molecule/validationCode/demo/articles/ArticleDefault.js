import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Input} from '@s-ui/documentation-library'
import {useState} from 'react'
import MoleculeValidationCode from '../../src/index.js'

const ArticleDefault = ({className}) => {
  const [code, setCode] = useState([])

  const onChangeHandler = (event, args) => {
    setCode(args.innerValue)
  }

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>Default style of InputComponent.</Paragraph>
      <MoleculeValidationCode
        sendButtonTextLabel="Send"
        deleteButtonTextLabel="Delete"
        labelText="Your verification code"
        resendButtonTextLabel="Resend"
        onChange={onChangeHandler}
      />
      <Input value={code.filter(Boolean).join('')} disabled />
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
