import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Box, Code, H2, Label, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import AtomPopover, {atomPopoverTriggers} from '../../src/index.js'
import IconClose from '../Icons/IconClose.js'

const ArticleCloseIcon = ({className, content: Content}) => {
  const [isVisible, setIsVisible] = useState('true')
  const [onCloseCounter, setOnCloseCounter] = useState(0)
  const onCloseHandler = value => () => setOnCloseCounter(value)
  return (
    <Article className={className}>
      <H2>Close Icon</H2>
      <Paragraph>
        Sometimes, the popover needs to implement a close icon to tackle the closing action. AtomPopover have a{' '}
        <Code>closeIcon</Code> (React Node) prop to set the provided element on the top left position. When the element
        is pressed, the <Code>onClose</Code> event is fired.
      </Paragraph>
      <RadioButtonGroup value={isVisible} fullWidth>
        <RadioButton value="true" label="true" onClick={() => setIsVisible('true')} />
        <RadioButton value="false" label="false" onClick={() => setIsVisible('false')} />
      </RadioButtonGroup>
      <Box style={{display: 'flex', justifyContent: 'center'}}>
        <AtomPopover
          isVisible
          content={<Content />}
          trigger={atomPopoverTriggers.MANUAL}
          onClose={onCloseHandler(onCloseCounter + 1)}
          closeIcon={isVisible === 'true' ? <IconClose /> : undefined}
        >
          <Box outline>Target</Box>
        </AtomPopover>
      </Box>
      <Label>
        onClose fired {onCloseCounter} time{onCloseCounter !== 1 && 's'}.
      </Label>
    </Article>
  )
}

ArticleCloseIcon.propTypes = {
  className: PropTypes.string,
  content: PropTypes.elementType
}

export default ArticleCloseIcon
