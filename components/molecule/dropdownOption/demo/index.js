/* eslint-disable react/prop-types, no-unused-vars, no-console */

import MoleculeDropdownOption, {
  MoleculeDropdownOptionTextWrapStyles
} from 'components/molecule/dropdownOption/src/index.js'

import BasicDropdownOptions from './BasicDropdownOptions/index.js'
import CheckboxDropdownOptions from './CheckboxDropdownOptions/index.js'
import HighlightDropdownOptions from './HighlightDropdownOptions/index.js'

import './index.scss'

const BASE_CLASS_DEMO = 'DemoMoleculeDropdownOption'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_OPTION = `${BASE_CLASS_DEMO}-option`

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1>Dropdown Options</h1>
      <h2>Dynamic</h2>
      <div className={CLASS_DEMO_SECTION}>
        <h3>Basic Options & unique selection</h3>
        <BasicDropdownOptions options={['john', 'paul', 'george', 'ringo']} />
        <h3>Checkbox Options & multiple selection</h3>
        <CheckboxDropdownOptions
          options={['john', 'paul', 'george', 'ringo']}
        />
        <h3>Highlight options</h3>
        <HighlightDropdownOptions
          options={['john', 'paul', 'george', 'ringo']}
        />
      </div>
      <h2>Static</h2>
      <div className={CLASS_DEMO_SECTION}>
        <h3>Basic</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption value="option-basic">
            basic
          </MoleculeDropdownOption>
        </div>
        <h3>Basic selected </h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption value="option-selected" selected>
            selected
          </MoleculeDropdownOption>
        </div>
        <h3>Disabled</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption value="option-disabled" disabled>
            disabled
          </MoleculeDropdownOption>
        </div>
        <h3>With checkbox</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption value="option-checkbox" checkbox>
            checkbox
          </MoleculeDropdownOption>
        </div>
        <h3>With checkbox selected</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption value="option-selected" checkbox selected>
            selected
          </MoleculeDropdownOption>
        </div>
        <h3>With text highlighted</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption value="indiana jones" highlightQuery="indi">
            Indiana Jones
          </MoleculeDropdownOption>
        </div>
        <h3>With text highlighted (custom children content)</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption
            value="indiana jones"
            highlightQuery="indi"
            highlightValue="indiana jones"
          >
            🤠 with custom children content (not value)
          </MoleculeDropdownOption>
        </div>
        <h3>With callback (click & enter)</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption
            value="Indiana Jones"
            checkbox
            onClick={(e, {value}) => {
              window.alert(value)
            }}
          >
            Indiana Jones
          </MoleculeDropdownOption>
        </div>
        <h3>With callback (click & space)</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption
            value="Indiana Jones"
            checkbox
            onSelectKey=" "
            onClick={(e, {value}) => {
              window.alert(value)
            }}
          >
            Indiana Jones
          </MoleculeDropdownOption>
        </div>
        <h3>With some HTML as children</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption value="sparta" checkbox selected>
            <span>
              this is <em>sparta</em> 😎
            </span>
          </MoleculeDropdownOption>
        </div>
        <h3>Ellipsis</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption value="option-basic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </MoleculeDropdownOption>
        </div>
        <h3>Two lines text clamp (deprecated prop withTwoLinesText)</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption value="option-basic" withTwoLinesText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </MoleculeDropdownOption>
        </div>
        <h3>With Two Lines Wrap</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption
            value="option-basic"
            textWrap={MoleculeDropdownOptionTextWrapStyles.TWO_LINES}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MoleculeDropdownOption>
        </div>
        <h3>With Three Lines Wrap</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption
            value="option-basic"
            textWrap={MoleculeDropdownOptionTextWrapStyles.THREE_LINES}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MoleculeDropdownOption>
        </div>
        <h3>With Line Wrap</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption
            value="option-basic"
            textWrap={MoleculeDropdownOptionTextWrapStyles.LINE_WRAP}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MoleculeDropdownOption>
        </div>
        <h3>With description</h3>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption
            value="option-basic"
            description="Ut enim ad minim veniam"
          >
            Lorem ipsum dolor sit amet.
          </MoleculeDropdownOption>
        </div>
      </div>
    </div>
  </div>
)

export default Demo
