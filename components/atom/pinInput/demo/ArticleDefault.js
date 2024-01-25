import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import PinInput from '../src/index.js'

const ArticleDefault = ({className}) => {
  const [code, setCode] = useState('')

  const onChangeHandler = (event, args) => {
    setCode(args.value)
  }

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>Default style of InputComponent.</Paragraph>
      <PinInput onChangeHandler={onChangeHandler} defaultValue={code} />
      <Paragraph>
        By default, it sets autocomplete="on-time-code" to its inner input fields by the default true bolean prop{' '}
        <Code>isOneTimeCode</Code>.
      </Paragraph>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
