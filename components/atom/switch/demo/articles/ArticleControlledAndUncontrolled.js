import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Button, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomSwitch from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleControlledAndUncontrolled = ({className}) => {
  const [state, setState] = useState(false)
  const toggle = () => setState(!state)
  return (
    <Article className={className}>
      <H2>defaultChecked and checked</H2>
      <Paragraph>
        Use <Code>defaultChecked</Code> and <Code>checked</Code> for uncontrolled and controlled component accordingly.
      </Paragraph>
      <Paragraph>
        Controlled components are anchored to its value given as prop, and its key handlers for toggling will not be
        available
      </Paragraph>
      <Grid cols={5} gutter={[10, 10]}>
        <Cell />
        <Cell span={2} style={flexCenteredStyle}>
          <Label>value</Label>
        </Cell>
        <Cell span={2} style={flexCenteredStyle}>
          <Label>initialValue</Label>
        </Cell>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <Label>Mounted value</Label>
        </Cell>
        {['value', 'initialValue'].map((_, j) =>
          [true, false].map((value, i) => (
            <Cell key={`${i}-${j}`} style={flexCenteredStyle}>
              <Label>{value.toString()}</Label>
            </Cell>
          ))
        )}
        <Cell style={{...flexCenteredStyle, alignItems: 'flex-end'}}>
          <Button onClick={toggle} fullWidth>
            Toggle
          </Button>
        </Cell>
        {['checked', 'defaultChecked'].map((key, j) =>
          [true, false].map((value, i) => (
            <Cell key={`${i}-${j}`} style={flexCenteredStyle}>
              <AtomSwitch id={`switch-${key}-${value}`} name={`${i}-${j}`} {...{[key]: i % 2 ? state : !state}} />
              <PrimitiveVisuallyHidden>
                <Label htmlFor={`switch-${key}-${value}`}>{`switch ${key} ${value}`}</Label>
              </PrimitiveVisuallyHidden>
            </Cell>
          ))
        )}
      </Grid>
    </Article>
  )
}

ArticleControlledAndUncontrolled.displayName = 'ArticleControlledAndUncontrolled'

ArticleControlledAndUncontrolled.propTypes = {
  className: PropTypes.string
}

export default ArticleControlledAndUncontrolled
