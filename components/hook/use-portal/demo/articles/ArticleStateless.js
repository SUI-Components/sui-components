import {useRef, useState} from 'react'
import {H2, Paragraph, Article, Button, Box} from '@s-ui/documentation-library'

import usePortal from '../../src/index.js'

const ArticleStateful = ({className}) => {
  const targetedRef = useRef()
  const {Portal, open, close, isOpen} = usePortal({target: targetRef.current})
  return (
    <Article className={className}>
      <H2>Stateless Control</H2>
      <Paragraph></Paragraph>
      <div className="target" ref={targetedRef} />
      {isOpen ? (
        <Portal>
          <Box mode="dark">
            <Button onClick={close}>Close</Button>
          </Box>
        </Portal>
      ) : (
        <Button onClick={open}>Open</Button>
      )}
    </Article>
  )
}

export default ArticleStateful
