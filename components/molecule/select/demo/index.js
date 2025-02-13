import {Anchor, Code, H1, Paragraph} from '@s-ui/documentation-library'

import ArticleControlledUncontrolledValue from './articles/ArticleControlledUncontrolledValue.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleHasSearch from './articles/ArticleHasSearch.js'
import ArticleSize from './articles/ArticleSize.js'
import ArticleStatus from './articles/ArticleStatus.js'

import './index.scss'

const BASE_CLASS_DEMO = 'DemoMoleculeSelect'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Select</H1>
      <Paragraph>
        A form input used for selecting a value: when collapsed it shows the currently selected option and when
        expanded, it shows a scrollable list of predefined options for the user to choose from.
      </Paragraph>
      <Paragraph>
        There are 2 different kinds of select:{' '}
        <Anchor href="#single-select">
          <Code>single</Code>
        </Anchor>{' '}
        and{' '}
        <Anchor href="#multiple-select">
          <Code>multiple</Code>
        </Anchor>
        .
      </Paragraph>
      <ArticleDefault className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleControlledUncontrolledValue className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleStatus className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleHasSearch className={CLASS_DEMO_SECTION} />
      <br />
      <br />
      <ArticleSize className={CLASS_DEMO_SECTION} />
    </div>
  )
}

export default Demo
