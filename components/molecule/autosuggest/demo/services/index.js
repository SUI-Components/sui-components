import countries from '../data/countries.json'

const filterOptions = (options, query) =>
  options.filter(option => {
    const lowerCaseQuery = query.toLowerCase()
    const lowerCaseOption = option.toLowerCase()
    return lowerCaseOption.includes(lowerCaseQuery)
  })

export const filterOptionsCodeValue = (options, query) =>
  options.filter(({name: nameCountry}) => {
    const lowerCaseQuery = query.toLowerCase()
    const lowerCaseOption = nameCountry.toLowerCase()
    return lowerCaseOption.includes(lowerCaseQuery)
  })

const delayedFilterOptions = (options, query) =>
  new Promise(resolve => {
    setTimeout(() => {
      const filteredOptions = filterOptions(options, query)
      resolve(filteredOptions)
    }, 500)
  })

export const getAsyncCountriesFromQuery = async ({query}) => {
  const options = countries.map(({name}) => name)
  return !query ? options : delayedFilterOptions(options, query)
}
