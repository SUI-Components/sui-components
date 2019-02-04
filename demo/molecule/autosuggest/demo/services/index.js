import countries from '../data/countries.json'
const options = countries.map(({name}) => name)

export const getAsyncCountriesFromQuery = async ({query}) =>
  !query
    ? []
    : options.filter(option => {
        const lowerCaseQuery = query.toLowerCase()
        const lowerCaseOption = option.toLowerCase()
        return lowerCaseOption.includes(lowerCaseQuery)
      })
