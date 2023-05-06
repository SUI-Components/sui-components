import {useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

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

import {getFlagEmoji, phoneValidationType} from './settings.js'

const BASE_CLASS = 'sui-MoleculePhoneValidation'

export default function MoleculePhoneValidation({
  dropdownIcon,
  maxLength = 11,
  phone,
  prefixes = [],
  setPhone,
  type = phoneValidationType.DEFAULT
}) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedPrefix, setSelectedPrefix] = useState(prefixes[0])
  const modalRef = useRef(null)
  const inputPrefixRef = useRef(null)

  const baseClass = cx(
    {
      [`splitted`]: type === phoneValidationType.SPLITTED
    },
    BASE_CLASS
  )

  const isUserClickingOutside = event =>
    modalRef.current &&
    !modalRef.current.contains(
      event.target &&
        inputPrefixRef.current &&
        !inputPrefixRef.current.contains(event.target)
    )

  useEffect(() => {
    const handleClickOutside = event => {
      if (isUserClickingOutside(event)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [baseClass])

  useEffect(() => {
    phone && setPhone(`${selectedPrefix.countryCode} ${phone.split(' ')[1]}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPrefix])

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-input`}>
        <div
          ref={inputPrefixRef}
          className={`${baseClass}-input-prefix`}
          testId="molecule-phone-validation-input-prefix"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className={`${baseClass}-input-prefix-flag`}>
            {getFlagEmoji(selectedPrefix.value)}
          </span>
          <AtomIcon
            size={ATOM_ICON_SIZES.medium}
            color={ATOM_ICON_COLORS.currentColor}
          >
            {dropdownIcon}
          </AtomIcon>
        </div>
        <div className={`${baseClass}-input-phoneContainer`}>
          <p className={`${baseClass}-input-prefix-code`}>
            {selectedPrefix.countryCode}
          </p>
          <AtomInput
            value={
              phone.toString().split(' ')[1]
                ? phone
                    .toString()
                    .split(' ')[1]
                    .replace(/\s/g, '')
                    .match(/.{1,3}/g)
                    .join(' ')
                : ''
            }
            type={TYPES.TEL}
            onChange={e => {
              const formattedPhone = `${e.target.value
                .toString()
                .replace(/\s/g, '')}`
              if (isNaN(formattedPhone)) return
              setPhone(`${selectedPrefix.countryCode} ${formattedPhone}`)
            }}
            maxLength={maxLength}
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
                  selected={selectedPrefix}
                  key={prefix.countryCode}
                  onClick={() => {
                    setSelectedPrefix(prefix)
                    setShowDropdown(false)
                  }}
                >
                  <div className={`${baseClass}-dropdown-option`}>
                    <span className={`${baseClass}-dropdown-option-flag`}>
                      {getFlagEmoji(prefix.value)}
                    </span>
                    <span
                      className={
                        prefix === selectedPrefix
                          ? `${baseClass}-dropdown-option-label selected`
                          : `${baseClass}-dropdown-option-label`
                      }
                    >
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

MoleculePhoneValidation.displayName = 'MoleculePhoneValidation'

MoleculePhoneValidation.propTypes = {
  dropdownIcon: PropTypes.node,
  maxLength: PropTypes.number,
  phone: PropTypes.string,
  prefixes: PropTypes.array,
  setPhone: PropTypes.func,
  type: PropTypes.oneOf(Object.values(phoneValidationType))
}
