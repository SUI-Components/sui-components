import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomSwitch, {atomSwitchColors} from '../../src/index.js'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Color</H2>
      <Paragraph>
        For extra intents use the <Code>color</Code> prop with teh values provided by <Code>atomSwitchColors</Code>. It
        includes the following values:
      </Paragraph>
      <UnorderedList>
        {Object.entries(atomSwitchColors).map(([colorName, colorValue]) => (
          <ListItem key={colorName}>
            <Code>
              atomSwitchColors.{colorName}: ${colorValue}
            </Code>
          </ListItem>
        ))}
      </UnorderedList>
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
            <AtomSwitch id={`color-switch-unchecked`} defaultChecked={false} disabled />
            <PrimitiveVisuallyHidden>
              <Label htmlFor={`color-switch-unchecked`}>Default switch</Label>
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
              <AtomSwitch id={`color-switch-${colorName}`} color={colorValue} defaultChecked />
              <PrimitiveVisuallyHidden>
                <Label htmlFor={`color-switch-${colorName}`}>Default switch</Label>
              </PrimitiveVisuallyHidden>
            </Cell>
          ))}
        </Grid>
      </Grid>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
