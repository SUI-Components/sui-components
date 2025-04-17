import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  H3,
  Label,
  ListItem,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  UnorderedList
} from '@s-ui/documentation-library'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import {isFunction} from '../../src/config.js'
import AtomCheckbox from '../../src/index.js'
import {ICONS, PROPS_STATUS, propsFromStatus} from '../settings.js'

const ArticleDefault = ({className}) => {
  const [status, setStatus] = useState('CHECKED')
  const {indeterminate: indeterminateStatus, checked: checkedStatus} = propsFromStatus(status)
  const [values, setValues] = useState(propsFromStatus(status))
  const [outerHTML, setOuterHTML] = useState('')
  const [unchecked, setUnchecked] = useState({
    checked: false,
    indeterminate: false
  })
  const [checked, setChecked] = useState({checked: true, indeterminate: false})
  const [indeterminate, setIndeterminate] = useState({
    checked: false,
    indeterminate: true
  })
  const ref = useMergeRefs(node => {
    if (node) {
      const {checked: nodeChecked, indeterminate: nodeIndeterminate} = node
      const {checked: valueChecked, indeterminate: valueIndeterminate} = values
      if (valueChecked !== nodeChecked || valueIndeterminate !== nodeIndeterminate) {
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
    } else if (setter === 'RadioButtonGroup') {
      if (args !== undefined) {
        setStatus(args)
      }
    }
    console.log(args) // eslint-disable-line no-console
  }

  const clickHandler = setter => (event, args) => {
    const {checked, indeterminate} = args
    isFunction(setter) && setter({checked, indeterminate})
    console.log(args) // eslint-disable-line no-console
  }

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        <Code>AtomCheckbox</Code> is a component that renders an input type="checkbox" styled.
      </Paragraph>
      <Paragraph>
        As all different input types, checkbox admits the <Code>name</Code> (string) and <Code>value</Code> props.
      </Paragraph>
      <Paragraph>
        The checkbox is shown as a square. It has only 2 states using the <Code>checked</Code> (boolean) prop.
      </Paragraph>
      <UnorderedList>
        <ListItem>unchecked: not ticked when disabled.</ListItem>
        <ListItem>checked: is ticked when activated.</ListItem>
      </UnorderedList>
      <Paragraph>
        In some cases, the component is also able to show an indeterminate value using the <Code>indeterminate</Code>{' '}
        (boolean) prop. This is only a visual feature and gives no effect in a form.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup value={status} onChange={handler('RadioButtonGroup')}>
            {Object.keys(PROPS_STATUS).map(value => (
              <RadioButton key={value} value={value} checked={value === status} />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          text-alignment{' '}
          <AtomCheckbox
            ref={ref}
            value="checkBoxValue"
            name="checkBoxName"
            id="checkBoxExample"
            aria-label="checkBoxExampleButton"
            onChange={handler('AtomCheckbox')}
            checkedIcon={ICONS.AiOutlineCheck}
            uncheckedIcon={ICONS.BsSquare}
            indeterminateIcon={ICONS.AiOutlineLine}
            indeterminate={indeterminateStatus}
            checked={checkedStatus}
            data-testid="checkBoxExample"
          />
          <PrimitiveVisuallyHidden>
            <Label htmlFor="checkBoxExample">checkBoxExampleButton</Label>
          </PrimitiveVisuallyHidden>{' '}
          text-alignment{' '}
          <AtomCheckbox
            value="checkBoxNameNoIcon"
            name="checkBoxNameNoIcon"
            id="checkBoxExampleNoIcon"
            aria-label="checkBoxExample"
            onChange={handler('AtomCheckbox')}
            indeterminate={indeterminateStatus}
            checked={checkedStatus}
          />
          <PrimitiveVisuallyHidden>
            <Label htmlFor="checkBoxExampleNoIcon">checkBoxExampleNoIcon</Label>
          </PrimitiveVisuallyHidden>{' '}
          text-alignment
        </Cell>
        <Cell>
          <Label>Checked:</Label> <Code>{`${values.checked}`}</Code>
        </Cell>
        <Cell>
          <Label>Indeterminate:</Label> <Code>{`${values.indeterminate}`}</Code>
        </Cell>
        <Cell>
          <Paragraph elementType="div">
            The component is also forward referenced targeting the native checkbox.
          </Paragraph>
        </Cell>
        <Cell>
          <Paragraph elementType="div">
            <Label>ref</Label>: {outerHTML}
          </Paragraph>
        </Cell>
      </Grid>
      <H3>Uncontrolled</H3>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <AtomCheckbox
            value="checkBox-default-uncontrolled-unchecked"
            name="checkBox-default-uncontrolled-unchecked"
            id="checkBox-default-uncontrolled-unchecked"
            aria-label="checkBoxExampleButton"
            checkedIcon={ICONS.AiOutlineCheck}
            indeterminateIcon={ICONS.AiOutlineLine}
            defaultIndeterminate={PROPS_STATUS.UNCHECKED.indeterminate}
            defaultChecked={PROPS_STATUS.UNCHECKED.checked}
            onChange={clickHandler()}
          />
          <PrimitiveVisuallyHidden>
            <Label htmlFor="checkBox-default-uncontrolled-unchecked">checkBox default uncontrolled unchecked</Label>
          </PrimitiveVisuallyHidden>
        </Cell>
        <Cell>
          <AtomCheckbox
            value="checkBox-default-uncontrolled-indeterminate"
            name="checkBox-default-uncontrolled-indeterminate"
            id="checkBox-default-uncontrolled-indeterminate"
            aria-label="checkBoxExampleButton"
            defaultChecked={PROPS_STATUS.INDETERMINATE.checked}
            checkedIcon={ICONS.AiOutlineCheck}
            defaultIndeterminate={PROPS_STATUS.INDETERMINATE.indeterminate}
            indeterminateIcon={ICONS.AiOutlineLine}
            onChange={clickHandler()}
          />
          <PrimitiveVisuallyHidden>
            <Label htmlFor="checkBox-default-uncontrolled-indeterminate">
              checkBox default uncontrolled indeterminate
            </Label>
          </PrimitiveVisuallyHidden>
        </Cell>
        <Cell>
          <AtomCheckbox
            value="checkBox-default-uncontrolled-checked"
            name="checkBox-default-uncontrolled-checked"
            id="checkBox-default-uncontrolled-checked"
            aria-label="checkBoxExampleButton"
            defaultChecked={PROPS_STATUS.CHECKED.checked}
            checkedIcon={ICONS.AiOutlineCheck}
            defaultIndeterminate={PROPS_STATUS.CHECKED.indeterminate}
            indeterminateIcon={ICONS.AiOutlineLine}
            onChange={clickHandler()}
          />
          <PrimitiveVisuallyHidden>
            <Label htmlFor="checkBox-default-uncontrolled-checked">checkBox default uncontrolled checked</Label>
          </PrimitiveVisuallyHidden>
        </Cell>
      </Grid>
      <H3>Controlled</H3>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <AtomCheckbox
            value="checkBox-default-controlled-unchecked"
            name="checkBox-default-controlled-unchecked"
            id="checkBox-default-controlled-unchecked"
            aria-label="checkBoxExample"
            checkedIcon={ICONS.AiOutlineCheck}
            indeterminateIcon={ICONS.AiOutlineLine}
            indeterminate={unchecked.indeterminate}
            checked={unchecked.checked}
            onChange={clickHandler(setUnchecked)}
          />
          <PrimitiveVisuallyHidden>
            <Label htmlFor="checkBox-default-controlled-unchecked">checkBox default controlled unchecked</Label>
          </PrimitiveVisuallyHidden>
        </Cell>
        <Cell>
          <AtomCheckbox
            value="checkBox-default-controlled-indeterminate"
            name="checkBox-default-controlled-indeterminate"
            id="checkBox-default-controlled-indeterminate"
            aria-label="checkBoxExample"
            checked={indeterminate.checked}
            checkedIcon={ICONS.AiOutlineCheck}
            indeterminate={indeterminate.indeterminate}
            indeterminateIcon={ICONS.AiOutlineLine}
            onChange={clickHandler(setIndeterminate)}
          />
          <PrimitiveVisuallyHidden>
            <Label htmlFor="checkBox-default-controlled-indeterminate">checkBox default controlled indeterminate</Label>
          </PrimitiveVisuallyHidden>
        </Cell>
        <Cell>
          <AtomCheckbox
            value="checkBox-default-controlled-checked"
            name="checkBox-default-controlled-checked"
            id="checkBox-default-controlled-checked"
            aria-label="checkBoxExample"
            checked={checked.checked}
            checkedIcon={ICONS.AiOutlineCheck}
            indeterminate={checked.indeterminate}
            indeterminateIcon={ICONS.AiOutlineLine}
            onChange={clickHandler(setChecked)}
          />
          <PrimitiveVisuallyHidden>
            <Label htmlFor="checkBox-default-controlled-checked">checkBox default controlled checked</Label>
          </PrimitiveVisuallyHidden>
        </Cell>
      </Grid>
      <Paragraph>
        It combines and updates its inner <Code>checked</Code> and <Code>indeterminate</Code> states.
      </Paragraph>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
