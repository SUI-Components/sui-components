import {useState} from 'react'
import JSONView from 'react-json-view'

import PropTypes from 'prop-types'

import {
  AntDesignIcon,
  Article,
  Button,
  Cell,
  Code,
  Grid,
  H2,
  H3,
  Input,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomCheckbox, {atomCheckboxSizes, atomCheckboxStatus} from '../../src/index.js'
import {ICONS} from '../settings.js'

const reloading =
  (setter, delay = 500) =>
  () => {
    setter(true)
    setTimeout(() => {
      setter(false)
    }, delay)
  }

const ArticlePlayground = ({className}) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('name')
  const [value, setValue] = useState('value')
  const [defaultState, setDefaultState] = useState([false, false]) // defaultChecked: false, defaultIndeterminate: false
  const [defaultChecked, defaultIndeterminate] = defaultState
  const [state, setState] = useState([undefined, undefined]) // checked: false, indeterminate: false
  const [checked, indeterminate] = state
  const reload = reloading(setLoading)
  const [size, setSize] = useState()
  const [status, setStatus] = useState()
  const [disabled, setDisabled] = useState()
  const isControlled = checked !== undefined || indeterminate !== undefined
  const handleClick = (event, {checked, indeterminate}) => {
    setState(isControlled ? [!checked, false] : [checked, indeterminate])
  }
  const [checkedIcon, setCheckedIcon] = useState()
  const [uncheckedIcon, setUncheckedIcon] = useState()
  const [indeterminateIcon, setIndeterminateIcon] = useState()
  const CheckedIcon = ICONS[checkedIcon]
  const UncheckedIcon = ICONS[uncheckedIcon]
  const IndeterminateIcon = ICONS[indeterminateIcon]
  const [values, setValues] = useState({checked, indeterminate})
  const [outerHTML, setOuterHTML] = useState('')
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

  return (
    <Article className={className}>
      <H2>Playground</H2>
      <Paragraph>paragraph</Paragraph>
      <Grid gutter={[8, 8]} cols={2}>
        <Cell>
          <Grid gutter={[0, 8]} cols={1}>
            <Cell>
              <Label>name</Label>
            </Cell>
            <Cell>
              <Input id="name" value={name} onChange={event => setName(event.target.value)} />
              <PrimitiveVisuallyHidden>
                <Label htmlFor="name">name</Label>
              </PrimitiveVisuallyHidden>
            </Cell>
            <Cell>
              <Label>value</Label>
            </Cell>
            <Cell>
              <Input id="value" value={value} onChange={event => setValue(event.target.value)} />
              <PrimitiveVisuallyHidden>
                <Label htmlFor="value">value</Label>
              </PrimitiveVisuallyHidden>
            </Cell>
          </Grid>
          <Grid cols={2} gutter={[0, 8]}>
            <Cell>
              <Label>defaultChecked</Label>
            </Cell>
            <Cell>
              <Label>defaultIndeterminate</Label>
            </Cell>
            <Cell>
              <RadioButtonGroup
                onChange={(event, value) => {
                  if (value) {
                    const [defaultChecked, defaultIndeterminate] = value
                    setDefaultState([defaultChecked, defaultIndeterminate])
                  }
                }}
              >
                <RadioButton
                  aria-label="status-default-checked"
                  value={[false, false]}
                  label="false"
                  checked={!defaultChecked && !defaultIndeterminate}
                />
                <RadioButton
                  aria-label="status-default-unchecked"
                  value={[true, false]}
                  label="true"
                  checked={defaultChecked}
                />
              </RadioButtonGroup>
            </Cell>
            <Cell>
              <RadioButton
                value={[false, true]}
                aria-label="status-default-indeterminate"
                label="indeterminate"
                checked={defaultIndeterminate}
                onClick={() => setDefaultState([false, true])}
              />
            </Cell>
            <Cell>
              <Label>checked</Label>
            </Cell>
            <Cell>
              <Label>indeterminate</Label>
            </Cell>
            <Cell>
              <RadioButtonGroup
                onChange={(event, checked) => {
                  setState([checked, checked ? false : indeterminate])
                }}
              >
                <RadioButton
                  aria-label="status-checked-undefined"
                  value={undefined}
                  label="undefined"
                  checked={checked === undefined}
                />
                <RadioButton
                  aria-label="status-checked-false"
                  value={false}
                  label="false"
                  checked={checked === false}
                />
                <RadioButton
                  aria-label="status-checked-true"
                  value={true}
                  label="true"
                  checked={checked && !indeterminate}
                />
              </RadioButtonGroup>
            </Cell>
            <Cell>
              <RadioButtonGroup
                onChange={(event, indeterminate) => {
                  setState([indeterminate ? false : checked, indeterminate])
                }}
              >
                <RadioButton
                  aria-label="status-indeterminate-undefined"
                  value={undefined}
                  label="undefined"
                  checked={indeterminate === undefined}
                />
                <RadioButton
                  aria-label="status-indeterminate-false"
                  value={false}
                  label="false"
                  checked={indeterminate === false}
                />
                <RadioButton
                  aria-label="status-indeterminate-true"
                  value={true}
                  label="true"
                  checked={indeterminate && !checked}
                />
              </RadioButtonGroup>
            </Cell>
          </Grid>
          <Grid cols={1} gutter={[0, 8]}>
            <Cell>
              <Label>checkedIcon</Label>
            </Cell>
            <Cell>
              <RadioButtonGroup
                onChange={(event, icon) => {
                  setCheckedIcon(icon)
                }}
              >
                <RadioButton
                  aria-label="status-checked-icon-undefined"
                  value={undefined}
                  label="undefined"
                  checked={checkedIcon === undefined}
                />
                <RadioButton
                  aria-label="status-checked-icon-check"
                  value="AiOutlineCheck"
                  label={<ICONS.AiOutlineCheck />}
                  checked={checkedIcon === 'AiOutlineCheck'}
                />
                <RadioButton
                  aria-label="status-checked-icon-smile"
                  value="BsFillEmojiSmileFill"
                  label={<ICONS.BsFillEmojiSmileFill />}
                  checked={checkedIcon === 'BsFillEmojiSmileFill'}
                />
              </RadioButtonGroup>
            </Cell>
            <Cell>
              <Label>indeterminateIcon</Label>
            </Cell>
            <Cell>
              <RadioButtonGroup
                onChange={(event, icon) => {
                  setIndeterminateIcon(icon)
                }}
              >
                <RadioButton
                  aria-label="status-indeterminate-icon-undefined"
                  value={undefined}
                  label="undefined"
                  checked={indeterminateIcon === undefined}
                />
                <RadioButton
                  aria-label="status-indeterminate-icon-line"
                  value="AiOutlineLine"
                  label={<ICONS.AiOutlineLine />}
                  checked={indeterminateIcon === 'AiOutlineLine'}
                />
                <RadioButton
                  aria-label="status-indeterminate-icon-neutral"
                  value="BsFillEmojiNeutralFill"
                  label={<ICONS.BsFillEmojiNeutralFill />}
                  checked={indeterminateIcon === 'BsFillEmojiNeutralFill'}
                />
              </RadioButtonGroup>
            </Cell>
            <Cell>
              <Label>uncheckedIcon</Label>
            </Cell>
            <Cell>
              <RadioButtonGroup
                onChange={(event, icon) => {
                  setUncheckedIcon(icon)
                }}
              >
                <RadioButton
                  aria-label="status-uncheck-icon-undefined"
                  value={undefined}
                  label="undefined"
                  checked={uncheckedIcon === undefined}
                />
                <RadioButton
                  aria-label="status-uncheck-icon-close"
                  value="AiOutlineClose"
                  label={<ICONS.AiOutlineClose />}
                  checked={uncheckedIcon === 'AiOutlineClose'}
                />
                <RadioButton
                  aria-label="status-uncheck-icon-frown"
                  value="BsFillEmojiFrownFill"
                  label={<ICONS.BsFillEmojiFrownFill />}
                  checked={uncheckedIcon === 'BsFillEmojiFrownFill'}
                />
              </RadioButtonGroup>
            </Cell>
          </Grid>
          <Grid cols={1} gutter={[0, 8]}>
            <Cell>
              <Label>size</Label>
            </Cell>
            <Cell>
              <RadioButtonGroup
                onChange={(event, size) => {
                  setSize(size)
                }}
              >
                <RadioButton
                  aria-label="status-size-undefined"
                  value={undefined}
                  label="undefined"
                  checked={size === undefined}
                />
                <RadioButton
                  aria-label="status-size-small"
                  value={atomCheckboxSizes.SMALL}
                  label={atomCheckboxSizes.SMALL}
                  checked={size === atomCheckboxSizes.SMALL}
                />
                <RadioButton
                  aria-label="status-size-medium"
                  value={atomCheckboxSizes.MEDIUM}
                  label={atomCheckboxSizes.MEDIUM}
                  checked={size === atomCheckboxSizes.MEDIUM}
                />
              </RadioButtonGroup>
            </Cell>
            <Cell>
              <Label>status</Label>
            </Cell>
            <Cell>
              <RadioButtonGroup
                onChange={(event, status) => {
                  setStatus(status)
                }}
              >
                <RadioButton
                  aria-label="status-status-undefined"
                  value={undefined}
                  label="undefined"
                  checked={status === undefined}
                />
                <RadioButton
                  aria-label="status-status-success"
                  value={atomCheckboxStatus.SUCCESS}
                  label={atomCheckboxStatus.SUCCESS}
                  checked={status === atomCheckboxStatus.SUCCESS}
                />
                <RadioButton
                  aria-label="status-status-alert"
                  value={atomCheckboxStatus.ALERT}
                  label={atomCheckboxStatus.ALERT}
                  checked={status === atomCheckboxStatus.ALERT}
                />
                <RadioButton
                  aria-label="status-status-error"
                  value={atomCheckboxStatus.ERROR}
                  label={atomCheckboxStatus.ERROR}
                  checked={status === atomCheckboxStatus.ERROR}
                />
              </RadioButtonGroup>
            </Cell>
          </Grid>
          <Grid cols={1} gutter={[0, 8]}>
            <Cell>
              <Label>Disabled</Label>
            </Cell>
            <Cell>
              <RadioButton
                aria-label="status-disabled"
                value={disabled}
                label="disabled"
                checked={disabled}
                onClick={() => setDisabled(!disabled)}
              />
            </Cell>
            <Cell>
              <Label>Reload</Label>
            </Cell>
            <Cell>
              <Button aria-label="checkbox-reload" style={{display: 'flex', alignItems: 'center'}} onClick={reload}>
                <AtomIcon>
                  <AntDesignIcon icon="AiOutlineReload" style={{color: 'currentColor'}} />
                </AtomIcon>
              </Button>
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={1} gutter={[8, 0]}>
            <Cell>
              <H3>Results:</H3>
            </Cell>
            <Cell>
              {!loading && (
                <AtomCheckbox
                  ref={ref}
                  name={name}
                  value={value}
                  defaultChecked={defaultChecked}
                  defaultIndeterminate={defaultIndeterminate}
                  checked={checked}
                  indeterminate={indeterminate}
                  size={size}
                  status={status}
                  disabled={disabled}
                  checkedIcon={CheckedIcon}
                  uncheckedIcon={UncheckedIcon}
                  indeterminateIcon={IndeterminateIcon}
                  onChange={handleClick}
                  id="playground"
                />
              )}
              <PrimitiveVisuallyHidden>
                <Label htmlFor="playground">playground</Label>
              </PrimitiveVisuallyHidden>
            </Cell>
            <Cell>
              <Label>Checked:</Label> <Code>{`${values.checked}`}</Code>
            </Cell>
            <Cell>
              <Label>Indeterminate:</Label> <Code>{`${values.indeterminate}`}</Code>
            </Cell>
            <Cell>
              <Paragraph elementType="div">
                <Label>ref</Label>: {outerHTML}
              </Paragraph>
            </Cell>
            <Cell>
              <Cell>
                <H3>Props:</H3>
              </Cell>
            </Cell>
            <Cell>
              <JSONView
                src={{
                  name,
                  value,
                  defaultChecked,
                  defaultIndeterminate,
                  checked,
                  indeterminate,
                  size,
                  status,
                  checkedIcon,
                  uncheckedIcon,
                  indeterminateIcon
                }}
                iconStyle="circle"
                displayDataTypes={false}
                displayObjectSize={false}
                indentWidth={2}
              />
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticlePlayground.displayName = 'ArticlePlayground'

ArticlePlayground.propTypes = {
  className: PropTypes.string
}

export default ArticlePlayground
