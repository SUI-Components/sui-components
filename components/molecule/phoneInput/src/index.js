import {useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {inputSizes, inputTypes} from '@s-ui/react-atom-input'
import MoleculeDropdownList, {
  moleculeDropdownListDesigns
} from '@s-ui/react-molecule-dropdown-list'
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'
import MoleculeInputField from '@s-ui/react-molecule-input-field'

import COUNTRY_FLAGS from './countryFlags.js'
import {FLAG_SIZE, phoneValidationType} from './settings.js'

const BASE_CLASS = 'sui-MoleculePhoneInput'
const NOOP = () => {}

export {PREFIXES} from './settings.js'
export default function MoleculePhoneInput({
  alertText,
  autoHideHelpText = false,
  dropdownCloseIcon,
  dropdownIcon,
  errorText,
  hasError,
  helpText,
  id,
  label,
  name,
  onChange,
  onPrefixChange = NOOP,
  placeholder,
  prefixes = [],
  initialSelectedPrefix = prefixes[0],
  setFormattedValue,
  successText,
  type = phoneValidationType.DEFAULT,
  value = '',
  visiblePrefixes: visiblePrefixesProp = true,
  ...props
}) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedPrefix, setSelectedPrefix] = useState(initialSelectedPrefix)
  const [isLandLine, setIsLandLine] = useState(false)
  const modalRef = useRef(null)
  const inputPrefixRef = useRef(null)
  const inputMask = selectedPrefix && {
    mask: isLandLine
      ? selectedPrefix.mask.landlineMask
      : selectedPrefix.mask.mobileMask
  }
  const visiblePrefixes = visiblePrefixesProp && prefixes.length > 1

  const baseClass = cx(
    {
      splitted: type === phoneValidationType.SPLITTED,
      [`${BASE_CLASS}--error`]: hasError || !!errorText,
      withLabel: !!label
    },
    BASE_CLASS
  )

  // Close dropdown when click outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !inputPrefixRef.current.contains(event.target)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    onPrefixChange(selectedPrefix)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPrefix])

  const handlePhoneChange = (e, {value}) => {
    setIsLandLine(selectedPrefix.landlinePrefixs.includes(value[0]))

    typeof setFormattedValue === 'function' && setFormattedValue(value)

    typeof onChange === 'function' &&
      onChange(e, {
        name: name ?? id,
        prefix: selectedPrefix.countryCode,
        value: value.toString().replace(/\s/g, ''), // remove spaces from value
        isLandLine
      })
  }

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-input`}>
        <div
          ref={inputPrefixRef}
          className={`${baseClass}-input-prefix`}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedPrefix && (
            <img
              height={FLAG_SIZE}
              width={FLAG_SIZE}
              className={`${baseClass}-input-prefix-flag`}
              src={COUNTRY_FLAGS[selectedPrefix?.value]}
            />
          )}
          {visiblePrefixes && (showDropdown ? dropdownCloseIcon : dropdownIcon)}
        </div>
        <div className={`${baseClass}-input-phoneContainer`}>
          {selectedPrefix && (
            <p className={`${baseClass}-input-prefix-code`}>
              {selectedPrefix.countryCode}
            </p>
          )}
          <MoleculeInputField
            {...{
              ...props,
              alertText,
              autoHideHelpText,
              errorText,
              helpText,
              id,
              label,
              name,
              placeholder,
              successText
            }}
            mask={inputMask}
            noBorder
            onChange={handlePhoneChange}
            size={inputSizes.SMALL}
            type={inputTypes.MASK}
            value={value.toString()}
          />
        </div>
      </div>
      {showDropdown && visiblePrefixes && (
        <div className={`${baseClass}-dropdown`}>
          <MoleculeDropdownList
            design={moleculeDropdownListDesigns.FLAT}
            ref={modalRef}
            visible={visiblePrefixes}
          >
            {prefixes.map(prefix => {
              return (
                <MoleculeDropdownOption
                  value={prefix.value}
                  selected={selectedPrefix.value === prefix.value}
                  key={prefix.countryCode}
                  onClick={() => {
                    setSelectedPrefix(prefix)
                    setShowDropdown(false)
                  }}
                >
                  <div className={`${baseClass}-dropdown-option`}>
                    <img
                      height={FLAG_SIZE}
                      width={FLAG_SIZE}
                      className={`${baseClass}-dropdown-option-label`}
                      src={COUNTRY_FLAGS[prefix.value]}
                    />
                    <span className={`${baseClass}-dropdown-option-label`}>
                      {prefix.label}
                    </span>
                    <span className={`${baseClass}-dropdown-option-code`}>
                      ({prefix.countryCode})
                    </span>
                  </div>
                </MoleculeDropdownOption>
              )
            })}
          </MoleculeDropdownList>
        </div>
      )}
    </div>
  )
}

MoleculePhoneInput.displayName = 'MoleculePhoneInput'

MoleculePhoneInput.propTypes = {
  dropdownCloseIcon: PropTypes.node,
  dropdownIcon: PropTypes.node,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  prefixes: PropTypes.array,
  onChange: PropTypes.func,
  setFormattedValue: PropTypes.func,
  type: PropTypes.oneOf(Object.values(phoneValidationType)),
  initialSelectedPrefix: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    countryCode: PropTypes.string,
    mask: PropTypes.string
  }),
  hasError: PropTypes.bool,
  visiblePrefixes: PropTypes.bool,

  /** Boolean to decide if helptext should be auto hide */
  autoHideHelpText: PropTypes.bool,
  /** Success message to display when success state  */
  successText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Error message to display when error state  */
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Alert message to display when alert state  */
  alertText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Name to set in the input tag */
  name: PropTypes.string,

  /** Id to set in the input tag */
  id: PropTypes.string,

  /** Label to set in the molecule field */
  label: PropTypes.string,

  /** Callback dispatch when selected prefix changes */
  onPrefixChange: PropTypes.func
}
