import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  H2,
  Article,
  Paragraph,
  Label,
  Code,
  Box
} from '@s-ui/documentation-library'
import AtomSlider from '../src/index.js'

const ArticleRangeDefault = ({className}) => {
  const [uncontrolledRangeState, setUncontrolledRangeState] = useState([0, 100])
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        To configure it only add the <Code>range</Code> boolean prop
      </Paragraph>
      <Paragraph>
        The initial value is the whole range by default. You cn modify it
        providing and array of values contained in the valid range provided
        using the props <Code>defaultValue</Code> (array) and <Code>max</Code>{' '}
        and <Code>min</Code> thesholds.
      </Paragraph>
      <Label>values</Label>: [{uncontrolledRangeState[0]},{' '}
      {uncontrolledRangeState[1]}]
      <Box>
        <AtomSlider
          range
          defaultValue={uncontrolledRangeState}
          onChange={(event, {value}) => {
            setUncontrolledRangeState(value)
            console.log(event, {value})
          }}
        />
      </Box>
    </Article>
  )
}

ArticleRangeDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleRangeDefault
