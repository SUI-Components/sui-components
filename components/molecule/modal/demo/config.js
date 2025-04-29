export const BASE_CLASS_DEMO = `DemoMoleculeModal`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const getParams = (paramConfigs = {}) => {
  const params = new URLSearchParams(document.location.search)
  const response = Object.entries(Object.fromEntries(params.entries())).reduce((acc, [paramName, paramValue]) => {
    const parser = typeof paramConfigs[paramName] === 'function' ? paramConfigs[paramName] : v => v
    try {
      acc[paramName] = parser(paramValue)
    } catch (e) {
      acc[paramName] = paramValue
    }
    return acc
  }, {})
  return response
}

export const setParams = (params = {}) => {
  const searchParams = new URLSearchParams()
  Object.entries(params).forEach(([paramName, paramValue]) => {
    searchParams.set(paramName, paramValue)
  })
  const stringifiedParams = searchParams.toString()
  const newRelativePathQuery = `${window.location.pathname}${stringifiedParams ? '?' : ''}${searchParams.toString()}`
  window.history.pushState(null, '', newRelativePathQuery)
}
