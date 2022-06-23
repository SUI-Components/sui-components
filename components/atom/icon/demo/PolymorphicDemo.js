import {useState} from 'react'

import {
  AntDesignIcon,
  Article,
  Code,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import AtomIcon, {ATOM_ICON_SIZES} from '../src/index.js'
import {CLASS_SECTION, ICONS} from './settings.js'

const PolymorphicDemo = () => {
  const ELEMENTS = [undefined, 'button', 'i', 'div']
  const [selectedElement, setElement] = useState()
  return (
    <Article className={CLASS_SECTION}>
      <H2>Polymorphism</H2>
      <Paragraph>
        You can select the element tag using the <Code>as</Code> prop. By
        default it is an span.
      </Paragraph>
      –––
      <br />
      <br />
      <RadioButtonGroup
        onChange={(event, value) => setElement(value)}
        value={selectedElement}
      >
        {ELEMENTS.map((value, index) => (
          <RadioButton
            key={index}
            value={value}
            label={`${value}`}
            checked={value === selectedElement}
          />
        ))}
      </RadioButtonGroup>
      <div style={{display: 'flex'}}>
        <AtomIcon
          as={selectedElement}
          color="currentColor"
          size={ATOM_ICON_SIZES.medium}
        >
          <AntDesignIcon
            icon={Object.values(ICONS)[1]}
            style={{color: 'currentColor'}}
          />
        </AtomIcon>
      </div>
    </Article>
  )
}

export default PolymorphicDemo
