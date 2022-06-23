import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Grid,
  H2,
  Input,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import PinInput from '../src/index.js'

const ArticlePlaceHolder = ({className}) => {
  const [code, setCode] = useState('')
  const [placeholder, setPlaceholder] = useState('🍄')

  const onChangePlaceHolderHandler = event => {
    setPlaceholder(event.target.value)
  }

  const onChangeCodeHandler = (event, {value} = {}) => {
    setCode(value !== undefined ? value : event.target.value)
  }

  return (
    <Article className={className}>
      <H2>Placeholder</H2>
      <Paragraph>
        We can use a placeholder for the component. Each cell gonna use the
        placeholder we defined.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]} style={{width: 400}}>
        <Cell style={{display: 'flex', flexDirection: 'column'}}>
          <Label>placeholder</Label>
          <Input onChange={onChangePlaceHolderHandler} value={placeholder} />
        </Cell>
        <Cell style={{display: 'flex', flexDirection: 'column'}}>
          <Label>value</Label>
          <Input onChange={onChangeCodeHandler} value={code} />
        </Cell>
        <Cell span={2}>
          <PinInput
            placeholder={placeholder}
            onChange={onChangeCodeHandler}
            value={code}
          />
        </Cell>
      </Grid>
      <br />
    </Article>
  )
}

ArticlePlaceHolder.propTypes = {
  className: PropTypes.string
}

export default ArticlePlaceHolder
