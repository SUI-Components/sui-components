import {useRef, useState} from 'react'
import {H2, Paragraph, Article, Button, Box} from '@s-ui/documentation-library'

import usePortal from '../../src/index.js'

const ArticleStateful = ({className}) => {
  const targetedRef = useRef()
  const [isOpened, setIsOpened] = useState(true)
  const openHandler = () => setIsOpened(true)
  const closeHandler = () => setIsOpened(false)
  const {Portal} = usePortal({
    target: targetedRef.current,
    isOpen: isOpened,
    onOpen: openHandler,
    onClose: closeHandler
  })
  return (
    <Article className={className}>
      <H2>Stateful control</H2>
      <Paragraph>asdasd</Paragraph>
      <div className="target" ref={targetedRef} />
      <Portal isOpen={isOpened}>
        <Box mode="dark">
          <Paragraph>
            This is the content of the portal stateful opened.
          </Paragraph>
          <Button onClick={closeHandler}>Close</Button>
        </Box>
      </Portal>
      {!isOpened && <Button onClick={openHandler}>Open</Button>}
    </Article>
  )
}

export default ArticleStateful
