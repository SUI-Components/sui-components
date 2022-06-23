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

const ArticleReferenced = ({className}) => {
  const [refValue, setRefValue] = useState()
  const [code, setCode] = useState('725412')

  const onChangeHandler = (event, {value}) => {
    setCode(value)
  }
  return (
    <Article className={className}>
      <H2>Forward Referenced</H2>
      <Paragraph>
        PinInput value is readed from a hidden input to get the full result of
        the value and to be able to access it without having to transform data.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell span={2}>
          <PinInput
            status="undefined"
            onChange={onChangeHandler}
            defaultValue={code}
            ref={node => {
              node && setRefValue(node.value)
            }}
          />
        </Cell>
        <Cell style={{display: 'flex', flexDirection: 'column'}}>
          <Label>onChange value</Label>
          <Input style={{textAlign: 'center'}} value={code} disabled readOnly />
        </Cell>
        <Cell style={{display: 'flex', flexDirection: 'column'}}>
          <Label>byRef value</Label>
          {refValue && <Input value={refValue} disabled readOnly />}
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleReferenced.propTypes = {
  className: PropTypes.string
}

export default ArticleReferenced
