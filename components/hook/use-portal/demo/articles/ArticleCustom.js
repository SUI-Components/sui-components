import {useRef, useState} from 'react'

import {
  Article,
  Code,
  H2,
  Paragraph,
  Button,
  Box
} from '@s-ui/documentation-library'

import useTooltip from './ArticleCustom/useTooltip.js'

const ArticleCustom = ({className}) => {
  const [bind, Tooltip] = useTooltip()
  return (
    <Article className={className}>
      <H2>Custom</H2>
      <Paragraph>
        You can use an stateless <Code>Portal</Code> with its <Code>open</Code>{' '}
        and <Code>close</Code>{' '}
      </Paragraph>
      <Button {...bind}>button hovered</Button>
      <Tooltip>
        <Box mode="dark">
          <Paragraph>hello world</Paragraph>
        </Box>
      </Tooltip>
    </Article>
  )
}

export default ArticleCustom
