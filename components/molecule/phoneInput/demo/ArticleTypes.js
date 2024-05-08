import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, H3} from '@s-ui/documentation-library'

import MoleculePhoneInput from '../src/index.js'
import {phoneValidationType, PREFIXES} from '../src/settings.js'

export default function ArticleTypes({openIcon, closeIcon}) {
  const [defaultPhone, setDefaultPhone] = useState('')
  const [splittedPhone, setSplittedPhone] = useState('')

  const onDefaultPhoneChange = (_, {value}) => {
    setDefaultPhone(value)
  }

  const onSplittedPhoneChange = (_, {value}) => {
    setSplittedPhone(value)
  }

  return (
    <Article>
      <H2>Types</H2>
      <H3>Default</H3>
      <MoleculePhoneInput
        value={defaultPhone}
        onChange={onDefaultPhoneChange}
        dropdownIcon={openIcon}
        dropdownCloseIcon={closeIcon}
        placeholder="612 345 678"
        type={phoneValidationType.DEFAULT}
        initialSelectedPrefix={PREFIXES[1]}
        prefixes={PREFIXES}
      />
      <H3>Label</H3>
      <MoleculePhoneInput
        value={splittedPhone}
        onChange={onSplittedPhoneChange}
        dropdownIcon={openIcon}
        dropdownCloseIcon={closeIcon}
        placeholder="612 345 678"
        label="Type here your phone"
        type={phoneValidationType.SPLITTED}
        initialSelectedPrefix={PREFIXES[0]}
        prefixes={PREFIXES}
      />
      <H3>Splitted</H3>
      <MoleculePhoneInput
        value={splittedPhone}
        onChange={onSplittedPhoneChange}
        dropdownIcon={openIcon}
        dropdownCloseIcon={closeIcon}
        placeholder="612 345 678"
        type={phoneValidationType.SPLITTED}
        initialSelectedPrefix={PREFIXES[0]}
        prefixes={PREFIXES}
      />

      <H3>Disabled</H3>
      <MoleculePhoneInput
        disabled
        dropdownCloseIcon={closeIcon}
        dropdownIcon={openIcon}
        hasDisabled
        initialSelectedPrefix={PREFIXES[2]}
        placeholder="612 345 678"
        prefixes={PREFIXES}
        value={666224411}
      />
    </Article>
  )
}

ArticleTypes.propTypes = {
  openIcon: PropTypes.element,
  closeIcon: PropTypes.element
}
