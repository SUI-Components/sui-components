import {useRef} from 'react'

import {H2, Paragraph, Article, Code, Box} from '@s-ui/documentation-library'

import usePortal from '../../src/index.js'

const ArticleTarget = ({className}) => {
  const targetedRef = useRef()
  const {Portal} = usePortal({target: targetedRef.current})
  return (
    <Article className={className}>
      <H2>Target</H2>
      <Paragraph>Providing a <Code>target</Code> argument to the hook options will append the declared Portal's children.</Paragraph>
      <div className="target" ref={targetedRef} />
      <Portal>
        <Box mode="dark">
          <Paragraph>
            This text is portaled at the end of the defined target provided in
            options!
          </Paragraph>
        </Box>
      </Portal>
    </Article>
  )
}

export default ArticleTarget
