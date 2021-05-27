import countries from '../data/countries.json'
const options = countries.map(({name}) => name)

const delayedFilterOptions = query =>
  new Promise(resolve => {
    setTimeout(() => {
      const filteredOptions = options.filter(option => {
        const lowerCaseQuery = query.toLowerCase()
        const lowerCaseOption = option.toLowerCase()
        return lowerCaseOption.includes(lowerCaseQuery)
      })
      resolve(filteredOptions)
    }, 500)
  })

export const getAsyncCountriesFromQuery = async ({query}) =>
  !query ? [] : delayedFilterOptions(query)
