import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Button, Cell, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomPopover from '../../src/index.js'

const ArticleRef = ({className, content: Content}) => {
  const innerRef = useRef()
  const outerRef = useRef()
  const [counter, setCounter] = useState(0)
  const [HTMLPopover, setHTMLPopover] = useState()
  const [HTMLButton, setHTMLButton] = useState()
  setTimeout(() => {
    setHTMLButton(innerRef.current?.outerHTML)
    setHTMLPopover(outerRef.current?.outerHTML)
  }, 100)
  return (
    <Article className={className}>
      <H2>Reference forwarding</H2>
      <Paragraph>
        Reference can be defined at the Wrapped element. Also, the popover element can be referenced.
      </Paragraph>
      <AtomPopover content={<Content />} ref={outerRef} onClose={() => setCounter(counter + 1)}>
        <Button
          onClick={() => {
            setCounter(counter + 1)
          }}
          ref={innerRef}
          outline
          style={{display: 'inline-flex'}}
        >
          Target
        </Button>
      </AtomPopover>
      <br />
      <br />
      <Grid cols={5} gutter={[8, 8]}>
        <Cell>
          <Label>button Ref:</Label>
        </Cell>
        <Cell span={4}>
          <Paragraph>{HTMLButton}</Paragraph>
        </Cell>
        <Cell>
          <Label>popover Ref</Label>
        </Cell>
        <Cell span={4}>
          <Paragraph>{HTMLPopover}</Paragraph>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleRef.propTypes = {
  className: PropTypes.string,
  content: PropTypes.elementType
}

export default ArticleRef
