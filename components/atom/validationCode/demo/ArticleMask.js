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
import {MASK} from '../src/config'

const ArticleMask = ({className}) => {
  const [mask, setMask] = useState()

  const onChangeHandler = (event, value) => {
    setMask(value)
  }

  return (
    <Article className={className}>
      <H2>Mask</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum earum
        nobis, deserunt voluptate labore illo, temporibus ex iure aliquam
        tempore accusamus, aliquid velit magni eius! A at molestias sunt!
      </Paragraph>
      <RadioButtonGroup value={mask} onChange={onChangeHandler}>
        {[undefined, ...Object.keys(MASK)].map((maskValue, key) => {
          return (
            <RadioButton
              checked={maskValue === mask}
              value={maskValue}
              key={key}
              label={maskValue || 'undefined'}
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
        <PinInput status="focus" mask={MASK[mask]} defaultValue="827382">
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

ArticleMask.propTypes = {
  className: PropTypes.string
}

export default ArticleMask
