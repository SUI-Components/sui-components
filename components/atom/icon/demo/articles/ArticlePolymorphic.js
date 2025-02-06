import {useState} from 'react'

import PropTypes from 'prop-types'

import {AntDesignIcon, Article, Code, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import AtomIcon, {ATOM_ICON_SIZES} from '../../src/index.js'
import {ICONS} from '../settings.js'

const ArticlePolymorphic = ({className}) => {
  const ELEMENTS = [undefined, 'button', 'i', 'div']
  const [selectedElement, setElement] = useState()
  return (
    <Article className={className}>
      <H2>Polymorphism</H2>
      <Paragraph>
        You can select the element tag using the <Code>as</Code> prop. By default it is an span.
      </Paragraph>
      –––
      <br />
      <br />
      <RadioButtonGroup onChange={(event, value) => setElement(value)} value={selectedElement}>
        {ELEMENTS.map((value, index) => (
          <RadioButton key={index} value={value} label={`${value}`} checked={value === selectedElement} />
        ))}
      </RadioButtonGroup>
      <div style={{display: 'flex'}}>
        <AtomIcon as={selectedElement} color="currentColor" size={ATOM_ICON_SIZES.medium}>
          <AntDesignIcon icon={Object.values(ICONS)[1].name} style={{color: 'currentColor'}} />
        </AtomIcon>
      </div>
    </Article>
  )
}

ArticlePolymorphic.propTypes = {
  className: PropTypes.node
}

export default ArticlePolymorphic
