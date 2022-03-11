/* eslint-disable react/prop-types, no-unused-vars, no-console */
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

import {H1, Paragraph} from '@s-ui/documentation-library'

import withStateSingle from './hoc/withStateSingle.js'
import withStateMulti from './hoc/withStateMulti.js'

import {countries} from './data/index.js'
import {CLASS_DEMO_SECTION, CLASS_DEMO_LIST} from './config.js'
import ArticleDefault from './ArticleDefault.js'
import ArticleDesign from './ArticleDesign.js'
import ArticleSize from './ArticleSize.js'
import ArticleCheckbox from './ArticleCheckbox.js'

import './index.scss'

const isOpen = true
//
// const MoleculeDropdownOptionListWithStateSingle = withStateSingle(
//   MoleculeDropdownList
// )
// const MoleculeDropdownOptionListWithStateMulti = withStateMulti(
//   MoleculeDropdownList
// )

const Demo = () => (
  <div className="sui-StudioPreview">
    <H1>Dropdown List</H1>
    <Paragraph>
      MoleculeDropdownList is a composition of DropdownOptions
    </Paragraph>
    <ArticleDefault className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleDesign className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleSize className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleCheckbox className={CLASS_DEMO_SECTION} />
  </div>
)

export default Demo
