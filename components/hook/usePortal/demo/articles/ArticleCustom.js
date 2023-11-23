import PropTypes from 'prop-types'

import {Article, Button, H2, Paragraph} from '@s-ui/documentation-library'

import useTooltip from './ArticleCustom/useTooltip.js'

const ArticleCustom = ({className}) => {
  const [bind, Tooltip] = useTooltip()
  return (
    <Article className={className}>
      <H2>Custom</H2>
      <Paragraph>
        You can use the hook defining custom event handlers to extend its functionalities to may other ways like
        creating tooltips.
      </Paragraph>
      <Button {...bind}>button hovered</Button>
      <Tooltip className="sui-DemoTooltip">
        <Paragraph>hello world</Paragraph>
      </Tooltip>
    </Article>
  )
}

ArticleCustom.displayName = 'ArticleCustom'

ArticleCustom.propTypes = {
  className: PropTypes.string
}

export default ArticleCustom
