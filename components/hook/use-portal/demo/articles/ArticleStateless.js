import {useRef} from 'react'
import {
  H2,
  Paragraph,
  Article,
  Button,
  Box,
  Code
} from '@s-ui/documentation-library'

import usePortal from '../../src/index.js'

const ArticleStateless = ({className}) => {
  const targetedRef = useRef()
  const {Portal, open, close, isOpen} = usePortal({target: targetedRef.current})
  return (
    <Article className={className}>
      <H2>Stateless Control</H2>
      <Paragraph>
        You can use an stateless <Code>Portal</Code> with its <Code>open</Code>{' '}
        and <Code>close</Code>{' '}
      </Paragraph>
      <Paragraph>
        {'const {Portal, open, close, isOpen} = usePortal()'}
      </Paragraph>
      <div className="target" ref={targetedRef} />
      <Portal>
        <Box mode="dark">
          <Button onClick={close}>Close</Button>
        </Box>
      </Portal>
      {!isOpen && <Button onClick={open}>Open</Button>}
    </Article>
  )
}

export default ArticleStateless
