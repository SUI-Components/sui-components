import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Code,
  H2,
  Input,
  Paragraph,
  RadioButton
} from '@s-ui/documentation-library'

import MoleculeRadioButtonField from '../src/index.js'

const ArticleHelpText = ({className, ...props}) => {
  const [text, setText] = useState('helpText')
  const [checked, setChecked] = useState()
  return (
    <Article className={className}>
      <H2>HelpText</H2>
      <Paragraph>
        you can use the <Code>helpText</Code> string prop in order to provide
        some extra footer field information
      </Paragraph>
      <Input value={text} onChange={event => setText(event.target.value)} />
      <br />
      <br />
      <RadioButton
        checked={checked}
        onClick={() => setChecked(!checked)}
        label={`checked ${checked ? 'true' : 'false'}`}
      />
      <br />
      <br />
      <MoleculeRadioButtonField
        label="label"
        helpText={text}
        checked={checked}
      />
    </Article>
  )
}

ArticleHelpText.displayName = 'ArticleHelpText'
ArticleHelpText.propTypes = {className: PropTypes.string}

export default ArticleHelpText
