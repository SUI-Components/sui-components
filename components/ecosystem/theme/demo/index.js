import {useState} from 'react'

import {H1, Paragraph} from '@s-ui/documentation-library'

import EcosystemTheme from '../src/index.js'
import ArticleCustomize from './articles/ArticleCustomize.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleMode from './articles/ArticleMode.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => {
  const [customProperty, setCustomProperty] = useState('')
  const onChange = event => setCustomProperty(event.target.value)
  return (
    <div className="sui-StudioPreview">
      <H1>Ecosystem Theme</H1>
      <Paragraph>lorem ipsum</Paragraph>
      <EcosystemTheme tokens={{...(customProperty.length && {customProperty})}}>
        <ArticleDefault className={CLASS_SECTION} />
        <br />
        <ArticleCustomize
          className={CLASS_SECTION}
          value={customProperty}
          onChange={onChange}
        />
        <br />
        <ArticleMode className={CLASS_SECTION} />
      </EcosystemTheme>
    </div>
  )
}

export default Demo
