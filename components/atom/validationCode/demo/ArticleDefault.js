import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Box, Input} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import PinInputField from '../src/PinInputField'
import {useState} from 'react'

const ArticleDefault = ({className}) => {
  const [code, setCode] = useState('725412')

  const onChangeHandler = (event, {value}) => {
    setCode(value)
  }
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum earum
        nobis, deserunt voluptate labore illo, temporibus ex iure aliquam
        tempore accusamus, aliquid velit magni eius! A at molestias sunt!
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
          status="focus"
          size="medium"
          onChange={onChangeHandler}
          defaultValue={code}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
        <Input style={{textAlign: 'center'}} value={code} disabled />
      </Box>
      <br />
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
