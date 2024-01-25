import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph, RadioButton} from '@s-ui/documentation-library'

import MoleculeValidationCode from '../../src/index.js'

const ArticlePassword = ({className}) => {
  const [code, setCode] = useState('123456')
  const [isPassword, setIsPassword] = useState(true)

  const onChangeCodeHandler = (event, args) => {
    setCode(args.value)
  }

  return (
    <Article className={className}>
      <H2>Password</H2>
      <Paragraph>The isPassword props allow us to apply a password type to the input.</Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButton checked={isPassword} onClick={() => setIsPassword(!isPassword)} label="isPassword" />
        </Cell>
        <Cell>
          <MoleculeValidationCode
            sendButtonTextLabel="Send"
            deleteButtonTextLabel="Delete"
            labelText="Your verification code"
            resendButtonTextLabel="Resend"
            isPassword={isPassword}
            onChange={onChangeCodeHandler}
            value={code}
          />
        </Cell>
      </Grid>
      <br />
      <Paragraph>
        By default, it sets autocomplete="on-time-code" to its inner input fields by the default true bolean prop{' '}
        <Code>isOneTimeCode</Code>.
      </Paragraph>
    </Article>
  )
}

ArticlePassword.propTypes = {
  className: PropTypes.string
}

export default ArticlePassword
