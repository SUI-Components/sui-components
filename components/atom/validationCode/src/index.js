import PropTypes from 'prop-types'
import {useState, useRef, createRef} from 'react'

const DEFAULT_LENGTH = 6
const BASE_CLASS = 'react-AtomValidationCode'

export default function AtomValidationCode({label, length = DEFAULT_LENGTH}) {
  const [numbers, setNumbers] = useState(new Array(length).fill(null))

  const numberRefs = useRef([])
  numberRefs.current = numbers.map(
    (_, i) => numberRefs.current[i] ?? createRef()
  )

  const handleChange = ({i, value}) => {
    if (value < 10) {
      const numberArray = [...numbers]
      numberArray[i] = value
      setNumbers(numberArray)
    }

    if (value !== '') {
      const nextInput = numberRefs.current[i + 1]

      nextInput
        ? nextInput.current.focus()
        : numberRefs.current[i].current.blur()
    }
  }

  return (
    <div className={BASE_CLASS}>
      {label && <h3 className={`${BASE_CLASS}-label`}>{label}</h3>}
      <div className={`${BASE_CLASS}-code`}>
        {numbers.map((_, i) => {
          return (
            <input
              autoFocus={i === 0}
              className={`${BASE_CLASS}-input`}
              key={i}
              ref={numberRefs.current[i]}
              type="number"
              onClick={e => e.target.select()}
              onChange={e => handleChange({i, value: e.target.value})}
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
  label: PropTypes.string,
  length: PropTypes.array
}
