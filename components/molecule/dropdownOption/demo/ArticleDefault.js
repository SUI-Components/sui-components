import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Input, Label, Paragraph, RadioButton} from '@s-ui/documentation-library'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs/index.js'

import MoleculeDropdownOption from '../src/index.js'
import {CLASS_DEMO_OPTION} from './config.js'

const ArticleDefault = ({className}) => {
  const [children, setChildren] = useState('children')
  const [value, setValue] = useState('value')
  const [selected, setSelected] = useState(false)
  const [checkbox, setCheckbox] = useState()
  const [disabled, setDisabled] = useState()
  const [data, setData] = useState([])

  const ref = useRef()
  const [node, setNode] = useState()

  const onSelectHandler = (event, {value}) => {
    if (data.includes(value)) {
      setData(data.filter(element => element !== value))
      setSelected(false)
    } else {
      setData([...data, value])
      setSelected(true)
    }
  }

  const onValueChangeHandler = event => {
    setValue(event.target.value)
    if (data.includes(value)) {
      setData(data.map(item => (item === value ? event.target.value : item)))
    } else {
      if (selected) {
        setData([...data, event.target.value])
      }
    }
  }

  const selectedClickHandler = () => {
    setSelected(!selected)
    if (!selected) {
      setData([...data, value])
    } else {
      setData(data.filter(element => element !== value))
    }
  }

  const updateNode = nodeRef => {
    const nodeHTML = nodeRef?.outerHTML
    if (nodeHTML !== node) setNode(nodeHTML)
  }

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The default dropdown option consists on a list item element with a <Code>value</Code> (string, value or object)
        prop, a <Code>selected</Code> (boolean) prop and an inner <Code>children</Code> (react-node) prop.
      </Paragraph>
      <Grid cols={5} gutter={[8, 8]}>
        <Cell span={5}>
          <Label>Element</Label>
        </Cell>
        <Cell span={5} className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption
            ref={useMergeRefs(ref, updateNode)}
            value={value}
            selected={selected}
            onSelect={onSelectHandler}
            checkbox={checkbox}
            disabled={disabled}
          >
            {children}
          </MoleculeDropdownOption>
        </Cell>
        <Cell>
          <Label>Children</Label>
        </Cell>
        <Cell>
          <Label>Value</Label>
        </Cell>
        <Cell>
          <Label>Selected</Label>
        </Cell>
        <Cell>
          <Label>Checkbox</Label>
        </Cell>
        <Cell>
          <Label>Disabled</Label>
        </Cell>
        <Cell>
          <Input value={children} onChange={event => setChildren(event.target.value)} />
        </Cell>
        <Cell>
          <Input value={value} onChange={onValueChangeHandler} />
        </Cell>
        <Cell>
          <RadioButton
            checked={selected}
            onClick={selectedClickHandler}
            label={selected ? 'selected' : 'not selected'}
          />
        </Cell>
        <Cell>
          <RadioButton checked={checkbox} onClick={() => setCheckbox(!checkbox)} label={checkbox ? 'true' : 'false'} />
        </Cell>
        <Cell>
          <RadioButton checked={disabled} onClick={() => setDisabled(!disabled)} label={disabled ? 'true' : 'false'} />
        </Cell>
        <Cell span={5}>
          <Label>Result</Label>
        </Cell>
        <Cell span={5}>
          <Input readOnly value={JSON.stringify(data, null, 2)} fullWidth disabled />
        </Cell>
        <Cell span={5}>
          <Label>DOM Element</Label>
        </Cell>
        <Cell span={5}>
          <Paragraph elementType="div">{ref?.current?.outerHTML}</Paragraph>
        </Cell>
      </Grid>
      <Paragraph>
        The <Code>checkbox</Code> (boolean) prop allows the possibility to include a checkbox input type to the rendered
        element.
      </Paragraph>
      <Paragraph>
        The <Code>disabled</Code> (boolean) prop allows the possibility to disable the element also.
      </Paragraph>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
