export const BASE_CLASS_DEMO = `DemoAtomInput`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

export const stackMap = (arr = [], ...mappingCallbacks) =>
  mappingCallbacks.flatMap(function (e, index) {
    return this.map((value, innerIndex) => e(value, innerIndex + this.length * index))
  }, arr)
