import {useMemo} from 'react'

import PropTypes from 'prop-types'

import {Article, H3, H4, Paragraph} from '@s-ui/documentation-library'

import LoremIpsum from './LoremIpsum.js'

const Content = ({className, title, number, style}) => {
  const paragraphNumber = useMemo(() => Math.trunc(1 + Math.random() * 3), [])
  return (
    <Article className={className} style={style}>
      <H3>{title}</H3>
      <H4>Tab nº{number}</H4>
      {Array(paragraphNumber)
        .fill(true)
        .map((v, index) => (
          <Paragraph key={index} className="demo-content-paragraph">
            <LoremIpsum
              units="words"
              count={Math.trunc(200 / paragraphNumber)}
              format="plain"
            />
          </Paragraph>
        ))}
    </Article>
  )
}

Content.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  style: PropTypes.object
}

export default Content
