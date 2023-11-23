import {useEffect, useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, Label, Paragraph} from '@s-ui/documentation-library'

import MoleculeAvatar from '../../src/index.js'

const ArticleRef = ({className}) => {
  const ref = useRef()
  const [, setRefState] = useState()

  useEffect(() => {
    setRefState(ref)
  }, [ref, setRefState])
  return (
    <Article className={className}>
      <H2>forwardRef</H2>
      <Paragraph>The component is forward referenced so you can access easily to its reference</Paragraph>
      <MoleculeAvatar ref={ref} />
      <br />
      <br />
      <Label>Reference outerHTML:</Label>
      <Paragraph>{ref?.current?.outerHTML}</Paragraph>
    </Article>
  )
}

ArticleRef.propTypes = {
  className: PropTypes.string
}

export default ArticleRef
