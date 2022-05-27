import {useState} from 'react'
import PropTypes from 'prop-types'
import {useDebounce} from 'react-use'

import AtomButton from '@s-ui/react-atom-button'
import {
  Article,
  H2,
  Paragraph,
  Label,
  Code,
  Grid,
  Cell
} from '@s-ui/documentation-library'

import MoleculeButtonGroup from '../../src/index.js'

const ArticleDefault = ({className}) => {
  const [value, setValue] = useState('–')
  useDebounce(() => setValue('–'), 1000, [value])
  const handleClick = value => () => setValue(value)
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        a ButtonGroup is a group of buttons that trigger some action (or link)
      </Paragraph>
      <Grid gutter={[8, 8]} cols={1}>
        <Cell>
          <MoleculeButtonGroup>
            <AtomButton onClick={handleClick('A')}>A</AtomButton>
            <AtomButton onClick={handleClick('B')}>B</AtomButton>
            <AtomButton onClick={handleClick('C')}>C</AtomButton>
          </MoleculeButtonGroup>
        </Cell>
        <Cell>
          <Label>Last value</Label>: <Code>{value}</Code>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
