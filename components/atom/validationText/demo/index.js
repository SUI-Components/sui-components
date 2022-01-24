import {useState} from 'react'
import {
  H1,
  H2,
  Paragraph,
  Article,
  Input,
  Code,
  RadioButton,
  Label,
  Grid,
  Cell
} from '@s-ui/documentation-library'

import AtomValidationText, {AtomValidationTextTypes} from '../src/index.js'
import {flexCenteredStyle} from './settings.js'

export default () => {
  const [mode, setMode] = useState('light')
  return (
    <div className="sui-StudioPreview">
      <H1>Validation Text</H1>
      <Paragraph>
        Validation text is used for indicating whether the entered data is
        correct. It is provided by using the "Help Text" plus one color each.
      </Paragraph>
      <Article mode={mode}>
        <H2>Type</H2>
        <Paragraph>
          using the prop <Code>type</Code> user can inherit the helpText color
          styler for validation text usages.
        </Paragraph>
        <RadioButton
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          label={mode}
        />
        <br />
        <br />
        <Grid
          cols={Object.values(AtomValidationTextTypes).length}
          gutter={[10, 10]}
        >
          {Object.values(AtomValidationTextTypes).map((type, index) => (
            <Cell
              style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
              key={index}
            >
              <Label>{type}</Label>
            </Cell>
          ))}
          {Object.values(AtomValidationTextTypes).map((type, index) => (
            <Cell
              style={{
                ...flexCenteredStyle,
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
              key={index}
            >
              <Input />
              <AtomValidationText type={type} text="validation text" />
            </Cell>
          ))}
        </Grid>
      </Article>
    </div>
  )
}
