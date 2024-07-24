import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleCheckbox from './ArticleCheckbox.js'
import ArticleDefault from './ArticleDefault.js'
import ArticleDesign from './ArticleDesign.js'
import ArticlePosition from './ArticlePosition.js'
import ArticleSize from './ArticleSize.js'
import {CLASS_DEMO_SECTION} from './config.js'

import './index.scss'

const Demo = () => (
  <div className="sui-StudioPreview">
    <H1>Dropdown List</H1>
    <Paragraph>MoleculeDropdownList is a composition of DropdownOptions</Paragraph>
    <ArticleDefault className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleDesign className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleSize className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleCheckbox className={CLASS_DEMO_SECTION} />
    <br />
    <ArticlePosition className={CLASS_DEMO_SECTION} />
  </div>
)

export default Demo
