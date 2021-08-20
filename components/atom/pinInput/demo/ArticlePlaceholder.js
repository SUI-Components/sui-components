import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Input,
  Grid,
  Cell,
  Label
} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import {useState} from 'react'

const ArticlePlaceHolder = ({className}) => {
  const [code, setCode] = useState('')
  const [placeholder, setPlaceholder] = useState('🍄')

  const onChangePlaceHolderHandler = event => {
    setPlaceholder(event.target.value)
  }

  const onChangeCodeHandler = (event, args = {}) => {
    setCode(args.value || event.target.value)
  }

  return (
    <Article className={className}>
      <H2>Placeholder</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum earum
        nobis, deserunt voluptate labore illo, temporibus ex iure aliquam
        tempore accusamus, aliquid velit magni eius! A at molestias sunt!
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
            onChangeHandler={onChangeCodeHandler}
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
