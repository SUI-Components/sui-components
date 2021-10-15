import AtomLabel, {AtomLabelTypes, AtomLabelFontSizes} from '../src'

import {
  H1,
  H2,
  Paragraph,
  Article,
  Grid,
  Cell,
  Box,
  Input,
  Code,
  Radio,
  Button
} from '@s-ui/documentation-library'

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const Demo = () => {
  const labelTypes = [['default', ''], ...Object.entries(AtomLabelTypes)]

  return (
    <div>
      <H1>Label</H1>
      <Paragraph>
        The Label is the name of the associated field, that explains what is the
        about. It should be clear, concise and short.
      </Paragraph>
      <Article>
        <H2>Type</H2>
        <Paragraph>
          You can select any of the avaliable predefined types using the{' '}
          <Code>type</Code> prop.
        </Paragraph>
        <Grid cols={labelTypes.length} gutter={[8, 8]}>
          {labelTypes.map(([key, value], index) => (
            <Cell key={index} style={flexCenteredStyle}>
              <Box mode={value === AtomLabelTypes.CONTRAST ? 'dark' : 'light'}>
                <AtomLabel
                  name={`atomLabelName-${key}`}
                  for={`labelName-${key}`}
                  text={`label ${value}`}
                  optionalText="(Optional)"
                  type={value}
                />
                <Input />
              </Box>
            </Cell>
          ))}
        </Grid>
      </Article>
      <br />
      <Article>
        <H2>Inline</H2>
        <Paragraph>
          <Code>inline</Code> prop can be used to define where teh element is
          going to be inline positioned. The value options are 'left' and
          'right'
        </Paragraph>
        <Grid cols={3} gutter={[8, 8]}>
          {[
            <Input key={0} />,
            <Radio key={1} />,
            <Button key={2}>Button</Button>
          ].map((component, index) =>
            ['left', undefined, 'right'].map((value, index) => (
              <Cell key={index} style={flexCenteredStyle}>
                <Box>
                  {value === 'right' && component}
                  <AtomLabel
                    name={`atomLabelName-${value}`}
                    for={`labelName-${value}`}
                    text={`label ${value}`}
                    optionalText="(Optional)"
                    inline={value}
                  />
                  {value !== 'right' && component}
                </Box>
              </Cell>
            ))
          )}
        </Grid>
      </Article>
      <br />
      <Article>
        <H2>FontSize</H2>
        <Paragraph>
          The component provides 4 diferent sizes provided using the{' '}
          <Code>fontSize</Code> prop
        </Paragraph>
        <Grid cols={5} gutter={[8, 8]}>
          {[['default', undefined], ...Object.entries(AtomLabelFontSizes)].map(
            ([key, value], index) => (
              <Cell key={index} style={flexCenteredStyle}>
                <Box>
                  <AtomLabel
                    name={`atomLabelName-${key}`}
                    for={`labelName-${key}`}
                    text={`size ${value}`}
                    fontSize={value}
                  />
                  <Input />
                </Box>
              </Cell>
            )
          )}
        </Grid>
      </Article>
    </div>
  )
}

export default Demo
