import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Box, Code, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import AtomPopover, {atomPopoverTriggers} from '../../src/index.js'
import ReMountDebounced from '../ReMountDebounced.js'

const ArticleArrow = ({className, content: Content}) => {
  const [isHidden, setIsHidden] = useState('false')
  const onHandler = value => () => setIsHidden(value)
  return (
    <Article className={className}>
      <H2>Arrow</H2>
      <Paragraph>
        Sometimes, the popover needs to show an arrow targeting the element referenced to. AtomPopover have a{' '}
        <Code>hideArrow</Code> (boolean) prop.
      </Paragraph>
      <RadioButtonGroup value={isHidden} fullWidth>
        <RadioButton value="true" label="true" onClick={() => setIsHidden('true')} />
        <RadioButton value="false" label="false" onClick={() => setIsHidden('false')} />
      </RadioButtonGroup>
      <Box style={{display: 'flex', justifyContent: 'center'}}>
        <ReMountDebounced observe={[isHidden]}>
          <AtomPopover
            isVisible
            content={<Content />}
            trigger={atomPopoverTriggers.MANUAL}
            onOpen={onHandler('true')}
            onClose={onHandler('false')}
            hideArrow={isHidden === 'true'}
          >
            <Box outline>Target</Box>
          </AtomPopover>
        </ReMountDebounced>
      </Box>
    </Article>
  )
}

ArticleArrow.propTypes = {
  className: PropTypes.string,
  content: PropTypes.elementType
}

export default ArticleArrow
