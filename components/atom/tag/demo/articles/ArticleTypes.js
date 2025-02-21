import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomTag, {atomTagDesigns} from '../../src/index.js'
import {closeIcon, icon} from '../settings.js'

const ArticleTypes = ({className}) => {
  return (
    <Article className={className}>
      <H2>Types</H2>
      <Paragraph>
        All color variation can be extended by using the <Code>type</Code> prop
      </Paragraph>
      <Grid gutter={[8, 0]} rows={3}>
        <Cell>
          <Grid cols={5} gutter={[0, 8]}>
            <Cell />
            {['alert', 'warning', 'special', 'date'].map(kind => (
              <Cell key={kind}>
                <Label>{kind}</Label>
              </Cell>
            ))}
          </Grid>
        </Cell>
        {Object.entries(atomTagDesigns).map(([designKey, designValue]) => (
          <Cell key={designKey}>
            <Grid cols={5} gutter={[0, 8]}>
              <Cell>
                <Label>{designKey}</Label>
              </Cell>
              {['alert', 'warning', 'special', 'date'].map(kind => (
                <Cell
                  key={kind}
                  style={{
                    padding: 8
                  }}
                >
                  <AtomTag
                    icon={icon}
                    label="label"
                    type={kind}
                    design={designValue}
                    closeIcon={closeIcon}
                    onClick={() => alert('clicked')}
                  />
                </Cell>
              ))}
            </Grid>
          </Cell>
        ))}
      </Grid>
      <Paragraph>
        To customize the extra kinds of types extend the <Code>$atom-tag-types</Code> SCSS variables giving and array of{' '}
        <Code>'name: (color: $valueA, onColor: $valueB)'</Code>
      </Paragraph>
    </Article>
  )
}

ArticleTypes.displayName = 'ArticleTypes'

ArticleTypes.propTypes = {
  className: PropTypes.string
}

export default ArticleTypes
