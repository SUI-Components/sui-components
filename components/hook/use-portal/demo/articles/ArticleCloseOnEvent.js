import {useState, useRef} from 'react'
import {
  H2,
  Paragraph,
  Article,
  Box,
  RadioButton,
  Grid,
  Cell
} from '@s-ui/documentation-library'

import usePortal from '../../src/index.js'

const ArticleCloseOnEvent = ({className}) => {
  const targetedRef = useRef()
  const [isCloseOnOutsideClick, setIsCloseOnOutsideClick] = useState(true)
  const [isCloseOnEsc, setIsCloseOnEsc] = useState(false)

  const {Portal} = usePortal({
    hasCloseOnOutsideClick: isCloseOnOutsideClick,
    hasCloseOnEsc: isCloseOnEsc,
    target: ref.current,
    isOpen: true
  })
  return (
    <Article className={className}>
      <H2>Close on 'Esc' or outside click</H2>
      <Grid cols={1} gutter={[8,8]}>
        <Cell>
          <RadioButton
            label="hasCloseOnOutsideClick"
            checked={isCloseOnOutsideClick}
            onClick={() => setIsCloseOnOutsideClick(!isCloseOnOutsideClick)}
          />
        </Cell>
        <Cell>
          <div className="target" ref={targetedRef} />
        </Cell>
      </Grid>
      <Portal>
        <Box mode="dark">
          <Paragraph>This text is closed when clicking outside!</Paragraph>
        </Box>
      </Portal>
    </Article>
  )
}

export default ArticleCloseOnEvent
