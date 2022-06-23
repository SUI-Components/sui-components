import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, Input, Paragraph} from '@s-ui/documentation-library'

import MoleculeValidationCode from '../../src/index.js'

const ArticleAutoFocus = ({className}) => {
  const [code, setCode] = useState([])

  const onChangeHandler = (event, args) => {
    setCode(args.innerValue)
  }

  return (
    <Article className={className}>
      <H2>AutoFocus</H2>
      <Paragraph>AutoFocus style of InputComponent.</Paragraph>
      <MoleculeValidationCode
        sendButtonTextLabel="Send"
        deleteButtonTextLabel="Delete"
        labelText="Your verification code"
        resendButtonTextLabel="Resend"
        onChange={onChangeHandler}
        autoFocus
      />
      <Input value={code.filter(Boolean).join('')} disabled />
    </Article>
  )
}

ArticleAutoFocus.propTypes = {
  className: PropTypes.string
}

export default ArticleAutoFocus
