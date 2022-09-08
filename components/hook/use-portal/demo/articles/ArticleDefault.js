import {
  H2,
  H4,
  Paragraph,
  Article,
  Box,
  Code,
  Button
} from '@s-ui/documentation-library'

import usePortal from '../../src/index.js'

const ArticleDefault = ({className}) => {
  const {Portal, portalRef} = usePortal()
  const clickHandler = () => portalRef.current.scrollIntoView()
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The portal is default appended at the document body. It is default
        opened unless you define its initial <Code>isOpen</Code> configuration
        settings to false.
      </Paragraph>
      <Button onClick={clickHandler}>Scroll into view</Button>
      <Portal isOpen>
        <Box style={{margin: '0 16px'}}>
          <H4>Default Portal Result </H4>
          <Paragraph>
            This text is portaled at the end of document.body!
          </Paragraph>
        </Box>
      </Portal>
    </Article>
  )
}

export default ArticleDefault
