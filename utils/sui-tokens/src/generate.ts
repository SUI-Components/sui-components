import {kebabCase} from 'change-case'

import {type PrimitiveTheme, type SemanticTheme, type SettingsTheme} from './types'

const anidate = (
  accumulator: Map<string, string>,
  [key, value]: [string, string | number | object | string[] | number[]]
) => {
  if (typeof value === 'string' || typeof value === 'number') {
    if (accumulator === undefined) {
      accumulator = new Map()
    }
    accumulator.set(`${kebabCase(key)}`, value as string)
  } else if (Array.isArray(value)) {
    value.forEach((arrayValue, arrayIndex) => {
      anidate(accumulator, [`${kebabCase(key)}-${arrayIndex}`, arrayValue])
    })
  } else if (typeof value === 'object') {
    Object.entries(value).forEach(([objectKey, objectValue]: [string, object]) => {
      anidate(accumulator, [`${kebabCase(key)}-${kebabCase(objectKey)}`, objectValue])
    })
  }
  return accumulator
}

export const generate = {
  scss: (
    {settings, primitive, semantic}: {settings: SettingsTheme; primitive: PrimitiveTheme; semantic: SemanticTheme},
    {
      selector,
      mode,
      hasPrimitive
    }: {
      selector: string
      mode?: 'light' | 'dark'
      hasPrimitive: boolean
    }
  ) => {
    const maps: {
      [index: string]: Map<string, string>
    } = {}

    const customProperty: {
      [index: string]: string
    } = {}

    const scssTokens: {
      [index: string]: string
    } = {}

    const add = (partial: any, keyword: string, prefix?: string, ident: number = 0) => {
      if (maps[keyword] === undefined) {
        maps[keyword] = new Map()
      }
      Object.entries(partial).forEach(([key, value]: [string, any]) => {
        anidate(maps[keyword], [`${keyword}-${key}`, value])
      })

      const getTokenKey = (key: string) => `--${prefix === undefined ? '' : `${prefix}-`}${key}`

      const identStr = '  '.repeat(ident)
      if (customProperty !== undefined) {
        customProperty[keyword] = String().concat(
          ...Array.from(maps[keyword]).map(v => {
            const [key, value] = v as [string, string | number]
            return `
${identStr}${getTokenKey(key)}: ${value};`
          })
        )
      }

      scssTokens[keyword] = String().concat(
        ...Array.from(maps[keyword]).map(val => {
          const [key] = val as [string, string | number]
          return `
$${key}: var(${getTokenKey(key)}) !default;`
        })
      )
    }

    const {prefix, fontSize} = settings
    const hasMode = (mode?: 'light' | 'dark') => mode !== undefined

    hasPrimitive && add(primitive.color, 'primitiveColor', prefix, hasMode(mode) ? 2 : 1)
    add(semantic.color, 'color', prefix, hasMode(mode) ? 2 : 1)
    add(semantic.font, 'font', prefix, hasMode(mode) ? 2 : 1)
    add(semantic.opacity, 'opacity', prefix, hasMode(mode) ? 2 : 1)
    add(
      semantic.elevation,

      'elevation',
      prefix,
      hasMode(mode) ? 2 : 1
    )
    add(semantic.spacing, 'spacing', prefix, hasMode(mode) ? 2 : 1)

    return `// This file is auto-generated by sui-tokens
${selector} {${hasMode(mode) ? `\n  @media (prefers-color-scheme: ${mode as string}) {` : ''}${customProperty.color}
${hasPrimitive ? `${customProperty.primitiveColor}\n` : ''}${customProperty.font}
${customProperty.opacity}
${customProperty.elevation}
${customProperty.spacing}${hasMode(mode) ? `\n  }` : ''}
}
${scssTokens.color}
${scssTokens.font}
${scssTokens.opacity}
${scssTokens.elevation}
${scssTokens.spacing}
${
  fontSize !== undefined
    ? `\n:where(body) {
  font-size: ${fontSize};
}`
    : ''
}
`
  },
  json: (
    {settings, primitive, semantic}: {settings: SettingsTheme; primitive: PrimitiveTheme; semantic: SemanticTheme},
    {hasPrimitive}: {hasPrimitive: boolean}
  ) => {
    return {
      settings,
      ...(hasPrimitive ? {primitive} : {}),
      semantic
    }
  }
}
