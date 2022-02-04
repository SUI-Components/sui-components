/* eslint-disable no-console */

import {H1, H2} from '@s-ui/documentation-library'
import ArticleAtomRadioButton from './ArticleAtomRadioButton'
import ArticleMoleculeRadioButtonField from './ArticleMoleculeRadioButtonField'
import './index.scss'
import Paragraph from '@s-ui/documentation-library/lib/components/Paragraph/Paragraph'
import ArticleWithIcos from './ArticleWithIcons'
import ArticleChangeProps from './ArticleChangeProps'

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
        <ArticleMoleculeRadioButtonField className={CLASS_SECTION} />
        <ArticleWithIcos className={CLASS_SECTION} />
        <ArticleChangeProps className={CLASS_SECTION} />
      </div>
    </div>
  )
}

export default Demo
