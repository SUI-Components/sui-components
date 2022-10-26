import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomSlider from '../src/index.js'

const ArticleSliderFullWidth = ({className}) => {
  const [, setUncontrolledState] = useState(50)
  return (
    <Article className={className}>
      <H2>Full Width</H2>
      <Paragraph>
        The <Code>isFullWidth</Code> prop render the slider until box border.
      </Paragraph>
      <AtomSlider
        isFullWidth
        marks={['1 Kilometer', 'All Country']}
        onChange={(event, {value}) => {
          setUncontrolledState(value)
          console.log(event, {value}) // eslint-disable-line no-console
        }}
      />
    </Article>
  )
}

ArticleSliderFullWidth.propTypes = {
  className: PropTypes.string
}

export default ArticleSliderFullWidth
