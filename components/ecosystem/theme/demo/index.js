import {useState} from 'react'

import {H1, H2, Paragraph} from '@s-ui/documentation-library'

import EcosystemTheme from '../src/index.js'
import ArticleColors from './articles/ArticleColors.js'
import ArticleCustomize from './articles/ArticleCustomize.js'
import ArticleMode from './articles/ArticleMode.js'
import ArticleSize from './articles/ArticleSize.js'
import ArticleTypography from './articles/ArticleTypography.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => {
  const [customProperty, setCustomProperty] = useState('')
  const onChange = event => setCustomProperty(event.target.value)
  return (
    <div className="sui-StudioPreview">
      <H1>Ecosystem Theme</H1>
      <Paragraph>lorem ipsum</Paragraph>
      <EcosystemTheme tokens={{...(customProperty.length && {customProperty})}}>
        <br />
        <ArticleColors className={CLASS_SECTION} />
        <br />
        <ArticleTypography className={CLASS_SECTION} />
        <br />
        <ArticleSize className={CLASS_SECTION} />
        <br />
        <ArticleMode className={CLASS_SECTION} />
        <br />
        <ArticleCustomize
          className={CLASS_SECTION}
          value={customProperty}
          onChange={onChange}
        />
      </EcosystemTheme>
      <H2>Typography</H2>
    </div>
  )
}

export default Demo
