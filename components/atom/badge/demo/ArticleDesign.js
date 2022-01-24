import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import AtomBadge, {atomBadgeDesigns, atomBadgeTypes} from '../src/index.js'

const ArticleDesign = ({className}) => {
  return (
    <Article className={className}>
      <H2>Design</H2>
      <div>
        <Paragraph>
          These are the available <Code>design</Code> types of bagdes, which are
          solid by default.
        </Paragraph>
        <Grid cols={9} gutter={10} style={{width: 600}}>
          <Cell>
            <Label>Solid</Label>
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOLID}
              label="success"
              type={atomBadgeTypes.SUCCESS}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOLID}
              label="error"
              type={atomBadgeTypes.ERROR}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOLID}
              label="info"
              type={atomBadgeTypes.INFO}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOLID}
              label="alert"
              type={atomBadgeTypes.ALERT}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOLID}
              label="new"
              type={atomBadgeTypes.NEW}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOLID}
              label="neutral"
              type={atomBadgeTypes.NEUTRAL}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOLID}
              label="primary"
              type={atomBadgeTypes.PRIMARY}
            />
          </Cell>
          <Cell>
            <Label>Soft</Label>
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOFT}
              label="success"
              type={atomBadgeTypes.SUCCESS}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOFT}
              label="error"
              type={atomBadgeTypes.ERROR}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOFT}
              label="info"
              type={atomBadgeTypes.INFO}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOFT}
              label="alert"
              type={atomBadgeTypes.ALERT}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOFT}
              label="new"
              type={atomBadgeTypes.NEW}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOFT}
              label="neutral"
              type={atomBadgeTypes.NEUTRAL}
            />
          </Cell>
          <Cell>
            <AtomBadge
              design={atomBadgeDesigns.SOFT}
              label="primary"
              type={atomBadgeTypes.PRIMARY}
            />
          </Cell>
        </Grid>
      </div>
    </Article>
  )
}

ArticleDesign.propTypes = {
  className: PropTypes.string
}

export default ArticleDesign
