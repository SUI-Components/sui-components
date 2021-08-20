import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Box, Button} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import {useState} from 'react'

const ArticleLenght = ({className}) => {
  const [length, setLength] = useState(6)

  const onClickHandler = e => {
    if (e.target.innerText === '+1') setLength(length + 1)
    if (e.target.innerText === '-1' && length > 1) setLength(length - 1)
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
        <PinInput length={length} />
      </Box>
      <br />
    </Article>
  )
}

ArticleLenght.propTypes = {
  className: PropTypes.string
}

export default ArticleLenght
