const TYPEMAP = {
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
      (TYPEMAP[typeof tokenValue] || TYPEMAP.undefined)(
        [prefix, tokenKey].filter(Boolean).join(affix),
        tokenValue
      )
    )
    .flat()
}

const serialize = map =>
  Array.from(map.entries())
    .map(([key, value]) => `--${key}: ${value}`)
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
