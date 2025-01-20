import {Article, Box, Cell, Code, Grid, H2, Paragraph} from '@s-ui/documentation-library'
import AtomInput from '@s-ui/react-atom-input'

import AtomLabel, {type FontSize, AtomLabelFontSizes} from '../../src/index'
import {flexCenteredStyle} from '../settings.js'

const ArticleFontSize = ({className}: {className?: string}) => {
  const labelFontSizes = [['default', undefined], ...Object.entries(AtomLabelFontSizes)] as Array<[string, FontSize]>
  return (
    <Article>
      <H2>FontSize</H2>
      <Paragraph>
        The component provides 4 different sizes provided using the <Code>fontSize</Code> prop
      </Paragraph>
      <Grid cols={5} gutter={[8, 8]}>
        {labelFontSizes.map(([key, value], index) => (
          <Cell key={index} style={flexCenteredStyle}>
            <Box>
              <AtomLabel
                name={`atomLabelName-${key}`}
                htmlFor={`labelFontSize-${key}`}
                text={`Size ${value as string}`}
                fontSize={value}
              />
              <AtomInput id={`labelFontSize-${key}`} />
            </Box>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

export default ArticleFontSize
