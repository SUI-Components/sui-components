/* eslint-disable no-console */

import React from 'react'
import './index.scss'

import MoleculeInputTags, {
  inputSizes
} from '../../../../components/molecule/inputTags/src'

import {withStateValueTags} from '@s-ui/hoc'
import {CloseIcon} from './icons'
import {beatles, ledZeppelin, queen} from './data'

const BASE_CLASS_DEMO = 'DemoMoleculeInputTags'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const MoleculeInputTagsWithState = withStateValueTags(MoleculeInputTags)

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeInputTags</code>
    </h1>
    <p>
      Check the console to verify the <code>onChangeTags</code> on
      adding/removing tabs
    </p>
    <div className={CLASS_DEMO_SECTION}>
      <h4>Basic</h4>
      <MoleculeInputTagsWithState
        value="George Martin"
        tagsCloseIcon={<CloseIcon />}
        tags={beatles}
        onChangeTags={(_, {tags}) => {
          console.log(tags)
        }}
      />
    </div>
    <div className={CLASS_DEMO_SECTION}>
      <h4>Entering tags on "Tab" press</h4>
      <MoleculeInputTagsWithState
        value="George Martin"
        tagsCloseIcon={<CloseIcon />}
        tags={beatles}
        onEnterKey="Tab"
        onChangeTags={(_, {tags}) => {
          console.log(tags)
        }}
      />
    </div>
    <div className={CLASS_DEMO_SECTION}>
      <h4>Entering tags on "comma" press</h4>
      <MoleculeInputTagsWithState
        value="George Martin"
        tagsCloseIcon={<CloseIcon />}
        tags={beatles}
        onEnterKey=","
        onChangeTags={(_, {tags}) => {
          console.log(tags)
        }}
      />
    </div>
    <div className={CLASS_DEMO_SECTION}>
      <h4>With size=SMALL</h4>
      <MoleculeInputTagsWithState
        tagsCloseIcon={<CloseIcon />}
        tags={ledZeppelin}
        size={inputSizes.SMALL}
        onChangeTags={(_, {tags}) => {
          console.log(tags)
        }}
      />
    </div>
    <div className={CLASS_DEMO_SECTION}>
      <h4>With error</h4>
      <MoleculeInputTagsWithState
        tagsCloseIcon={<CloseIcon />}
        tags={queen}
        errorState
        onChangeTags={(_, {tags}) => {
          console.log(tags)
        }}
      />
    </div>
    <div className={CLASS_DEMO_SECTION}>
      <h4>With onChange handler</h4>
      <MoleculeInputTagsWithState
        tagsCloseIcon={<CloseIcon />}
        tags={queen}
        onChange={(_, {value}) => {
          console.log(value)
        }}
        onChangeTags={(_, {tags}) => {
          console.log(tags)
        }}
      />
    </div>
  </div>
)

export default Demo
