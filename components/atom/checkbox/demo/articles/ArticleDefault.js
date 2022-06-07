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
      setStatus(checked === true ? 'CHECKED' : 'UNCHECKED')
      return undefined
    } else if (setter === 'RadioButtonGroup') {
      if (args !== undefined) {
        setStatus(args)
      }
    }
    console.log(args) // eslint-disable-line no-console
    return undefined
  }
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>Default style of AtomCheckbox.</Paragraph>
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
            checkedIcon={() => ICONS.aiOutlineCheck}
            indeterminateIcon={() => ICONS.aiOutlineLine}
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
