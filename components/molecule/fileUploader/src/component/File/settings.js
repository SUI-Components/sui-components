export const BASE_CLASS = 'sui-atomFile'

export const CLASS_FILE_DEFAULT = `${BASE_CLASS}-Default`

export const isFunction = fn => typeof fn === 'function'

export const trigger = fn => (isFunction(fn) ? fn : () => null)
