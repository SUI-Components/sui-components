/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
import MoleculeDropdownList, {
  moleculeDropdownListSizes
} from '../../../../components/molecule/dropdownList/src'

import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'
import {countries} from './data'

import withStateSingle from './hoc/withStateSingle'
import withStateMulti from './hoc/withStateMulti'

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
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeDropdownList</code>
    </h1>
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
)

export default Demo
