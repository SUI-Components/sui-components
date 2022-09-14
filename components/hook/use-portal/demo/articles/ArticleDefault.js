import {useRef} from 'react'
import {findDOMNode} from 'react-dom'
import {
  H2,
  H4,
  Paragraph,
  Article,
  Box,
  Code,
  Button,
  Anchor
} from '@s-ui/documentation-library'

import usePortal from '../../src/index.js'

const ArticleDefault = ({className}) => {
  const {Portal, portalRef} = usePortal()
  const articleRef = useRef()
  return (
    <Article className={className} ref={articleRef}>
      <H2>Default</H2>
      <Paragraph>
        The portal is default appended at the document body. It is default
        opened unless you define its initial <Code>isOpen</Code> configuration
        settings to false.
      </Paragraph>
      <Button onClick={() => portalRef.current.scrollIntoView()}>
        Scroll into view
      </Button>
      <Portal ref={portalRef} isOpen>
        <Box style={{margin: '0px 16px 16px 16px'}} mode="dark">
          <H4>Default Portal Result </H4>
          <Paragraph>
            This text is portaled at the end of document.body from the{' '}
            <Anchor
              elementType="button"
              onClick={() => articleRef.current.scrollIntoView()}
              style={{
                border: 0,
                padding: 0,
                margin: 0,
                backgroundColor: 'transparent'
              }}
            >
              default demo
            </Anchor>
            !
          </Paragraph>
        </Box>
      </Portal>
    </Article>
  )
}

export default ArticleDefault
