import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomSwitch, {atomSwitchColors} from '../../src/index.js'

const ArticleReadOnly = ({className}) => (
  <Article className={className}>
    <H2>ReadOnly</H2>
    <Paragraph>This prop is available to get a read-only status component</Paragraph>
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
          <AtomSwitch id={`readOnly-switch-unchecked`} defaultChecked={false} readOnly />
          <PrimitiveVisuallyHidden>
            <Label htmlFor={`readOnly-switch-unchecked`}>Default switch</Label>
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
            <AtomSwitch id={`readOnly-switch-${colorName}`} color={colorValue} defaultChecked readOnly />
            <PrimitiveVisuallyHidden>
              <Label htmlFor={`readOnly-switch-${colorName}`}>Default switch</Label>
            </PrimitiveVisuallyHidden>
          </Cell>
        ))}
      </Grid>
    </Grid>
  </Article>
)

ArticleReadOnly.displayName = 'ArticleReadOnly'

ArticleReadOnly.propTypes = {
  className: PropTypes.string
}

export default ArticleReadOnly
