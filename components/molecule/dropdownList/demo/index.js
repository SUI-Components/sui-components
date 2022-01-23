/* eslint-disable react/prop-types, no-unused-vars, no-console */
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeDropdownList, {
  moleculeDropdownListDesigns,
  moleculeDropdownListSizes
} from 'components/molecule/dropdownList/src/index.js'

import withStateSingle from './hoc/withStateSingle.js'
import withStateMulti from './hoc/withStateMulti.js'

import {countries} from './data/index.js'

import './index.scss'

const BASE_CLASS_DEMO = 'DemoMoleculeDropdownList'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_LIST = `${BASE_CLASS_DEMO}-list`

const isOpen = true

const MoleculeDropdownOptionListWithStateSingle = withStateSingle(
  MoleculeDropdownList
)
const MoleculeDropdownOptionListWithStateMulti = withStateMulti(
  MoleculeDropdownList
)

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1>Dropdown List</h1>
      <h2>Dynamic</h2>
      <div className={CLASS_DEMO_SECTION}>
        <h3>Single selection</h3>

        <MoleculeDropdownOptionListWithStateSingle visible={isOpen}>
          {countries.map((option, index) => (
            <MoleculeDropdownOption value={option} key={index}>
              {option}
            </MoleculeDropdownOption>
          ))}
        </MoleculeDropdownOptionListWithStateSingle>

        <h3>Multi selection</h3>

        <MoleculeDropdownOptionListWithStateMulti
          visible={isOpen}
          checkbox
          onSelectKey=" "
        >
          {countries.map((option, index) => (
            <MoleculeDropdownOption value={option} key={index}>
              {option}
            </MoleculeDropdownOption>
          ))}
        </MoleculeDropdownOptionListWithStateMulti>
      </div>

      <h2>Static</h2>
      <div className={CLASS_DEMO_SECTION}>
        <h3>
          Basic (default <code>size → SMALL</code>)
        </h3>
        <div className={CLASS_DEMO_LIST}>
          <MoleculeDropdownList visible={isOpen}>
            {countries.map((option, index) => (
              <MoleculeDropdownOption
                value={option}
                key={index}
                selected={option === 'Canary Islands'}
              >
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </div>
        <h3>
          Basic (<code>size → MEDIUM</code>)
        </h3>
        <div className={CLASS_DEMO_LIST}>
          <MoleculeDropdownList
            visible={isOpen}
            size={moleculeDropdownListSizes.MEDIUM}
          >
            {countries.map((option, index) => (
              <MoleculeDropdownOption
                value={option}
                key={index}
                selected={option === 'Canary Islands'}
              >
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </div>
        <h3>
          Basic (<code>size → LARGE</code>)
        </h3>
        <div className={CLASS_DEMO_LIST}>
          <MoleculeDropdownList
            visible={isOpen}
            size={moleculeDropdownListSizes.LARGE}
          >
            {countries.map((option, index) => (
              <MoleculeDropdownOption
                value={option}
                key={index}
                selected={option === 'Canary Islands'}
              >
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </div>
        <h3>
          Basic (<code>size → false</code>)
        </h3>
        <div className={CLASS_DEMO_LIST}>
          <MoleculeDropdownList visible={isOpen} size={false}>
            {countries.map((option, index) => (
              <MoleculeDropdownOption
                value={option}
                key={index}
                selected={option === 'Canary Islands'}
              >
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </div>
        <h3>
          Basic (<code>design → FLAT</code>)
        </h3>
        <div className={CLASS_DEMO_LIST}>
          <MoleculeDropdownList
            visible={isOpen}
            design={moleculeDropdownListDesigns.FLAT}
          >
            {countries.map((option, index) => (
              <MoleculeDropdownOption
                value={option}
                key={index}
                selected={option === 'Canary Islands'}
              >
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </div>
        <h3>
          Basic (<code>design → SOLID: default</code>)
        </h3>
        <div className={CLASS_DEMO_LIST}>
          <MoleculeDropdownList
            visible={isOpen}
            design={moleculeDropdownListDesigns.SOLID}
          >
            {countries.map((option, index) => (
              <MoleculeDropdownOption
                value={option}
                key={index}
                selected={option === 'Canary Islands'}
              >
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </div>
        <h3>w/ Checkbox</h3>
        <div className={CLASS_DEMO_LIST}>
          <MoleculeDropdownList checkbox visible={isOpen}>
            {countries.map((option, index) => (
              <MoleculeDropdownOption
                value={option}
                key={index}
                selected={option === 'Canary Islands'}
              >
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </div>
        <h3>w/ Disabled Options</h3>
        <div className={CLASS_DEMO_LIST}>
          <MoleculeDropdownList checkbox visible={isOpen}>
            {countries.map((option, index) => (
              <MoleculeDropdownOption
                value={option}
                key={index}
                selected={option === 'Canary Islands'}
                disabled={['Luxembourg', 'Cameroon', 'Venezuela'].includes(
                  option
                )}
              >
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </div>
        <h3>
          w/ Highlight Query (<code>'an'</code>)
        </h3>
        <div className={CLASS_DEMO_LIST}>
          <MoleculeDropdownList visible={isOpen}>
            {countries
              .filter(country => country.toLowerCase().includes('an'))
              .map((option, index) => (
                <MoleculeDropdownOption
                  value={option}
                  key={index}
                  highlightQuery="an"
                >
                  {option}
                </MoleculeDropdownOption>
              ))}
          </MoleculeDropdownList>
        </div>
      </div>
    </div>
  </div>
)

export default Demo
