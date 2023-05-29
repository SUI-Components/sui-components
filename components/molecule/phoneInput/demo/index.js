import {useState} from 'react'

import {
  AntDesignIcon,
  Article,
  H1,
  H2,
  H3,
  Paragraph
} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import MoleculePhoneInput from '../src/index.js'
import {phoneValidationType, PREFIXES} from '../src/settings.js'

export const icon = (
  <AtomIcon>
    <AntDesignIcon icon={'AiOutlineDown'} style={{fill: 'currentColor'}} />
  </AtomIcon>
)

export default () => {
  const [phone, setPhone] = useState('')

  const onValueChange = (_, {value}) => {
    setPhone(value)
  }

  return (
    <div className="sui-StudioPreview">
      <H1>Phone Input Demo</H1>
      <Paragraph>Telephone type input with prefixes in a dropdown.</Paragraph>
      <br />
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
      <br />
      <Article>
        <H2>Types</H2>
        <H3>Default</H3>
        <MoleculePhoneInput
          value={phone}
          onChange={onValueChange}
          dropdownIcon={icon}
          placeholder="612 345 678"
          type={phoneValidationType.DEFAULT}
          initialSelectedPrefix={PREFIXES[1]}
          prefixes={PREFIXES}
        />
        <H3>Splitted</H3>
        <MoleculePhoneInput
          value={phone}
          onChange={onValueChange}
          dropdownIcon={icon}
          placeholder="612 345 678"
          type={phoneValidationType.SPLITTED}
          initialSelectedPrefix={PREFIXES[0]}
          prefixes={PREFIXES}
        />
      </Article>
      <Article>
        <H2>States</H2>
        <H3>Default</H3>
        <MoleculePhoneInput
          value={phone}
          onChange={onValueChange}
          dropdownIcon={icon}
          placeholder="612 345 678"
          type={phoneValidationType.DEFAULT}
          initialSelectedPrefix={PREFIXES[1]}
          prefixes={PREFIXES}
        />
        <H3>Error</H3>
        <MoleculePhoneInput
          value={phone}
          onChange={onValueChange}
          dropdownIcon={icon}
          placeholder="612 345 678"
          type={phoneValidationType.DEFAULT}
          initialSelectedPrefix={PREFIXES[2]}
          prefixes={PREFIXES}
          hasError
        />
        <br />
        <MoleculePhoneInput
          value={phone}
          onChange={onValueChange}
          dropdownIcon={icon}
          placeholder="612 345 678"
          type={phoneValidationType.SPLITTED}
          initialSelectedPrefix={PREFIXES[1]}
          prefixes={PREFIXES}
          hasError
        />
      </Article>
    </div>
  )
}
