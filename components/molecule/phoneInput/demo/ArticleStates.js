import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, H3} from '@s-ui/documentation-library'

import MoleculePhoneInput from '../src/index.js'
import {phoneValidationType, PREFIXES} from '../src/settings.js'

export default function ArticleStates({openIcon, closeIcon}) {
  const [defaultPhone, setDefaultPhone] = useState('')
  const [errorPhone, setErrorPhone] = useState('')

  const onDefaultPhoneChange = (_, {value}) => {
    setDefaultPhone(value)
  }

  const onErrorPhoneChange = (_, {value}) => {
    setErrorPhone(value)
  }

  return (
    <Article>
      <H2>States</H2>
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
        helpText="The format should be numbers"
      />

      <br />
      <br />

      <H3>Error</H3>
      <MoleculePhoneInput
        value={errorPhone}
        onChange={onErrorPhoneChange}
        dropdownIcon={openIcon}
        dropdownCloseIcon={closeIcon}
        placeholder="612 345 678"
        type={phoneValidationType.DEFAULT}
        initialSelectedPrefix={PREFIXES[2]}
        prefixes={PREFIXES}
        hasError
        helpText="Incorrect format"
      />
      <br />
      <br />

      <MoleculePhoneInput
        value={errorPhone}
        onChange={onErrorPhoneChange}
        dropdownIcon={openIcon}
        dropdownCloseIcon={closeIcon}
        placeholder="612 345 678"
        type={phoneValidationType.SPLITTED}
        initialSelectedPrefix={PREFIXES[1]}
        prefixes={PREFIXES}
        hasError
        helpText="Incorrect format"
      />
    </Article>
  )
}

ArticleStates.propTypes = {
  openIcon: PropTypes.element,
  closeIcon: PropTypes.element
}
