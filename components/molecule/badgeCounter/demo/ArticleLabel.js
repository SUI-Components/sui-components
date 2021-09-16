import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Input,
  Grid,
  Cell,
  Label,
  Paragraph,
  Code,
  Button
} from '@s-ui/documentation-library'
import MoleculeBadgeCounter from '../src'

const ArticleLabel = ({className}) => {
  const [label, setLabel] = useState('0')
  const [labelMax, setLabelMax] = useState('99')
  const handleChange = setter => event => {
    setter(event.target.value)
  }
  return (
    <Article className={className}>
      <H2>Label</H2>
      <Paragraph>
        Its inner value is setted by <Code>label</Code> number prop. It cannot
        be higher to the defined <Code>labelMax</Code> number prop (default 99).
        In case of being higher than the defined max, it will show the maximum
        preceded by a '+' symbol, presenting that there are more than the
        maximum defined value.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <Label fullWidth>label</Label>
        </Cell>
        <Cell>
          <Label fullWidth>labelMax</Label>
        </Cell>
        <Cell>
          <Input onChange={handleChange(setLabel)} value={label} />
        </Cell>
        <Cell>
          <Input onChange={handleChange(setLabelMax)} value={labelMax} />
        </Cell>
        <Cell span={2} />
        <Cell span={2}>
          <MoleculeBadgeCounter label={label} labelMax={labelMax}>
            <Button>children</Button>
          </MoleculeBadgeCounter>
        </Cell>
      </Grid>
      <Paragraph>
        If the number of the bullet exceeds the maximum defined (99) it will
        show the maximum.
      </Paragraph>
    </Article>
  )
}

ArticleLabel.propTypes = {
  className: PropTypes.string
}

export default ArticleLabel
