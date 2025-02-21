import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph, Strong} from '@s-ui/documentation-library'

import AtomTag, {atomTagColors, atomTagDesigns} from '../../src/index.js'
import {closeIcon, icon} from '../settings.js'

const ArticleReadOnly = ({className}) => {
  return (
    <Article className={className}>
      <H2>Read Only</H2>
      <Paragraph>
        An actionable button can be set as read only to look like a default one but not being triggerable.
      </Paragraph>
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
                    onClick={() => alert('clicked')}
                    readOnly
                  />
                </Cell>
              ))}
            </Grid>
          </Cell>
        ))}
      </Grid>
      <Paragraph>
        Whenever the <Code>readOnly</Code> boolean prop is set to true will <Strong>never</Strong> trigger the{' '}
        <Code>onClick</Code> handler despite of looking like an actionable button.
      </Paragraph>
    </Article>
  )
}

ArticleReadOnly.displayName = 'ArticleReadOnly'

ArticleReadOnly.propTypes = {
  className: PropTypes.string
}

export default ArticleReadOnly
