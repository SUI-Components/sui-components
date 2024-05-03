import PropTypes from 'prop-types'

import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'
import MoleculeSelect from '@s-ui/react-molecule-select'

import {labels, labelsPlaceholder} from '../config.js'
import {_labelsArrowIcon} from '../icons.js'

const getContent = ({handlePhotosChange, formState}) => {
  const Content = ({file, index}) => (
    <div className="demo-child-body">
      <MoleculeSelect
        value={formState[index]?.label}
        onChange={(e, {value}) => handlePhotosChange({file: {...file, label: value}}, index)}
        iconArrowDown={_labelsArrowIcon()}
        placeholder={labelsPlaceholder}
      >
        {labels.map(label => (
          <MoleculeSelectOption key={label} value={label}>
            {label}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
    </div>
  )
  Content.propTypes = {
    file: PropTypes.object,
    index: PropTypes.number
  }
  Content.displayName = 'Content'

  return Content
}

export default getContent
