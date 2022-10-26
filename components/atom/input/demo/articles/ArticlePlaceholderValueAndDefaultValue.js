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
  Paragraph
} from '@s-ui/documentation-library'

import AtomInput from '../../src/index.js'

const ArticlePlaceholderValueAndDefaultValue = ({className}) => {
  const [placeholder, setPlaceholder] = useState('placeholder')
  const [value, setValue] = useState(undefined)
  const [defaultValue, setDefaultValue] = useState('default value')
  return (
    <Article className={className}>
      <H2>value, defaultValue and placeholder</H2>
      <Paragraph>
        <Code>value</Code>: controlled component.
      </Paragraph>
      <Paragraph>
        <Code>defaultValue</Code>: for uncontrolled component
      </Paragraph>
      <Paragraph>
        <Code>placeholder</Code>: the placeholder for empty component value
        hint.
      </Paragraph>
      <Grid gutter={[8, 8]} cols={3}>
        <Cell>
          <Label fullWidth>placeholder</Label>
        </Cell>
        <Cell>
          <Label fullWidth>defaultValue</Label>
        </Cell>
        <Cell>
          <Label fullWidth>value</Label>
        </Cell>
        <Cell>
          <Input
            fullWidth
            value={placeholder}
            onChange={event => setPlaceholder(event.target.value)}
          />
        </Cell>
        <Cell>
          <Input
            fullWidth
            defaultValue={defaultValue}
            onChange={event => setDefaultValue(event.target.value)}
          />
        </Cell>
        <Cell>
          <Input
            fullWidth
            defaultValue={value}
            onChange={event => setValue(event.target.value)}
          />
        </Cell>
        <Cell span={3}>
          <Label>result:</Label>
        </Cell>
        <Cell span={3}>
          <AtomInput
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={event => setValue(event.target.value)}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticlePlaceholderValueAndDefaultValue.propTypes = {
  className: PropTypes.string
}

ArticlePlaceholderValueAndDefaultValue.displayName =
  'ArticlePlaceholderValueAndDefaultValue'

export default ArticlePlaceholderValueAndDefaultValue
