import {useState} from 'react'
import PropTypes from 'prop-types'

import {
  Article,
  H2,
  Paragraph,
  RadioButtonGroup,
  RadioButton,
  Code,
  Label,
  Grid,
  Cell
} from '@s-ui/documentation-library'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import AtomCheckbox from '../../src/index.js'
import {ICONS, propsFromStatus, PROPS_STATUS} from '../settings.js'

const ArticleDefault = ({className}) => {
  const [status, setStatus] = useState('CHECKED')
  const {indeterminate, checked} = propsFromStatus(status)
  const [values, setValues] = useState(propsFromStatus(status))
  const [outerHTML, setOuterHTML] = useState('')
  const ref = useMergeRefs(node => {
    if (node) {
      const {checked: nodeChecked, indeterminate: nodeIndeterminate} = node
      const {checked: valueChecked, indeterminate: valueIndeterminate} = values
      if (
        valueChecked !== nodeChecked ||
        valueIndeterminate !== nodeIndeterminate
      ) {
        setValues({checked: nodeChecked, indeterminate: nodeIndeterminate})
      }
      if (outerHTML !== node.outerHTML) {
        setOuterHTML(node.outerHTML)
      }
    }
  })
  const handler = setter => (event, args) => {
    if (setter === 'AtomCheckbox') {
      const {checked} = args
      setStatus(checked === true ? 'UNCHECKED' : 'CHECKED')
      return undefined
    } else if (setter === 'RadioButtonGroup') {
      if (args !== undefined) {
        setStatus(args)
      }
    }
    console.log(args) // eslint-disable-line no-console
    return undefined
  }

  const clickHandler = (event, args) => {
    console.log(args)
  }
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>Default style of AtomCheckbox.</Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <AtomCheckbox
            value="checkBox-default-unchecked"
            name="checkBox-default-unchecked"
            id="checkBox-default-unchecked"
            checkedIcon={ICONS.aiOutlineCheck}
            indeterminateIcon={ICONS.aiOutlineLine}
            defaultIndeterminate={PROPS_STATUS.UNCHECKED.indeterminate}
            defaultChecked={PROPS_STATUS.UNCHECKED.checked}
            onChange={clickHandler}
          />
        </Cell>
        <Cell>
          <AtomCheckbox
            value="checkBox-default-indeterminate"
            name="checkBox-default-indeterminate"
            id="checkBox-default-indeterminate"
            defaultChecked={PROPS_STATUS.INDETERMINATE.checked}
            checkedIcon={ICONS.aiOutlineCheck}
            defaultIndeterminate={PROPS_STATUS.INDETERMINATE.indeterminate}
            indeterminateIcon={ICONS.aiOutlineLine}
            onChange={clickHandler}
          />
        </Cell>
        <Cell>
          <AtomCheckbox
            value="checkBox-default-checked"
            name="checkBox-default-checked"
            id="checkBox-default-checked"
            defaultChecked={PROPS_STATUS.CHECKED.checked}
            checkedIcon={ICONS.aiOutlineCheck}
            defaultIndeterminate={PROPS_STATUS.CHECKED.indeterminate}
            indeterminateIcon={ICONS.aiOutlineLine}
            onChange={clickHandler}
          />
        </Cell>
      </Grid>
      <Paragraph>
        It combines and updates its inner <Code>checked</Code> and{' '}
        <Code>indeterminate</Code> states.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup
            value={status}
            onChange={handler('RadioButtonGroup')}
          >
            {Object.keys(PROPS_STATUS).map(value => (
              <RadioButton
                key={value}
                value={value}
                checked={value === status}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <AtomCheckbox
            ref={ref}
            value="checkBoxValue"
            name="checkBoxName"
            id="checkBoxExample"
            onChange={handler('AtomCheckbox')}
            checkedIcon={ICONS.aiOutlineCheck}
            indeterminateIcon={ICONS.aiOutlineLine}
            indeterminate={indeterminate}
            checked={checked}
          />
        </Cell>
        <Cell>
          <Label>Checked:</Label> <Code>{`${values.checked}`}</Code>
        </Cell>
        <Cell>
          <Label>Indeterminate:</Label> <Code>{`${values.indeterminate}`}</Code>
        </Cell>
        <Cell>
          <Paragraph elementType="div">
            The component is also forward referenced targeting the native
            checkbox.
          </Paragraph>
        </Cell>
        <Cell>
          <Paragraph elementType="div">
            <Label>ref</Label>: {outerHTML}
          </Paragraph>
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
