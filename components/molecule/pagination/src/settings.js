export const BASE_CLASS = 'sui-MoleculePagination'
export const PAGE_NUMBER_HOLDER = '%{pageNumber}'
export const DIVIDER = '···'

export const defaultCreateUrl = ({pageNumber, urlPattern}) => urlPattern.replace(PAGE_NUMBER_HOLDER, pageNumber)

export const noop = () => {}
