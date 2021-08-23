import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Box, Input} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import {useState} from 'react'

const ArticleReferenced = ({className}) => {
  const [refValue, setRefValue] = useState()
  const [code, setCode] = useState('725412')

  const onChangeHandler = (event, {value}) => {
    setCode(value)
  }
  return (
    <Article className={className}>
      <H2>Forward Referenced</H2>
      <Paragraph>
        PinInput value is readed from a hidden input to get the full result of
        the value and to be able to access it without having to transform data.
      </Paragraph>
      <Box
        outline
        style={{
          maxWidth: 480,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <PinInput
          status="undefined"
          onChange={onChangeHandler}
          defaultValue={code}
          ref={node => {
            node && setRefValue(node.value)
          }}
        />
        <Input style={{textAlign: 'center'}} value={code} disabled />
      </Box>
      <br />
      <Input value={refValue} />
    </Article>
  )
}

ArticleReferenced.propTypes = {
  className: PropTypes.string
}

export default ArticleReferenced
