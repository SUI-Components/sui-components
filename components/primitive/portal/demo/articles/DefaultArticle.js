import {useState, useRef} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, Paragraph, Input} from '@s-ui/documentation-library'

import PrimitivePortal from '../../src/index.js'

const DefaultArticle = ({className, container}) => {
  const [data, setData] = useState('portal')
  const ref = useRef()
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>paragraph</Paragraph>
      <Input value={data} onChange={event => setData(event.target.value)} />
      <PrimitivePortal
        className="injected-prop"
        ref={ref}
        container={container}
      >
        <div className={container} style={{width: '100%'}}>
          {data}
        </div>
      </PrimitivePortal>
    </Article>
  )
}

DefaultArticle.propTypes = {
  className: PropTypes.string,
  container: PropTypes.object
}
DefaultArticle.displayName = 'DefaultArticle'

export default DefaultArticle
