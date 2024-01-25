import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import AtomTooltip, {AtomTooltipTriggers} from '../src/index.js'

const ControlledAndUncontrolledArticle = ({className, trigger}) => {
  const [isVisibleControlled, setIsVisibleControlled] = useState(true)
  const [isVisibleUncontrolled, setIsVisibleUncontrolled] = useState(true)
  return (
    <Article className={className}>
      <H2>Controlled and Uncontrolled Component</H2>
      <Paragraph>AtomTooltip combines both behaviours.</Paragraph>

      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <Paragraph>
            The controlled behavior is triggered using the <Code>isVisible</Code> boolean prop.
          </Paragraph>
          <br />
          <br />
          <AtomTooltip
            content="Tooltip content"
            isVisible={isVisibleControlled}
            trigger={trigger}
            onToggle={(ev, {isVisible}) => {
              console.log('controlled component', 'onToggle', {isVisible}) // eslint-disable-line no-console
            }}
          >
            <Box outline>
              <Label>target</Label>
            </Box>
          </AtomTooltip>
          <br />
          <RadioButtonGroup
            value={isVisibleControlled}
            onChange={(event, value) => setIsVisibleControlled(value === true)}
          >
            <RadioButton value label="true" checked={isVisibleControlled === true} />
            <RadioButton value={false} label="false" checked={isVisibleControlled === false} />
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <Paragraph>
            The uncontrolled behavior is triggered using the <Code>defaultIsVisible</Code> boolean prop.
          </Paragraph>
          <br />
          <br />
          <AtomTooltip
            content="Tooltip content"
            defaultIsVisible={isVisibleControlled}
            trigger={trigger}
            onToggle={(ev, {isVisible}) => {
              console.log('uncontrolled component', 'onToggle', {isVisible}) // eslint-disable-line no-console
            }}
          >
            <Box outline>
              <Label>target</Label>
            </Box>
          </AtomTooltip>
          <br />
          <RadioButtonGroup
            value={isVisibleUncontrolled}
            onChange={(event, value) => setIsVisibleUncontrolled(value === true)}
          >
            <RadioButton value label="true" checked={isVisibleUncontrolled === true} />
            <RadioButton value={false} label="false" checked={isVisibleUncontrolled === false} />
          </RadioButtonGroup>
          <Paragraph>This value only corresponds to the starting value (mounting lifecycle).</Paragraph>
        </Cell>
      </Grid>
    </Article>
  )
}

ControlledAndUncontrolledArticle.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.oneOf(Object.values(AtomTooltipTriggers))
}

export default ControlledAndUncontrolledArticle
