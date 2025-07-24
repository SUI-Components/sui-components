import PropTypes from 'prop-types'

import {Article, Bold, H2, Paragraph} from '@s-ui/documentation-library'

import AtomCard, {atomCardCornerSize, atomCardElevation} from '../../src/index.js'
import Demo from '../utils/Demo/index.js'

const ArticleCustom = ({className}) => {
  return (
    <Article className={className}>
      <H2>Customize</H2>
      <Paragraph>Combine all the props to create cards closer each design by setting proper prop values.</Paragraph>
      <Demo>
        <div style={{padding: 32}}>
          <AtomCard as="article" isInset cornerSize={atomCardCornerSize.XXXL} elevation={atomCardElevation.XL}>
            <img
              src="https://i.ibb.co/DfPDWbZ5/pexels-markusspiske-113338.jpg"
              aria-hidden="true"
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </AtomCard>
        </div>
      </Demo>
      <Paragraph>
        Cards can also be <Bold>nested</Bold> combining its cornerSizes and elevations properly.
      </Paragraph>
    </Article>
  )
}

ArticleCustom.displayName = 'ArticleCustom'

ArticleCustom.propTypes = {
  className: PropTypes.node
}

export default ArticleCustom
