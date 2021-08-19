import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  Box
} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import PinInputField from '../src/PinInputField'
import {useState} from 'react'
import {STATUS} from '../src/config'

const ArticleStates = ({className}) => {
  const [size, setSize] = useState()

  const onChangeHandler = (event, value) => {
    setSize(value)
  }

  return (
    <Article className={className}>
      <H2>States</H2>
      <Paragraph>By default the element have an undefined state.</Paragraph>
      <RadioButtonGroup value={size} onChange={onChangeHandler}>
        {[...Object.values(STATUS)].map((sizeValue, key) => {
          return (
            <RadioButton
              checked={sizeValue === size}
              value={sizeValue}
              key={key}
              label={sizeValue}
            />
          )
        })}
      </RadioButtonGroup>
      <br />
      <br />
      <Box
        outline
        style={{
          maxWidth: 480,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <PinInput status={status} size={size} defaultValue="827382">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </Box>
    </Article>
  )
}

ArticleStates.propTypes = {
  className: PropTypes.string
}

export default ArticleStates
