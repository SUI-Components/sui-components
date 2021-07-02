import {Fragment} from 'react'
import PropTypes from 'prop-types'
import {
  H2,
  Article,
  Paragraph,
  Grid,
  Cell,
  Label,
  Code
} from '@s-ui/documentation-library'
import AtomSkeleton, {ATOM_SKELETON_ANIMATIONS} from '../lib'

const ArticleAnimation = ({className}) => {
  return (
    <Article className={className}>
      <H2>Animation</H2>
      <Paragraph>
        There are {Object.keys(ATOM_SKELETON_ANIMATIONS).length} different
        animation props under the <Code>ATOM_SKELETON_ANIMATIONS</Code> exported
        object. Possible values are{' '}
        {Object.values(ATOM_SKELETON_ANIMATIONS).join(', ')}.
      </Paragraph>
      <Paragraph>
        By default, the animation is {ATOM_SKELETON_ANIMATIONS.wave}, and can be
        customized using the prop <Code>animation</Code>
      </Paragraph>
      <Grid cols={10} gutter={[8, 8]}>
        {Object.entries(ATOM_SKELETON_ANIMATIONS).map(([key, value]) => {
          return (
            <Fragment key={key}>
              <Cell>
                <Label>{value}</Label>
              </Cell>
              <Cell span={9}>
                <AtomSkeleton animation={value} />
              </Cell>
            </Fragment>
          )
        })}
      </Grid>
    </Article>
  )
}

ArticleAnimation.propTypes = {
  className: PropTypes.string
}

export default ArticleAnimation
