/* eslint-disable no-console */

import {Article, H2, H3} from '@s-ui/documentation-library'

import ComboCountries from './components/ComboCountries.js'

const ArticleDependantSelection = () => {
  return (
    <Article>
      <H2>Dependant Selection</H2>
      <H3>With Placeholder</H3>
      <ComboCountries />
    </Article>
  )
}

ArticleDependantSelection.propTypes = {}

export default ArticleDependantSelection
