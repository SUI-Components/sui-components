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
import AtomSkeleton, {atomSkeletonAnimations} from '../src/index.js'

const ArticleAnimation = ({className}) => {
  return (
    <Article className={className}>
      <H2>Animation</H2>
      <Paragraph>
        There are {Object.keys(atomSkeletonAnimations).length} different
        animation props under the <Code>atomSkeletonAnimations</Code> exported
        object. Possible values are{' '}
        {Object.values(atomSkeletonAnimations).join(', ')}.
      </Paragraph>
      <Paragraph>
        By default, the animation is {atomSkeletonAnimations.wave}, and can be
        customized using the prop <Code>animation</Code>
      </Paragraph>
      <Grid cols={10} gutter={[8, 8]}>
        {Object.entries(atomSkeletonAnimations).map(([key, value]) => {
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
