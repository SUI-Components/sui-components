import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Grid,
  H2,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import AtomBadge from '../src/index.js'
import {extendedColors} from './settings.js'

const ArticleCustomType = ({className}) => {
  return (
    <Article className={className}>
      <H2>Custom Types</H2>
      <Paragraph>
        You can even define some other extra types defining your own vertical
        custom types and looping this defined keys through scss.
      </Paragraph>
      <Grid cols={4} gutter={[8, 0]}>
        <Cell>
          <Grid cols={1} gutter={[0, 8]}>
            <Cell>
              <Label>solid</Label>
            </Cell>
            {extendedColors.map(colorName => (
              <Cell key={colorName}>
                <AtomBadge label={`custom-${colorName}`} type={colorName} />
              </Cell>
            ))}
            <Cell>
              <Label>solid</Label>
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Cell>
            <Label>solid + transparent</Label>
          </Cell>
          {extendedColors.map(colorName => (
            <Cell key={colorName}>
              <AtomBadge
                label={`custom-${colorName}`}
                type={colorName}
                transparent
              />
            </Cell>
          ))}
          <Cell>
            <Label>solid + transparent</Label>
          </Cell>
        </Cell>
        <Cell>
          <Cell>
            <Label>soft + transparent</Label>
          </Cell>
          {extendedColors.map(colorName => (
            <Cell key={colorName}>
              <AtomBadge
                label={`custom-${colorName}`}
                type={colorName}
                transparent
                design="soft"
              />
            </Cell>
          ))}
          <Cell>
            <Label>soft + transparent</Label>
          </Cell>
        </Cell>
        <Cell>
          <Cell>
            <Label>soft</Label>
          </Cell>
          {extendedColors.map(colorName => (
            <Cell key={colorName}>
              <AtomBadge
                label={`custom-${colorName}`}
                type={colorName}
                design="soft"
              />
            </Cell>
          ))}
          <Cell>
            <Label>soft</Label>
          </Cell>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleCustomType.propTypes = {
  className: PropTypes.string
}

export default ArticleCustomType
