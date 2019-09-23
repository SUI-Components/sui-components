const customMarksFactory = ({marks, max, min, step, ticks}) => {
  const steps = Array.from(Array(ticks), (x, index) => index * step + min)
  const markRange = Math.round((max - min) / (marks.length - 1))
  let idx = 0
  return steps.reduce((acc, step) => {
    if (step === min || step % (markRange + min) === 0) {
      acc[step] = marks[idx++]
    } else {
      acc[step] = ''
    }
    return acc
  }, {})
}

const linearMarksFactory = ({step, min, max, ticks}) => {
  const steps = Array.from(Array(ticks), (x, index) => index * step)
  return step === 1
    ? {[min]: min, [max]: max}
    : steps.reduce((marksConfig, step) => {
        marksConfig[step] = step
        return marksConfig
      }, {})
}

const markerFactory = ({step, min, max, marks}) => {
  const ticks = Math.round((max - min) / step) + 1
  return marks
    ? customMarksFactory({marks, min, max, step, ticks})
    : linearMarksFactory({step, min, max, ticks})
}

export default markerFactory
