import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Input, Label, Paragraph} from '@s-ui/documentation-library'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs/index.js'

import MoleculeDropdownOption from '../src/index.js'
import {CLASS_DEMO_OPTION} from './config.js'

const ArticleHighLight = ({className}) => {
  const ref = useRef()
  const [node, setNode] = useState()
  const [data, setData] = useState([])
  const [value, setValue] = useState('value')
  const [highlightValue, setHighlightValue] = useState()
  const [highlightQuery, setHighlightQuery] = useState('val')
  const updateNode = nodeRef => {
    const nodeHTML = nodeRef?.outerHTML
    if (nodeHTML !== node) setNode(nodeHTML)
  }

  const onSelectHandler = (event, {value, selected}) => {
    setData(selected ? [value] : [])
  }

  const handleValueChange = event => {
    const newValue = event.target.value
    setValue(newValue)
    setData(data.length ? [newValue] : [])
  }

  return (
    <Article className={className}>
      <H2>HighLight</H2>
      <Paragraph>
        The component can highlight some parts of a given children element using the <Code>highlightQuery</Code>{' '}
        (string) prop. If the default children value needs to be replaced somehow, use the <Code>highlightValue</Code>{' '}
        (string) prop to get that effect.
      </Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell span={3}>
          <Label>Element</Label>
        </Cell>
        <Cell span={3} className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption
            ref={useMergeRefs(ref, updateNode)}
            value={value}
            onSelect={onSelectHandler}
            highlightValue={highlightValue}
            highlightQuery={highlightQuery}
          >
            default children if no highlightValue prop given
          </MoleculeDropdownOption>
        </Cell>
        <Cell>
          <Label>Value</Label>
        </Cell>
        <Cell>
          <Label>Highlight Value</Label>
        </Cell>
        <Cell>
          <Label>Highlight Query</Label>
        </Cell>
        <Cell>
          <Input value={value} onChange={handleValueChange} />
        </Cell>
        <Cell>
          <Input value={highlightValue} onChange={event => setHighlightValue(event.target.value)} />
        </Cell>
        <Cell>
          <Input value={highlightQuery} onChange={event => setHighlightQuery(event.target.value)} />
        </Cell>
        <Cell span={3}>
          <Label>Result</Label>
        </Cell>
        <Cell span={3}>
          <Input readOnly value={JSON.stringify(data, null, 2)} fullWidth disabled />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleHighLight.displayName = 'ArticleHighLight'

ArticleHighLight.propTypes = {
  className: PropTypes.string
}

export default ArticleHighLight
