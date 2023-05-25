import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Code,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import {JUSTIFY_CONTENT} from '../src/config.js'
import PinInput from '../src/index.js'

const ArticleJustifyContent = ({className}) => {
  const [code, setCode] = useState('')
  const [justifyContentValue, setJustifyContentValue] = useState()

  const onChangeHandler = (event, args) => {
    setCode(args.value)
  }

  const onJustifyContentChangeValue = (event, value) => {
    setJustifyContentValue(value)
  }

  return (
    <Article className={className}>
      <H2>Justify Content</H2>
      <Paragraph>
        You can change the justify content of the input fields by the prop
        <Code>justifyContent</Code>.
      </Paragraph>
      <RadioButtonGroup
        value={justifyContentValue}
        onChange={onJustifyContentChangeValue}
      >
        {[undefined, ...Object.values(JUSTIFY_CONTENT)].map(
          (statusValue, key) => {
            return (
              <RadioButton
                checked={statusValue === justifyContentValue}
                value={statusValue}
                key={key}
                label={statusValue || 'undefined'}
              />
            )
          }
        )}
      </RadioButtonGroup>
      <br />
      <br />
      <PinInput
        justifyContent={justifyContentValue}
        onChangeHandler={onChangeHandler}
        defaultValue={code}
      />
    </Article>
  )
}

ArticleJustifyContent.propTypes = {
  className: PropTypes.string
}

export default ArticleJustifyContent
