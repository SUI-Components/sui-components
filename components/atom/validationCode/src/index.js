import PropTypes from 'prop-types'
import {useState, useRef, createRef} from 'react'
import cx from 'classnames'

const DEFAULT_LENGTH = 6
const BASE_CLASS = 'react-AtomValidationCode'

export default function AtomValidationCode({label, length = DEFAULT_LENGTH}) {
  const [numbers, setNumbers] = useState(new Array(length).fill(null))
  const [focus, setFocus] = useState(0)

  const numberRefs = useRef([])
  numberRefs.current = numbers.map(
    (_, i) => numberRefs.current[i] ?? createRef()
  )

  const handleChange = ({i, value}) => {
    const numberArray = [...numbers]
    numberArray[i] = value
    setNumbers(numberArray)
    setFocus(focus + 1)
  }

  return (
    <div className={BASE_CLASS}>
      {label && <h3 className={`${BASE_CLASS}-label`}>{label}</h3>}
      <div className={`${BASE_CLASS}-code`}>
        {numbers.map((number, i) => {
          const inputClass = cx(`${BASE_CLASS}-input`, {
            'is-focused': i === focus
          })

          return (
            <input
              className={inputClass}
              key={i}
              ref={numberRefs.current[i]}
              type="number"
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
