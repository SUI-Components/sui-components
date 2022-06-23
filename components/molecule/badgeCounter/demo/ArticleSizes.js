import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Button,
  Cell,
  Code,
  Grid,
  H2,
  Input,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import MoleculeBadgeCounter, {moleculeBadgeCounterSizes} from '../src/index.js'

const ArticleSizes = ({className}) => {
  const [label, setLabel] = useState('')
  const [size, setSize] = useState()
  const handleChange = setter => event => {
    setter(event.target.value)
  }
  const onSizeChangeHandler = (_, value) => {
    setSize(value)
  }
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        The <Code>size</Code> prop is used to define the desired size
        (default-medium). You can get all available sized from{' '}
        <Code>moleculeBadgeCounterSizes</Code> enum.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label fullWidth>label</Label>
        </Cell>
        <Cell>
          <Input onChange={handleChange(setLabel)} value={label} />
        </Cell>
        <Cell>
          <Label>size</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={size} onChange={onSizeChangeHandler}>
            {[undefined, ...Object.values(moleculeBadgeCounterSizes)].map(
              sizeValue => (
                <RadioButton
                  key={`${sizeValue}`}
                  label={`${sizeValue}`}
                  value={sizeValue}
                  checked={size === sizeValue}
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <Paragraph>
            If user sets size to Small and adds value to teh label, it will
            automatically become Medium size. In case of not having value, it
            will be small sized.
          </Paragraph>
        </Cell>
        <Cell span={1}>
          <MoleculeBadgeCounter size={size} label={label}>
            <Button>children</Button>
          </MoleculeBadgeCounter>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleSizes.propTypes = {
  className: PropTypes.string
}

export default ArticleSizes
