const CUSTOM_PROPERTY_SEPARATOR = '-'

const TOKENS_PREFIX_MAP = {
  color: 'c',
  padding: 'p',
  boxShadow: 'bxsh'
}

const TYPE_MAP = {
  object: (key, value, settings) => parse(value, {...settings, prefix: key}),
  array: (key, value, settings) =>
    parse(
      Object.fromEntries(
        value.map((val, index) => [`${index}`, val]),
        key
      ),
      settings
    ),
  undefined: (key, value) => [[`${key}`, `${value}`]]
}

const parse = (tokens, {prefix, affix = '-'}) => {
  return Object.entries(tokens)
    .map(([tokenKey, tokenValue]) =>
      (TYPE_MAP[typeof tokenValue] || TYPE_MAP.undefined)(
        [prefix, tokenKey].filter(Boolean).join(affix),
        tokenValue
      )
    )
    .flat()
}

const serialize = map =>
  Array.from(map.entries())
    .map(([key, value]) => {
      key = key.replace(/([a-zA-Z]+)-(.*)/, (allKey, prefix, rest) => {
        const tokenPrefix = TOKENS_PREFIX_MAP[prefix]

        if (!tokenPrefix) {
          // eslint-disable-next-line
          console.warn(
            `[THEME] You are trying to set the token "${prefix}", not defined in our design system.`
          )
          return ''
        }

        return `${TOKENS_PREFIX_MAP[prefix]}${CUSTOM_PROPERTY_SEPARATOR}${rest}`
      })

      return key && `--${key}: ${value}`
    })
    .filter(Boolean)
    .join(';\n')

const tokenize = (object = {}, {prefix, affix} = {}) => {
  const tokensMap = parse(object, {prefix, affix}).reduce(
    (map, [key, value]) => {
      map.set(key, value)

      return map
    },
    new Map()
  )

  return serialize(tokensMap)
}

export default tokenize
