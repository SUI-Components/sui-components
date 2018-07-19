const paramPairToUrlParam = params => key => `&${key}=${encodeURI(params[key])}`

export const paramsToQueryString = params =>
  Object.keys(params)
    .map(paramPairToUrlParam(params))
    .reduce((acc, cur) => acc.concat(cur), '')
    .slice(1)
