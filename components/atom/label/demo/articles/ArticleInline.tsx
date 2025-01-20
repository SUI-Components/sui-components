import {Article, Box, Cell, Code, Grid, H2, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'
import AtomCheckbox from '@s-ui/react-atom-checkbox'
import AtomInput from '@s-ui/react-atom-input'

import AtomLabel, {type Inline} from '../../src/index'
import {CheckedIcon, flexCenteredStyle, IndeterminateIcon} from '../settings.js'

const ArticleInline = ({className}: {className?: string}) => {
  return (
    <Article className={className}>
      <H2>Inline</H2>
      <Paragraph>
        <Code>inline</Code> prop can be used to define where teh element is going to be inline positioned. The value
        options are 'left' and 'right'
      </Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        {[
          <AtomInput key={0} />,
          <AtomCheckbox key={1} checkedIcon={CheckedIcon} intermediateIcon={IndeterminateIcon} />,
          <AtomButton key={2}>Button</AtomButton>
        ].map((component, index) =>
          ['left', undefined, 'right'].map((value, index) => (
            <Cell key={index} style={flexCenteredStyle}>
              <Box>
                {value === 'right' && component}
                <AtomLabel
                  name={`atomLabelName-${value as string}`}
                  htmlFor={`labelName-${value as string}`}
                  text={`Label ${value as string}`}
                  optionalText="(Optional)"
                  inline={value as Inline}
                />
                {value !== 'right' && component}
              </Box>
            </Cell>
          ))
        )}
      </Grid>
    </Article>
  )
}

export default ArticleInline
