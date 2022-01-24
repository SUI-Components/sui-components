import {useState} from 'react'
import PropTypes from 'prop-types'

import {
  H2,
  Article,
  Paragraph,
  Label,
  Code,
  Box,
  Input
} from '@s-ui/documentation-library'

import AtomSlider from '../src/index.js'

const ArticleSliderControlledState = ({className}) => {
  const [controlledState, setControlledState] = useState(50)
  return (
    <Article className={className}>
      <H2>With Controlled State value</H2>
      <Paragraph>
        The component provides a way to give a value displayed under the{' '}
        <Code>value</Code> prop.
      </Paragraph>
      <Label>value</Label>:{' '}
      <Input
        type="number"
        max={100}
        min={0}
        onChange={event => setControlledState(event.target.value)}
        value={controlledState}
      />
      <Box>
        <AtomSlider
          onChange={(event, {value}) => {
            setControlledState(value)
            console.log(event, {value}) // eslint-disable-line no-console
          }}
          value={parseInt(controlledState)}
        />
      </Box>
    </Article>
  )
}

ArticleSliderControlledState.propTypes = {
  className: PropTypes.string
}

export default ArticleSliderControlledState
