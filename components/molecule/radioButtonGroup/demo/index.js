/* eslint-disable no-console */

import {H1, H2, Paragraph} from '@s-ui/documentation-library'

import ArticleAtomRadioButton from './ArticleAtomRadioButton.js'
import ArticleMoleculeRadioButtonField from './ArticleMoleculeRadioButtonField.js'
import ArticleWithIcons from './ArticleWithIcons.js'
import ArticleChangeProps from './ArticleChangeProps.js'

import './index.scss'

const BASE_CLASS_DEMO = `DemoMoleculeRadioButtonGroup`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Radio-button Group</H1>
        <H2>Use Cases</H2>
        <Paragraph>
          "MoleculeRadioButtonGroup" is a container of several "AtomRadioButton"
          or "MoleculeRadioButtonField" to simplify its use.
        </Paragraph>
        <ArticleAtomRadioButton className={CLASS_SECTION} />
        <br />
        <ArticleMoleculeRadioButtonField className={CLASS_SECTION} />
        <br />
        <ArticleWithIcons className={CLASS_SECTION} />
        <br />
        <ArticleChangeProps className={CLASS_SECTION} />
      </div>
    </div>
  )
}

export default Demo
