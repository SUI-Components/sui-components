import {kebabCase} from 'change-case'

import {type SemanticTheme, type PrimitiveTheme} from './types'

const anidate = (accumulator: Map<string, string>, [key, value]) => {
  if (typeof value === 'string' || typeof value === 'number') {
    accumulator.set(`${kebabCase(key)}`, value as string)
  } else if (Array.isArray(value)) {
    value.forEach((arrayValue, arrayIndex) => {
      anidate(accumulator, [`${kebabCase(key)}-${arrayIndex}`, arrayValue])
    })
  } else if (typeof value === 'object') {
    Object.entries(value).forEach(([objectKey, objectValue]: [string, string]) => {
      anidate(accumulator, [`${kebabCase(key)}-${kebabCase(objectKey)}`, objectValue])
    })
  } else if (Array.isArray(value)) {
    value.forEach((arrayValue, arrayIndex) => {
      anidate(accumulator, [`${kebabCase(key)}-${arrayIndex}`, arrayValue])
    })
  }
  return accumulator
}

export const generate = {
  scss: (
    {primitive, semantic}: {primitive: PrimitiveTheme; semantic: SemanticTheme},
    selector: string,
    mode?: 'light' | 'dark'
  ) => {
    const semanticMaps = {
      color: new Map(),
      font: new Map(),
      opacity: new Map(),
      elevation: new Map(),
      spacing: new Map()
    }
    const semanticTokens = {
      color: '',
      font: '',
      opacity: '',
      elevation: '',
      spacing: ''
    }

    const scssTokens = {
      color: '',
      font: '',
      opacity: '',
      elevation: '',
      spacing: ''
    }

    const add = (keyword: string, prefix?: string, ident: number = 0) => {
      Object.entries(semantic[keyword]).forEach(([key, value]) => {
        anidate(semanticMaps[keyword], [`${keyword}-${key}`, value])
      })

      const getTokenKey = (key: string) => `--${prefix === undefined ? '' : `${prefix}-`}${key}`

      const identStr = '  '.repeat(ident)
      semanticTokens[keyword] = ''.concat(
        ...Array.from(semanticMaps[keyword]).map(([key, value]: [string, string]) => {
          return `
${identStr}${getTokenKey(key)}: ${value};`
        })
      )

      scssTokens[keyword] = ''.concat(
        ...Array.from(semanticMaps[keyword]).map(([key, value]: [string, string]) => {
          return `
$${key}: var(${getTokenKey(key)}) !default;`
        })
      )
    }

    const {prefix} = primitive
    const hasMode = (mode?: 'light' | 'dark') => mode !== undefined

    add('color', prefix, hasMode(mode) ? 2 : 1)
    add('font', prefix, hasMode(mode) ? 2 : 1)
    add('opacity', prefix, hasMode(mode) ? 2 : 1)
    add('elevation', prefix, hasMode(mode) ? 2 : 1)
    add('spacing', prefix, hasMode(mode) ? 2 : 1)

    return `// This file is auto-generated by sui-tokens
${selector} {${hasMode(mode) ? `\n  @media (prefers-color-scheme: ${mode as string}) {` : ''}${semanticTokens.color}
${semanticTokens.font}
${semanticTokens.opacity}
${semanticTokens.elevation}
${semanticTokens.spacing}${hasMode(mode) ? `\n  }` : ''}
}
${scssTokens.color}
${scssTokens.font}
${scssTokens.opacity}
${scssTokens.elevation}
${scssTokens.spacing}
`
  },
  json: ({semantic}: {primitive: PrimitiveTheme; semantic: SemanticTheme}) => {
    return JSON.stringify(semantic, null, 2)
  }
}
