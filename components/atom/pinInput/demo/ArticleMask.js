import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'
import PinInput from '../src'
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
        By using the prop mask we can define the mask is going to be applied to
        the pinInput.
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
      <PinInput status="focus" mask={MASK[mask]} defaultValue="827382" />
    </Article>
  )
}

ArticleMask.propTypes = {
  className: PropTypes.string
}

export default ArticleMask
