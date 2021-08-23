import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Grid,
  Cell,
  Label,
  Input
} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import {useState} from 'react'

const ArticleUncontrolled = ({className}) => {
  const [controlledCode, setControlledCode] = useState('')
  const [uncontrolledCode, setUncontrolledCode] = useState('')

  const onChangeHandler = callback => (event, args) => {
    callback(args.value)
  }

  const inputChangeHandler = callback => event => {
    callback(event.target.value)
  }

  return (
    <Article className={className}>
      <H2>Controlled vs Uncontrolled</H2>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column'
          }}
        >
          <Label>Controlled</Label>
          <Input
            onChange={inputChangeHandler(setControlledCode)}
            type="text"
            value={controlledCode}
          />
        </Cell>
        <Cell
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column'
          }}
        >
          <Label>Uncontrolled</Label>
          <Input
            onChange={inputChangeHandler(setUncontrolledCode)}
            type="text"
            value={uncontrolledCode}
          />
        </Cell>
        <Cell>
          <PinInput
            onChange={onChangeHandler(setControlledCode)}
            value={controlledCode}
          />
        </Cell>
        <Cell>
          <PinInput
            onChange={onChangeHandler(setUncontrolledCode)}
            defaultValue={uncontrolledCode}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleUncontrolled.propTypes = {
  className: PropTypes.string
}

export default ArticleUncontrolled
