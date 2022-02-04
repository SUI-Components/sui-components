import {useState} from 'react'
import PropTypes from 'prop-types'

import {H2, Article, Paragraph, Code} from '@s-ui/documentation-library'

import MoleculeDataCounter from '../../src/index.js'
import {propsMessages} from '../settings.js'

const ArticleLoading = ({className}) => {
  const [isLoading, setIsLoading] = useState(false)

  const consoleValueLoading = (e, {value}) => {
    setIsLoading(true)
    setTimeout(() => {
      console.log({value}) // eslint-disable-line
      setIsLoading(false)
    }, 1000)
  }
  return (
    <Article className={className}>
      <H2>Loading</H2>
      <Paragraph>
        The dataCounter component provides an
        <Code>isLoading</Code> (boolean) prop which blocks the last button
        fired.
      </Paragraph>
      <MoleculeDataCounter
        label="label"
        isLoading={isLoading}
        onChange={consoleValueLoading}
        {...propsMessages}
      />
    </Article>
  )
}

ArticleLoading.displayName = 'ArticleLoading'

ArticleLoading.propTypes = {
  className: PropTypes.string
}

export default ArticleLoading
