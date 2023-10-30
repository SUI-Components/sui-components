import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, H3} from '@s-ui/documentation-library'

import MoleculePhoneInput from '../src/index.js'
import {PREFIXES} from '../src/settings.js'

export default function ArticleDefault({openIcon, closeIcon}) {
  const [phone1, setPhone1] = useState('')
  const [phone2, setPhone2] = useState('666224411')

  const onValueChange1 = (_, {value}) => {
    setPhone1(value)
  }

  const onValueChange2 = (_, {value}) => {
    setPhone2(value)
  }

  return (
    <Article>
      <H2>Default component</H2>
      <H3>With placeholder</H3>
      <MoleculePhoneInput
        value={phone1}
        onChange={onValueChange1}
        dropdownIcon={openIcon}
        placeholder="612 345 678"
        prefixes={PREFIXES}
        dropdownCloseIcon={closeIcon}
        initialSelectedPrefix={PREFIXES[0]}
        name="name1"
        id="id1"
      />
      <H3>With value</H3>
      <MoleculePhoneInput
        value={phone2}
        onChange={onValueChange2}
        dropdownIcon={openIcon}
        prefixes={PREFIXES}
        dropdownCloseIcon={closeIcon}
        initialSelectedPrefix={PREFIXES[0]}
        name="name2"
        id="id2"
      />
    </Article>
  )
}

ArticleDefault.propTypes = {
  openIcon: PropTypes.element,
  closeIcon: PropTypes.element
}
