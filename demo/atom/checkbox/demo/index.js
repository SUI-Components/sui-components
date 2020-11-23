/* eslint-disable no-console */
import {useState} from 'react'
import AtomIcon from '../../../../components/atom/icon/src'
import AtomCheckbox from '../../../../components/atom/checkbox/src'
import AtomSwitch from '../../../../components/atom/switch/src'

import './index.scss'

const BASE_CLASS_DEMO = `DemoAtomCheckbox`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const noop = () => {}

const IconCheck = props => (
  <AtomIcon {...props}>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.77 20.812l-5-5a.5.5 0 0 0-.707.707l5.417 5.417a.5.5 0 0 0 .76-.062L21.99 2.707a.5.5 0 0 0-.813-.583L7.77 20.812z"
        fillRule="nonzero"
      />
    </svg>
  </AtomIcon>
)

const IconHalfCheck = props => (
  <AtomIcon {...props}>
    <svg viewBox="0 0 24 24">
      <path d="M.5 12.5a.5.5 0 010-1h23a.5.5 0 010 1H.5z" />
    </svg>
  </AtomIcon>
)

const Demo = () => {
  const [checkboxValue, setCheckboxValue] = useState(true)
  const [isNative, setIsNative] = useState(false)

  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Checkbox</h1>
        <AtomSwitch
          label="Choose Design"
          labelLeft="Custom"
          labelRight="Native"
          onToggle={setIsNative}
        />

        <h2>Use Cases</h2>
        <div className={CLASS_SECTION}>
          <h3>Checked with onChange method</h3>
          <AtomCheckbox
            isNative={isNative}
            id="checkbox1"
            checked={checkboxValue}
            checkedIcon={IconCheck}
            onChange={() => setCheckboxValue(!checkboxValue)}
          />
        </div>
        <div className={CLASS_SECTION}>
          <h3>Intermediate</h3>
          <AtomCheckbox
            isNative={isNative}
            id="checkbox2"
            checkedIcon={IconCheck}
            intermediate
            intermediateIcon={IconHalfCheck}
            onChange={noop}
          />
        </div>
        <div className={CLASS_SECTION}>
          <h3>Unchecked</h3>
          <AtomCheckbox
            isNative={isNative}
            id="checkbox3"
            checkedIcon={IconCheck}
            onChange={noop}
          />
        </div>

        <h2>Disabled</h2>
        <h3>Checked</h3>
        <AtomCheckbox
          isNative={isNative}
          id="checkbox4"
          disabled
          checked
          checkedIcon={IconCheck}
          onChange={noop}
        />
        <h3>Intermediate</h3>
        <AtomCheckbox
          isNative={isNative}
          id="checkbox5"
          disabled
          intermediate
          checkedIcon={IconCheck}
          intermediateIcon={IconHalfCheck}
          onChange={noop}
        />
        <h3>Unchecked</h3>
        <AtomCheckbox
          isNative={isNative}
          id="checkbox5"
          disabled
          checkedIcon={IconCheck}
          onChange={noop}
        />
      </div>
    </div>
  )
}

export default Demo
