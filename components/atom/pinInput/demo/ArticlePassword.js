import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Code,
  Grid,
  Cell,
  RadioButton
} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import {useState} from 'react'
import Button from '@s-ui/documentation-library/lib/components/Button/Button'

const ArticlePassword = ({className}) => {
  const [code, setCode] = useState('123456')
  const [isPassword, setIsPassword] = useState(true)

  const onChangeCodeHandler = (event, args) => {
    setCode(args.value)
  }

  return (
    <Article className={className}>
      <H2>Password</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum earum
        nobis, deserunt voluptate labore illo, temporibus ex iure aliquam
        tempore accusamus, aliquid velit magni eius! A at molestias sunt!
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButton
            checked={isPassword}
            onClick={() => setIsPassword(!isPassword)}
            label="isPassword"
          />
        </Cell>
        <Cell>
          <PinInput
            isPassword={isPassword}
            onChange={onChangeCodeHandler}
            value={code}
          />
        </Cell>
      </Grid>
      <br />
      <Paragraph>
        By default, it sets autocomplete="on-time-code" to its inner input
        fields by the default true bolean prop <Code>isOneTimeCode</Code>.
      </Paragraph>
    </Article>
  )
}

ArticlePassword.propTypes = {
  className: PropTypes.string
}

export default ArticlePassword
