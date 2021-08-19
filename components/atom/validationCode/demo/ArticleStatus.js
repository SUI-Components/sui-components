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

const ArticleStatus = ({className}) => {
  const [status, setStatus] = useState()

  const onChangeHandler = (event, value) => {
    setStatus(value)
  }

  return (
    <Article className={className}>
      <H2>Status</H2>
      <Paragraph>By default the element have an undefined state.</Paragraph>
      <RadioButtonGroup value={status} onChange={onChangeHandler}>
        {[undefined, ...Object.values(STATUS)].map((statusValue, key) => {
          return (
            <RadioButton
              checked={statusValue === status}
              value={statusValue}
              key={key}
              label={statusValue || 'undefined'}
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
        <PinInput status={status} defaultValue="827382">
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

ArticleStatus.propTypes = {
  className: PropTypes.string
}

export default ArticleStatus
