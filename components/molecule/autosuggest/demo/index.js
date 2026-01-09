import {Code, H1, Paragraph} from '@s-ui/documentation-library'

import ArticleArrayObjects from './ArticleArrayObjects/index.js'
import ArticleDependantSelection from './ArticleDependantSelection/index.js'
import ArticleIsOpenProp from './ArticleIsOpenProp/index.js'
import ArticleMultipleSelection from './ArticleMultipleSelection/index.js'
import ArticleSingleSelection from './ArticleSingleSelection/index.js'

import './index.scss'

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <H1>Autosuggest</H1>
      <Paragraph>
        This component should only be used when the input is writable (resulting in a search of the{' '}
        <Code>DropdownList</Code> options)
      </Paragraph>
      <Paragraph>
        In this demo, we only use the default size of <Code>DropdownList</Code> and basic options of{' '}
        <Code>DropdownOption</Code> components. Keep in mind, those two components has more possibilities if you need
        it.
      </Paragraph>
      <ArticleSingleSelection />
      <br />
      <ArticleMultipleSelection />
      <br />
      <ArticleDependantSelection />
      <br />
      <ArticleIsOpenProp />
      <br />
      <ArticleArrayObjects />
    </div>
  </div>
)

export default Demo
