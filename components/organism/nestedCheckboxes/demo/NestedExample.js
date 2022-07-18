import PropTypes from 'prop-types'

import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'

import OrganismNestedCheckboxes from '../src/index.js'
import {isFunction} from '../src/settings.js'

const NestedExample = ({
  name,
  defaultValues = [],
  defaultChecked,
  checked,
  defaultIndeterminate,
  indeterminate,
  onChange
}) => (
  <OrganismNestedCheckboxes
    id={name}
    label={name}
    defaultChecked={defaultChecked}
    checked={checked}
    defaultIndeterminate={defaultIndeterminate}
    indeterminate={indeterminate}
    onChange={(...args) => {
      console.log(args[1]) // eslint-disable-line no-console
      isFunction(onChange) && onChange(...args)
    }}
  >
    {defaultValues.map(({checked, indeterminate}, index) => (
      <MoleculeCheckboxField
        key={index}
        id={`${name}-${index + 1}`}
        label={`nested-${name}-${index + 1}`}
        value={`${name}-${index + 1}`}
        defaultChecked={checked}
        defaultIndeterminate={indeterminate}
      />
    ))}
  </OrganismNestedCheckboxes>
)

NestedExample.propTypes = {
  name: PropTypes.string,
  defaultValues: PropTypes.array,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  defaultIndeterminate: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func
}

export default NestedExample
