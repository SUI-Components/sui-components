import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Code,
  H2,
  Input,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import AtomSlider from '../src/index.js'

const ArticleSliderDisabled = ({className}) => {
  const [disabledState, setDisabledState] = useState(50)
  return (
    <Article className={className}>
      <H2>Disabled</H2>
      <Paragraph>
        Component can be disabled usign the <Code>disabled</Code> prop. Its
        value cannot be modified by its handlers.
      </Paragraph>
      <Label>value</Label>:{' '}
      <Input
        type="number"
        max={100}
        min={0}
        onChange={event => setDisabledState(event.target.value)}
        value={disabledState}
      />
      <Box>
        <AtomSlider
          disabled
          onChange={(event, {value}) => {
            console.log(value) // eslint-disable-line no-console
            setDisabledState(value)
          }}
          value={parseInt(disabledState)}
        />
      </Box>
    </Article>
  )
}

ArticleSliderDisabled.propTypes = {
  className: PropTypes.string
}

export default ArticleSliderDisabled
