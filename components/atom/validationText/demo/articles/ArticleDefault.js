import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Input,
  Label,
  Paragraph,
  RadioButton
} from '@s-ui/documentation-library'

import AtomValidationText, {AtomValidationTextTypes} from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleDefault = ({className}) => {
  const [mode, setMode] = useState('light')
  return (
    <Article className={className} mode={mode}>
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
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
