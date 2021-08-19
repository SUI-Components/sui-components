import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Box,
  Input,
  Button
} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import PinInputField from '../src/PinInputField'
import {useState} from 'react'

const ArticleLenght = ({className}) => {
  const [code, setCode] = useState('725412')

  const onChangeHandler = (event, {value}) => {
    setCode(value)
  }

  const onClickHandler = e => {
    if (e.target.innerText === '+1') setCode(code.concat('1'))
    if (e.target.innerText === '-1') setCode(code.slice(0, -1))
  }

  const renderInputs = () => {
    const inputs = []
    for (let index = 0; index < code.length; index++) {
      inputs.push(<PinInputField />)
    }
    return inputs
  }

  return (
    <Article className={className}>
      <H2>Length</H2>
      <Paragraph>
        The element size is the same as the default value it's been provided.
      </Paragraph>
      <Button onClick={onClickHandler}>+1</Button>
      <Button onClick={onClickHandler}>-1</Button>
      <Box
        outline
        style={{
          maxWidth: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <PinInput
          status="undefined"
          onChange={onChangeHandler}
          defaultValue={code}
        >
          {renderInputs()}
        </PinInput>
        <Input style={{textAlign: 'center'}} value={code} disabled />
      </Box>
      <br />
    </Article>
  )
}

ArticleLenght.propTypes = {
  className: PropTypes.string
}

export default ArticleLenght
