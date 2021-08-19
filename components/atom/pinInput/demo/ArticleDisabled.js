import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Box,
  Code,
  RadioButton
} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import PinInputField from '../src/PinInputField'
import {useState} from 'react'

const ArticleDisabled = ({className}) => {
  const [code, setCode] = useState('725412')
  const [disabled, setDisabled] = useState(false)

  const onChangeHandler = (event, args) => {
    console.log(args)
    setCode(args.value)
  }

  return (
    <Article className={className}>
      <H2>Disabled</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum earum
        nobis, deserunt voluptate labore illo, temporibus ex iure aliquam
        tempore accusamus, aliquid velit magni eius! A at molestias sunt!
      </Paragraph>
      <RadioButton
        value={disabled}
        label="disabled"
        checked={disabled}
        onClick={() => setDisabled(!disabled)}
      />
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
          disabled={disabled}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </Box>
      <br />
      <Paragraph>
        By default, it sets autocomplete="on-time-code" to its inner input
        fields by the default true bolean prop <Code>isOneTimeCode</Code>.
      </Paragraph>
    </Article>
  )
}

ArticleDisabled.propTypes = {
  className: PropTypes.string
}

export default ArticleDisabled
