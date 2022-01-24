import {useState} from 'react'

import {Article, H2} from '@s-ui/documentation-library'
import AtomCheckbox from '@s-ui/react-atom-checkbox'
import AtomLabel from '@s-ui/react-atom-label'

import AtomHelpText from '../src/index.js'

const CheckboxDemo = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Article>
      <H2>Checkbox</H2>
      <AtomCheckbox
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <AtomLabel text="An important decision" inline="left" />
      <AtomHelpText text="Write here why the user should check this" />
    </Article>
  )
}

export default CheckboxDemo
