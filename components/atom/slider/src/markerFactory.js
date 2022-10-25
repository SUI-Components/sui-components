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

const fullWidthMarksFactoru = ({marks}) => {
  const marksKeys = Object.keys(marks)
  const firstMarkKey = marksKeys[0]
  const lastMarkKey = marksKeys[marksKeys.length - 1]

  const nextMarks = {
    ...marks,
    [firstMarkKey]: {label: marks[firstMarkKey], style: {transform: 'inherit'}},
    [lastMarkKey]: {
      label: marks[lastMarkKey],
      style: {transform: 'inherit', left: 'auto', right: '0'}
    }
  }
  console.log('!!!-', nextMarks)
  return nextMarks
}

const markerFactory = ({step, min, max, marks, fullWidth}) => {
  const ticks = Math.round((max - min) / step) + 1
  const nextMarks = marks
    ? customMarksFactory({marks, min, max, step, ticks})
    : linearMarksFactory({step, min, max, ticks})

  if (fullWidth) console.log('!!!', fullWidthMarksFactoru({marks: nextMarks}))

  return fullWidth ? fullWidthMarksFactoru({marks: nextMarks}) : nextMarks
}

export default markerFactory
