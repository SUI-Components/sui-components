import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Button,
  Grid,
  Cell
} from '@s-ui/documentation-library'
import {useState} from 'react'
import MoleculeValidationCode from '../../src'

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
      <Grid cols={2} gutter={[8, 8]}>
        <Cell
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <Button onClick={onClickHandler}>-1</Button>
        </Cell>
        <Cell
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          <Button onClick={onClickHandler}>+1</Button>
        </Cell>
        <Cell
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
          span={2}
        >
          <MoleculeValidationCode
            sendButtonTextLabel="Send"
            deleteButtonTextLabel="Delete"
            labelText="Your verification code"
            resendButtonTextLabel="Resend"
            length={length}
          />
        </Cell>
      </Grid>
      <br />
    </Article>
  )
}

ArticleLenght.propTypes = {
  className: PropTypes.string
}

export default ArticleLenght
