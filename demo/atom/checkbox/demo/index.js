/* eslint-disable no-console */
import React from 'react'
import AtomIcon from '../../../../components/atom/icon/src'
import AtomCheckbox, {
  withCheckedValue
} from '../../../../components/atom/checkbox/src'

import './index.scss'

const BASE_CLASS_DEMO = `DemoAtomCheckbox`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

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

const AtomCheckboxWithState = withCheckedValue(AtomCheckbox)

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>AtomCheckbox</h1>
      <h2>Dynamic Behaviour</h2>
      <div className={CLASS_SECTION}>
        <h3>Checked (default) & w/ "onChange" handler</h3>
        <p>
          <AtomCheckboxWithState
            checked
            id="checkbox1"
            name="terms-agreement"
            onChange={(ev, {value, name}) => {
              console.log({[name]: value})
            }}
          />
        </p>
      </div>
      <div className={CLASS_SECTION}>
        <h3>Disabled & Checked (default) & w/ "onChange" handler</h3>
        <p>
          <AtomCheckboxWithState
            checked
            disabled
            id="checkbox2"
            name="older-than-18"
            onChange={(ev, {value, name}) => {
              console.log({[name]: value})
            }}
          />
        </p>
      </div>
      <h2>Use Cases</h2>
      <div className={CLASS_SECTION}>
        <h3>Unchecked & Disabled</h3>
        <AtomCheckbox id="checkbox5" disabled />
      </div>
      <div className={CLASS_SECTION}>
        <h3>Checked & disabled</h3>
        <AtomCheckbox id="checkbox6" disabled checked />
      </div>
      <h2>Modifiers</h2>
      <div className={CLASS_SECTION}>
        <h3>StyledIcon</h3>
        <AtomCheckboxWithState id="checkbox7" checked styledIcon={IconCheck} />
      </div>
    </div>
  )
}

export default Demo
