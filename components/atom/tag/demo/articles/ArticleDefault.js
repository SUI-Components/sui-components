import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Paragraph} from '@s-ui/documentation-library'

import AtomTag, {atomTagDesigns} from 'components/atom/tag/src/index.js'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        Tag has 2 main different ways depending on its props. It can act as an
        anchor or a button (interactive) or just presentational (data display)
        with {Object.keys(atomTagDesigns).length} different designs
      </Paragraph>
      <Grid cols={3}>
        <Cell>
          <Grid cols={3}>
            <Cell>
              <AtomTag label="default solid" design={atomTagDesigns.SOLID} />
            </Cell>
            <Cell>
              <AtomTag
                label="default solid disabled"
                design={atomTagDesigns.SOLID}
                disabled
              />
            </Cell>
            <Cell>
              <AtomTag
                label="default solid read-only"
                design={atomTagDesigns.SOLID}
                readOnly
              />
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid cols={3}>
            <Cell>
              <AtomTag
                label="anchor solid"
                href="#"
                design={atomTagDesigns.SOLID}
              />
            </Cell>
            <Cell>
              <AtomTag
                label="anchor solid disabled"
                href="#"
                design={atomTagDesigns.SOLID}
                disabled
              />
            </Cell>
            <Cell>
              <AtomTag
                label="anchor solid read-only"
                href="#"
                design={atomTagDesigns.SOLID}
                readOnly
              />
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid cols={3}>
            <Cell>
              <AtomTag
                label="button solid"
                onClick={() => {}}
                design={atomTagDesigns.SOLID}
              />
            </Cell>
            <Cell>
              <AtomTag
                label="button solid disabled"
                onClick={() => {}}
                design={atomTagDesigns.SOLID}
                disabled
              />
            </Cell>
            <Cell>
              <AtomTag
                label="button solid disabled"
                onClick={() => {}}
                design={atomTagDesigns.SOLID}
                readOnly
              />
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <AtomTag label="default outline" design={atomTagDesigns.OUTLINE} />
        </Cell>
        <Cell>
          <AtomTag
            label="anchor outline"
            href="#"
            design={atomTagDesigns.OUTLINE}
          />
        </Cell>
        <Cell>
          <AtomTag
            label="button outline"
            onClick={() => {}}
            design={atomTagDesigns.OUTLINE}
          />
        </Cell>
      </Grid>
      <Paragraph>
        All of them can be outlined (design), disabled and read-only
      </Paragraph>
      <Grid cols={3}>
        <Cell>
          <AtomTag label="default outline" design="outline" />
        </Cell>
        <Cell>
          <AtomTag label="anchor outline" href="#" design="outline" />
        </Cell>
        <Cell>
          <AtomTag label="button outline" onClick={() => {}} design="outline" />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
