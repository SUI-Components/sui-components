import PropTypes from 'prop-types'

import {Article, H2, Input, Label, Paragraph} from '@s-ui/documentation-library'

import Color from '../Color.js'

const ArticleCustomize = ({className, value, onChange = () => null}) => {
  return (
    <Article className={className}>
      <H2>Customize</H2>
      <Paragraph>customizable</Paragraph>
      <Label>customProperty</Label>
      <Input value={value} onChange={onChange} />
      <Color token={`var(--customProperty)`} name="customProperty" />
    </Article>
  )
}

ArticleCustomize.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default ArticleCustomize
