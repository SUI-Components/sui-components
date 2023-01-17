import {paramCase} from 'change-case'
import setWith from 'lodash.setwith'

import PROPERTIES from '../constants/properties.js'

const CUSTOM_PROPERTY_SEPARATOR = '-'

const TYPE_MAP = {
  object: (prefix, value, {keys = [], key, ...settings} = {}) =>
    parse(value, {...settings, prefix, keys: [...keys, `${key}`]}),
  array: (prefix, value, {keys = [], key, ...settings} = {}) =>
    parse(
      Object.fromEntries(
        value.map((val, index) => [`${index}`, val]),
        prefix
      ),
      {...settings, keys: [...keys]}
    ),
  undefined: (prefix, value, {keys = [], key} = {}) => {
    return [[`--${conform(prefix)}`, `${value}`, {keys: [...keys, key]}]]
  }
}

const parse = (
  tokens,
  {prefix, affix = CUSTOM_PROPERTY_SEPARATOR, keys = []}
) => {
  return Object.entries(tokens)
    .map(([tokenKey, tokenValue]) =>
      (TYPE_MAP[typeof tokenValue] || TYPE_MAP.undefined)(
        [prefix, tokenKey].filter(Boolean).join(affix),
        tokenValue,
        {keys, affix, prefix, key: tokenKey}
      )
    )
    .flat()
}

const conform = key => {
  return key.replace(
    /(?<category>[a-zA-Z]+)-(?<property>[a-zA-Z]+)-(.*)/,
    (match, category, property, rest) => {
      const tokenPrefix = PROPERTIES[property] || property

      if (!tokenPrefix) {
        // eslint-disable-next-line
        console.warn(
          `[THEME] You are trying to set the token "${property}", from "${match}" is not defined in our design system.`
        )
        return ''
      }

      return `${tokenPrefix}${CUSTOM_PROPERTY_SEPARATOR}${paramCase(rest)}`
    }
  )
}

export const serialize = map =>
  Array.from(map.entries())
    .map(([key, value]) => key && `${key}: ${value}`)
    .filter(Boolean)
    .join(';\n')

const tokenize = (object = {}, {prefix, affix} = {}) =>
  parse(object, {prefix, affix}).reduce(
    ([map, dictionary], [key, value, {keys}]) => {
      map.set(key, value)
      setWith(dictionary, keys.join('.'), `var(${key})`, Object)
      return [map, dictionary]
    },
    [new Map(), {}]
  )

export default tokenize
