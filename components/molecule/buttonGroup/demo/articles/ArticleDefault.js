import {useState} from 'react'
import {useDebounce} from 'react-use'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import MoleculeButtonGroup from '../../src/index.js'

const ArticleDefault = ({className}) => {
  const [value, setValue] = useState('–')
  useDebounce(() => setValue('–'), 1000, [value])
  const handleClick = value => () => setValue(value)
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>a ButtonGroup is a group of buttons that trigger some action (or link)</Paragraph>
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
