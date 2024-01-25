import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Input, Label, Paragraph} from '@s-ui/documentation-library'

import PinInput from '../src/index.js'

const cellStyles = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column'
}

const ArticleValue = ({className}) => {
  const [controlledCode, setControlledCode] = useState('123456')
  const [uncontrolledCode, setUncontrolledCode] = useState('123456')

  const onChangeHandler = callback => (event, args) => {
    callback(args.value)
  }

  const inputChangeHandler = callback => event => {
    callback(event.target.value)
  }

  return (
    <Article className={className}>
      <H2>Controlled and Uncontrolled value</H2>
      <Paragraph>
        The component can be used with a controlled or uncontrolled value. When passing a value to the component the
        component value will be linked to the value we pass reading its current value and updating from it. While when
        using the defaultValue prop the component only reads the value and doesn't update it.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell style={cellStyles}>
          <Label>Controlled</Label>
          <Input onChange={inputChangeHandler(setControlledCode)} type="text" value={controlledCode} />
        </Cell>
        <Cell style={cellStyles}>
          <Label>Uncontrolled</Label>
          <Input onChange={inputChangeHandler(setUncontrolledCode)} type="text" value={uncontrolledCode} />
        </Cell>
        <Cell>
          <PinInput onChange={onChangeHandler(setControlledCode)} value={controlledCode} />
        </Cell>
        <Cell>
          <PinInput onChange={onChangeHandler(setUncontrolledCode)} defaultValue={uncontrolledCode} />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleValue.propTypes = {
  className: PropTypes.string
}

export default ArticleValue
