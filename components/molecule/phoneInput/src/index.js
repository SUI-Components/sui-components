import {useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'
import flagIcons from 'rendered-country-flags'

import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '@s-ui/react-atom-icon'
import AtomInput from '@s-ui/react-atom-input'
import {TYPES} from '@s-ui/react-atom-input/lib/config.js'
import MoleculeDropdownList, {
  moleculeDropdownListDesigns
} from '@s-ui/react-molecule-dropdown-list'
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

import {phoneValidationType} from './settings.js'

const BASE_CLASS = 'sui-MoleculePhoneInput'

export default function MoleculePhoneInput({
  dropdownIcon,
  value = '',
  prefixes = [],
  onChange,
  placeholder,
  hasError,
  initialSelectedPrefix = prefixes[0],
  type = phoneValidationType.DEFAULT
}) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedPrefix, setSelectedPrefix] = useState(initialSelectedPrefix)
  const [isLandLine, setIsLandLine] = useState(false)
  const modalRef = useRef(null)
  const inputPrefixRef = useRef(null)

  const baseClass = cx(
    {
      [`splitted`]: type === phoneValidationType.SPLITTED,
      [`${BASE_CLASS}--error`]: hasError
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
              height={24}
              width={24}
              className={`${baseClass}-input-prefix-flag`}
              src={flagIcons[selectedPrefix?.value]}
            />
          )}
          <AtomIcon
            size={ATOM_ICON_SIZES.medium}
            color={ATOM_ICON_COLORS.currentColor}
          >
            {dropdownIcon}
          </AtomIcon>
        </div>
        <div className={`${baseClass}-input-phoneContainer`}>
          {selectedPrefix && (
            <p className={`${baseClass}-input-prefix-code`}>
              {selectedPrefix.countryCode}
            </p>
          )}
          <AtomInput
            value={value.toString()}
            mask={
              selectedPrefix && {
                mask: isLandLine
                  ? selectedPrefix.mask.landlineMask
                  : selectedPrefix.mask.mobileMask
              }
            }
            placeholder={placeholder}
            type={TYPES.MASK}
            onChange={(e, {value}) => {
              selectedPrefix.landlinePrefixs.includes(value[0])
                ? setIsLandLine(true)
                : setIsLandLine(false)

              onChange(e, {
                prefix: selectedPrefix.countryCode, // remove spaces from value
                value: value.toString().replace(/\s/g, '')
              })
            }}
            noBorder
          />
        </div>
      </div>
      {showDropdown && (
        <div className={`${baseClass}-dropdown`}>
          <MoleculeDropdownList
            design={moleculeDropdownListDesigns.FLAT}
            ref={modalRef}
            visible={true}
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
                      height={24}
                      width={24}
                      className={`${baseClass}-dropdown-option-label`}
                      src={flagIcons[prefix.value]}
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
  dropdownIcon: PropTypes.node,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  prefixes: PropTypes.array,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(Object.values(phoneValidationType)),
  initialSelectedPrefix: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    countryCode: PropTypes.string,
    mask: PropTypes.string
  }),
  hasError: PropTypes.bool
}
