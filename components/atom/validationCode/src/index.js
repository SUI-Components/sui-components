import PropTypes from 'prop-types'
import {useState, useRef, createRef, useCallback} from 'react'

const DEFAULT_LENGTH = 6
const BASE_CLASS = 'sui-AtomValidationCode'
const INPUT_MAX_NUMBER = 10
const noop = () => {}

export default function AtomValidationCode({
  onChange = noop,
  length = DEFAULT_LENGTH
}) {
  const [numbers, setNumbers] = useState(new Array(length).fill(null))

  const numberRefs = useRef([])
  numberRefs.current = numbers.map(
    (_, i) => numberRefs.current[i] ?? createRef()
  )

  const handleChange = useCallback(
    ({ev, i}) => {
      const {value} = ev.target

      if (value < INPUT_MAX_NUMBER) {
        const numberArray = [...numbers]
        numberArray[i] = value
        setNumbers(numberArray)
        onChange(ev, {value: numberArray.join('')})
      }

      if (value !== '') {
        const nextInput = numberRefs.current[i + 1]

        nextInput
          ? nextInput.current.focus()
          : numberRefs.current[i].current.blur()
      }
    },
    [numbers, onChange]
  )

  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-code`}>
        {numbers.map((_, i) => {
          return (
            <input
              autoComplete="one-time-code"
              autoFocus={i === 0}
              className={`${BASE_CLASS}-input`}
              inputMode="numeric"
              key={i}
              onChange={ev => handleChange({ev, i})}
              onClick={ev => ev.target.select()}
              ref={numberRefs.current[i]}
              type="number"
              value={numbers[i]}
            />
          )
        })}
      </div>
    </div>
  )
}

AtomValidationCode.displayName = 'AtomValidationCode'
AtomValidationCode.propTypes = {
  onChange: PropTypes.func,
  length: PropTypes.array
}
