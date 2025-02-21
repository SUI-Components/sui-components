import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import AtomTag, {atomTagColors, atomTagDesigns} from '../../src/index.js'
import {closeIcon, icon} from '../settings.js'

const ArticleColor = ({className}) => {
  return (
    <Article className={className}>
      <H2>Color</H2>
      <Paragraph>
        The color values are under the <Code>atomTagColors</Code> enum
      </Paragraph>
      <UnorderedList>
        {Object.entries(atomTagColors).map(([key, value]) => (
          <ListItem key={key}>
            <Code>
              atomTagColors.${key}: '${value}'
            </Code>
          </ListItem>
        ))}
      </UnorderedList>
      <Grid gutter={[8, 0]} rows={3}>
        <Cell>
          <Grid cols={Object.values(atomTagColors).length + 1} gutter={[0, 8]}>
            <Cell />
            {Object.entries(atomTagColors).map(([colorKey, colorValue]) => (
              <Cell key={colorKey}>
                <Label>{colorKey}</Label>
              </Cell>
            ))}
          </Grid>
        </Cell>
        {Object.entries(atomTagDesigns).map(([designKey, designValue]) => (
          <Cell key={designKey}>
            <Grid cols={Object.values(atomTagColors).length + 1} gutter={[0, 8]}>
              <Cell>
                <Label>{designKey}</Label>
              </Cell>
              {Object.entries(atomTagColors).map(([colorKey, colorValue]) => (
                <Cell
                  key={colorKey}
                  style={{
                    padding: 8,
                    ...(colorValue === atomTagColors.SURFACE && {backgroundColor: 'var(--c-base-inverse)'})
                  }}
                >
                  <AtomTag
                    icon={icon}
                    label="label"
                    color={colorValue}
                    design={designValue}
                    closeIcon={closeIcon}
                    closeLabel="clear"
                  />
                </Cell>
              ))}
            </Grid>
          </Cell>
        ))}
      </Grid>
      <Paragraph>When the Tag has an associated action, specific hover and focus styles will be applied.</Paragraph>
      <Grid gutter={[8, 0]} rows={3}>
        <Cell>
          <Grid cols={Object.values(atomTagColors).length + 1} gutter={[0, 8]}>
            <Cell />
            {Object.entries(atomTagColors).map(([colorKey, colorValue]) => (
              <Cell key={colorKey}>
                <Label>{colorKey}</Label>
              </Cell>
            ))}
          </Grid>
        </Cell>
        {Object.entries(atomTagDesigns).map(([designKey, designValue]) => (
          <Cell key={designKey}>
            <Grid cols={Object.values(atomTagColors).length + 1} gutter={[0, 8]}>
              <Cell>
                <Label>{designKey}</Label>
              </Cell>
              {Object.entries(atomTagColors).map(([colorKey, colorValue]) => (
                <Cell
                  key={colorKey}
                  style={{
                    padding: 8,
                    ...(colorValue === atomTagColors.SURFACE && {backgroundColor: 'var(--c-base-inverse)'})
                  }}
                >
                  <AtomTag
                    icon={icon}
                    label="label"
                    color={colorValue}
                    design={designValue}
                    closeIcon={closeIcon}
                    onClick={() => console.log({color: colorValue, design: designValue})}
                    closeLabel="clear"
                  />
                </Cell>
              ))}
            </Grid>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleColor.displayName = 'ArticleColor'

ArticleColor.propTypes = {
  className: PropTypes.string
}

export default ArticleColor
