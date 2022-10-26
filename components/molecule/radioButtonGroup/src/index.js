import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'
import Injector, {combineProps} from '@s-ui/react-primitive-injector'

import {BASE_CLASS} from './settings.js'

const MoleculeRadioButtonGroup = ({
  id,
  value,
  defaultValue,
  onChange,
  children,
  name,
  ...props
}) => {
  const [innerValue, setInnerValue] = useControlledState(value, defaultValue)
  const handleChangeGroup = (e, {name, value}) => {
    setInnerValue(value)
    typeof onChange === 'function' && onChange(e, {name, value})
  }
  return (
    <div className={BASE_CLASS} id={id}>
      <Injector
        combine={(injectedProps, {checked, onChange, ...ownProps}) => {
          return combineProps(
            {
              checked: ownProps.value === innerValue,
              onChange: handleChangeGroup,
              name,
              ...props
            },
            ownProps
          )
        }}
      >
        {children}
      </Injector>
    </div>
  )
}

MoleculeRadioButtonGroup.displayName = 'MoleculeRadioButtonGroup'

MoleculeRadioButtonGroup.propTypes = {
  /* children */
  children: PropTypes.any,

  /* name */
  name: PropTypes.string,

  /* The DOM id global attribute. */
  id: PropTypes.string,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func,

  /* Controlled value assigned to the radio button */
  value: PropTypes.string,

  /* Initial value assigned to the radio button */
  defaultValue: PropTypes.string
}

export default MoleculeRadioButtonGroup
