import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Box,
  RadioButton,
  RadioButtonGroup,
  Code
} from '@s-ui/documentation-library'
import AtomPopover, {
  atomPopoverTriggers
} from 'components/atom/popover/src'
import ReMountDebounced from './ReMountDebounced'

const ArticleArrow = ({className, content: Content}) => {
  const [isHidden, setIsHidden] = useState('false')
  const onHandler = value => () => setIsHidden(value)
  return (
    <Article className={className}>
      <H2>Arrow</H2>
      <Paragraph>
        Sometimes, the popover needs to show an arrow targeting the element
        referenced to. AtomPopover have a <Code>hideArrow</Code> (boolean) prop.
      </Paragraph>
      <RadioButtonGroup value={isHidden} fullWidth>
        <RadioButton
          value="true"
          label="true"
          onClick={() => setIsHidden('true')}
        />
        <RadioButton
          value="false"
          label="false"
          onClick={() => setIsHidden('false')}
        />
      </RadioButtonGroup>
      <Box style={{display: 'flex', justifyContent: 'center'}} fullWidth>
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
