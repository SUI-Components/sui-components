import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Code,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import MoleculeDropdownOption, {
  moleculeDropdownOptionTextWrapStyles
} from '../src/index.js'
import {CLASS_DEMO_OPTION} from './config.js'
import LoremIpsum from './LoremIpsum.js'

const ArticleTextWrap = ({className}) => {
  const [textWrap, setTextWrap] = useState()
  return (
    <Article className={className}>
      <H2>Text Wrap</H2>
      <Paragraph>
        Each dropDownOption children content can be ellipsed controlled under
        the <Code>textWrap</Code> (enum) prop
      </Paragraph>
      <RadioButtonGroup
        value={textWrap}
        onChange={(event, value) => setTextWrap(value)}
      >
        {[
          ['undefined', undefined],
          ...Object.entries(moleculeDropdownOptionTextWrapStyles)
        ].map(([, textWrapStylesValue]) => (
          <RadioButton
            value={textWrapStylesValue}
            label={`${textWrapStylesValue}`}
            checked={textWrap === textWrapStylesValue}
          />
        ))}
      </RadioButtonGroup>
      <br />
      <br />
      <div className={CLASS_DEMO_OPTION}>
        <MoleculeDropdownOption textWrap={textWrap}>
          <LoremIpsum units="words" count={200} format="plain" />
        </MoleculeDropdownOption>
      </div>
    </Article>
  )
}

ArticleTextWrap.displayName = 'ArticleTextWrap'

ArticleTextWrap.propTypes = {className: PropTypes.string}

export default ArticleTextWrap
