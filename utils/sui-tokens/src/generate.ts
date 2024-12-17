import {kebabCase} from 'change-case'

import {type SemanticTheme, type PrimitiveTheme} from './types'

const anidate = (accumulator: Map<string, string>, [key, value]) => {
  if (typeof value === 'string' || typeof value === 'number') {
    accumulator.set(`${kebabCase(key)}`, value)
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
  scss: ({primitive, semantic}: {primitive: PrimitiveTheme; semantic: SemanticTheme}, selector: string) => {
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

    const add = (keyword: string, prefix?: string) => {
      Object.entries(semantic[keyword]).forEach(([key, value]) => {
        anidate(semanticMaps[keyword], [`${keyword}-${key}`, value])
      })

      const getTokenKey = (key: string) => `--${prefix === undefined ? '' : `${prefix}-`}${key}`

      semanticTokens[keyword] = ''.concat(
        ...Array.from(semanticMaps[keyword]).map(([key, value]: [string, string]) => {
          return `
      ${getTokenKey(key)}: ${value};`
        })
      )

      scssTokens[keyword] = ''.concat(
        ...Array.from(semanticMaps[keyword]).map(([key, value]: [string, string]) => {
          return `
$${key}: var(${getTokenKey(key)});`
        })
      )
    }

    const {prefix} = primitive

    add('color', prefix)
    add('font', prefix)
    add('opacity', prefix)
    add('elevation', prefix)
    add('spacing', prefix)

    return `// This file is auto-generated by sui-tokens
${selector} {
  ${semanticTokens.color}

  ${semanticTokens.font}

  ${semanticTokens.opacity}

  ${semanticTokens.elevation}

  ${semanticTokens.spacing}
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
