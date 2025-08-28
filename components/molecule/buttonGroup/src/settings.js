export const BASE_CLASS = 'sui-MoleculeButtonGroup'

export const divideProps = props =>
  Object.entries(props).reduce(
    ([filtered, result], [currKey, currVal]) => {
      if (currKey.startsWith('data-') || currKey.startsWith('aria-') || currKey === 'role') {
        filtered[currKey] = currVal
      } else {
        result[currKey] = currVal
      }
      return [filtered, result]
    },
    [{}, {}]
  )
