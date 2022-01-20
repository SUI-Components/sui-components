import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  H2,
  Article,
  Paragraph,
  Grid,
  Cell,
  Label,
  Code,
  Box,
  Input
} from '@s-ui/documentation-library'
import AtomSlider from '../src/index.js'

const ArticleSliderThreshold = ({className, max = 100, min = -100}) => {
  const [thresholdedState, setThresholdedState] = useState(
    (max - min) / 2 + min
  )
  const [maxState, setMaxState] = useState(max)
  const [minState, setMinState] = useState(min)
  const setValue = ({min, max, value}) => {
    if (min !== minState && typeof min !== 'undefined') {
      setMinState(min)
    }
    if (max !== maxState && typeof max !== 'undefined') {
      setMaxState(max)
    }
    if (typeof value === 'number') {
      setThresholdedState(value)
    }
  }
  return (
    <Article className={className}>
      <H2>Thresholds</H2>
      <Paragraph>
        Component thresholds can be customized using the <Code>min</Code> and{' '}
        <Code>max</Code> props
      </Paragraph>
      <Grid cols={3} gutter={[10, 10]}>
        <Cell>
          <Label>min</Label>:{' '}
          <Input
            type="number"
            onChange={event => {
              const newValue = parseInt(event.target.value)
              setValue({
                min: newValue,
                value: (maxState - newValue) / 2 + newValue
              })
            }}
            value={minState}
          />
        </Cell>
        <Cell>
          <Label>max</Label>:{' '}
          <Input
            type="number"
            onChange={event => {
              const newValue = parseInt(event.target.value)
              setValue({
                max: newValue,
                value: (newValue - minState) / 2 + minState
              })
            }}
            value={maxState}
          />
        </Cell>
        <Cell>
          <Label>value</Label>:{' '}
          {typeof thresholdedState === 'string'
            ? ''
            : thresholdedState.toString()}
        </Cell>
      </Grid>
      <br />
      <Box>
        <AtomSlider
          max={maxState}
          min={minState}
          onChange={(event, {value}) => setThresholdedState(value)}
          value={parseInt(thresholdedState)}
        />
      </Box>
    </Article>
  )
}

ArticleSliderThreshold.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number
}

export default ArticleSliderThreshold
