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

const ArticleRangeControlledState = ({className}) => {
  const [controlledRangeState, setControlledRangeState] = useState([0, 100])
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
        max={99}
        min={0}
        onChange={event =>
          setControlledRangeState([
            Number(event.target.value),
            controlledRangeState[1]
          ])
        }
        value={controlledRangeState[0]}
      />
      <Input
        type="number"
        max={100}
        min={1}
        onChange={event =>
          setControlledRangeState([
            controlledRangeState[0],
            Number(event.target.value)
          ])
        }
        value={controlledRangeState[1]}
        style={{marginLeft: 10}}
      />
      <Box>
        <AtomSlider
          range
          onChange={(event, {value}) => {
            setControlledRangeState(value)
            console.log(event, {value}) // eslint-disable-line no-console
          }}
          value={controlledRangeState}
        />
      </Box>
    </Article>
  )
}

ArticleRangeControlledState.propTypes = {
  className: PropTypes.string
}

export default ArticleRangeControlledState
