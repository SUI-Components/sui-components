import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomSwitch, {atomSwitchColors} from '../../src/index.js'

const DisabledArticle = ({className}) => (
  <Article className={className}>
    <H2>Disabled</H2>
    <Paragraph>This prop is available to get a blocked status component</Paragraph>
    <Grid gutter={[0, 8]}>
      <Grid cols={Object.values(atomSwitchColors).length + 1} gutter={[8, 0]}>
        <Cell>
          <Label>unChecked</Label>
        </Cell>
        {Object.entries(atomSwitchColors).map(([colorName, colorValue], index) => (
          <Cell key={colorName}>
            <Label>{colorValue}</Label>
          </Cell>
        ))}
      </Grid>
      <Grid cols={Object.values(atomSwitchColors).length + 1} gutter={[8, 0]}>
        <Cell
          style={{
            padding: '8px 16px'
          }}
        >
          <AtomSwitch id={`disabled-switch-unchecked`} defaultChecked={false} disabled />
          <PrimitiveVisuallyHidden>
            <Label htmlFor={`disabled-switch-unchecked`}>Default switch</Label>
          </PrimitiveVisuallyHidden>
        </Cell>
        {Object.entries(atomSwitchColors).map(([colorName, colorValue], index) => (
          <Cell
            key={colorName}
            style={{
              padding: '8px 16px',
              ...(colorValue === atomSwitchColors.SURFACE && {backgroundColor: 'var(--c-base-inverse)'})
            }}
          >
            <AtomSwitch id={`disabled-switch-${colorName}`} color={colorValue} defaultChecked disabled />
            <PrimitiveVisuallyHidden>
              <Label htmlFor={`disabled-switch-${colorName}`}>Default switch</Label>
            </PrimitiveVisuallyHidden>
          </Cell>
        ))}
      </Grid>
    </Grid>
  </Article>
)

DisabledArticle.displayName = 'DisabledArticle'

DisabledArticle.propTypes = {
  className: PropTypes.string
}

export default DisabledArticle
