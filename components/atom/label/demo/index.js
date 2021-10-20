import AtomLabel, {AtomLabelTypes, AtomLabelFontSizes} from '../src'
import AtomIcon from '@s-ui/react-atom-icon'
import AtomInput from '@s-ui/react-atom-input'
import AtomCheckbox from '@s-ui/react-atom-checkbox'
import AtomButton from '@s-ui/react-atom-button'

import {
  H1,
  H2,
  Paragraph,
  Article,
  Grid,
  Cell,
  Box,
  Code,
  AntDesignIcon
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
    <div className="sui-StudioPreview">
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
                  text={`Label ${value}`}
                  optionalText="(Optional)"
                  type={value}
                />
                <AtomInput />
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
            <AtomInput key={0} />,
            <AtomCheckbox
              key={1}
              checkedIcon={() => (
                <AtomIcon>
                  <AntDesignIcon
                    icon="AiOutlineCheck"
                    style={{color: 'currentColor'}}
                  />
                </AtomIcon>
              )}
              intermediateIcon={() => (
                <AtomIcon>
                  <AntDesignIcon
                    icon="AiOutlineLine"
                    style={{color: 'currentColor'}}
                  />
                </AtomIcon>
              )}
            />,
            <AtomButton key={2}>Button</AtomButton>
          ].map((component, index) =>
            ['left', undefined, 'right'].map((value, index) => (
              <Cell key={index} style={flexCenteredStyle}>
                <Box>
                  {value === 'right' && component}
                  <AtomLabel
                    name={`atomLabelName-${value}`}
                    for={`labelName-${value}`}
                    text={`Label ${value}`}
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
                    text={`Size ${value}`}
                    fontSize={value}
                  />
                  <AtomInput />
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
