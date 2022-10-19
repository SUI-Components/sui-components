import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Button,
  Code,
  H2,
  Paragraph
} from '@s-ui/documentation-library'

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
      <H2>Stateful Control</H2>
      <Paragraph>
        You can also define the Portal behavior under the <Code>isOpen</Code>{' '}
        (boolean) Portal prop as a controlled component.
      </Paragraph>
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

ArticleStateful.displayName = 'ArticleStateful'

ArticleStateful.propTypes = {
  className: PropTypes.string
}

export default ArticleStateful
