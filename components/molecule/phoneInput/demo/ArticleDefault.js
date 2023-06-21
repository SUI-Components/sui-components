import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2} from '@s-ui/documentation-library'

import MoleculePhoneInput from '../src/index.js'
import {PREFIXES} from '../src/settings.js'

export default function ArticleDefault({icon}) {
  const [phone, setPhone] = useState('')

  const onValueChange = (_, {value}) => {
    setPhone(value)
  }

  return (
    <Article>
      <H2>Default component</H2>
      <MoleculePhoneInput
        value={phone}
        onChange={onValueChange}
        dropdownIcon={icon}
        placeholder="612 345 678"
        prefixes={PREFIXES}
        initialSelectedPrefix={PREFIXES[0]}
      />
    </Article>
  )
}

ArticleDefault.propTypes = {
  icon: PropTypes.element
}
