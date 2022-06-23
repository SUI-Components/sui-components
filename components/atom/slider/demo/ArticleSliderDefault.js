import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Code,
  H2,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import AtomSlider from '../src/index.js'

const ArticleSliderDefault = ({className}) => {
  const [uncontrolledState, setUncontrolledState] = useState(50)
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        By default, the component gets a 0-100 thresholds and uses its own
        internal status getting the half range value by default.
      </Paragraph>
      <Paragraph>
        The <Code>defaultValue</Code> prop can modify the starting value.
      </Paragraph>
      <Label>value</Label>: {uncontrolledState}
      <Box>
        <AtomSlider
          onChange={(event, {value}) => {
            setUncontrolledState(value)
            console.log(event, {value}) // eslint-disable-line no-console
          }}
        />
      </Box>
    </Article>
  )
}

ArticleSliderDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleSliderDefault
