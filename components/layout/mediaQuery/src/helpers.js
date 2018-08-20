const getNumber = str => {
  const parseResults = /^([0-9.]+)px$/.exec(str)
  return parseResults ? parseFloat(parseResults[1]) : 0
}

export const getWidth = element =>
  getNumber(window.getComputedStyle(element)['width'])

export const matchQueries = BREAKPOINTS => width =>
  Object.entries(BREAKPOINTS).reduce((query, [size, breakpoint]) => {
    query[size.toUpperCase()] = width >= breakpoint
    return query
  }, {})
