import {useRef, useState} from 'react'
import {H2, Paragraph, Article, Button, Box} from '@s-ui/documentation-library'

import usePortal from '../../src/index.js'

const ArticleStateful = ({className}) => {
  const targetedRef = useRef()
  const [isOpened, setIsOpened] = useState(false)
  const openHandler = () => {
    setIsOpened(true)
  }
  const closeHandler = () => {
    setIsOpened(false)
  }
  const {Portal, open, close, portalRef} = usePortal({
    target: targetedRef.current,
    isOpen: isOpened,
    onOpen: openHandler,
    onClose: closeHandler
  })
  console.log({portalRef, targetedRef})
  return (
    <Article className={className}>
      <H2>Stateful control</H2>
      <Paragraph>asdasd</Paragraph>
      <div className="target" ref={targetedRef} />
      <Portal>
        <Box mode="dark">
          <Paragraph>
            This is the content of the portal stateful opened.
          </Paragraph>
          <Button onClick={close}>Close</Button>
        </Box>
      </Portal>
      {!isOpened && <Button onClick={open}>Open</Button>}
    </Article>
  )
}

export default ArticleStateful
