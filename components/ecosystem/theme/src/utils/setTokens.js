import merge from 'lodash.merge'

import darkTokens from '../tokens/tokens.dark.json'
import lightTokens from '../tokens/tokens.light.json'
import tokenize from './tokenize.js'

const setTokens = (settings, {prefix, affix, mode} = {}) =>
  tokenize(
    merge(
      ...[lightTokens, mode === 'dark' && darkTokens, settings].filter(Boolean)
    ),
    {prefix, affix}
  )

export default setTokens
