import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  H2,
  H4,
  Grid,
  Cell,
  Separator
} from '@s-ui/documentation-library'

const ArticleDefault = ({className}) => {
  // const [isVisible] = useState(undefined)
  // const [defaultIsVisible] = useState(undefined)
  return (
    <Article className={className}>
      <H2>Default</H2>

      <Grid cols={6} gutter={[8, 8]}>
        <Cell span={3}>
          <H4>Uncontrolled component</H4>
        </Cell>

        <Cell span={3}>
          <H4>Controlled component</H4>
        </Cell>
        <Cell span={3}>
          <Separator style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>defaultIsVisible</span>
            <span>Uncontrolled</span>
          </Separator>
        </Cell>
        <Cell span={3}>
          <Separator style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>Controlled</span>
            <span>isVisible</span>
          </Separator>
        </Cell>
        <Cell />
        <Cell span={2} />
        <Cell span={2} />
        <Cell />
      </Grid>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'
ArticleDefault.propTypes = {
  className: PropTypes.string,
  content: PropTypes.elementType
}

export default ArticleDefault
