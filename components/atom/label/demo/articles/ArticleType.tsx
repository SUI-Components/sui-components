import {Article, Box, Cell, Code, Grid, H2, Paragraph} from '@s-ui/documentation-library'
import AtomInput from '@s-ui/react-atom-input'

import AtomLabel, {type Type, AtomLabelTypes} from '../../src/index'
import {flexCenteredStyle} from '../settings.js'

const ArticleType = ({className}: {className?: string}) => {
  const labelTypes = [['default', undefined], ...Object.entries(AtomLabelTypes)] as Array<[string, Type]>

  return (
    <Article className={className}>
      <H2>Type</H2>
      <Paragraph>
        You can select any of the available predefined types using the <Code>type</Code> prop.
      </Paragraph>
      <Grid cols={labelTypes.length} gutter={[8, 8]}>
        {labelTypes.map(([key, value]: [string, Type], index) => (
          <Cell key={index} style={flexCenteredStyle}>
            <Box mode={value === AtomLabelTypes.CONTRAST ? 'dark' : 'light'}>
              <AtomLabel
                name={`atomLabelName-${key}`}
                htmlFor={`labelName-${key}`}
                text={`Label ${value as string}`}
                optionalText="(Optional)"
                type={value}
              />
              <AtomInput />
            </Box>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

export default ArticleType
