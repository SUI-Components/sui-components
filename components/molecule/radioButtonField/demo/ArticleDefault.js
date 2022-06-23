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

const ArticleDefault = ({className, ...props}) => {
  const [text, setText] = useState('label')
  const [checked, setChecked] = useState()
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        MoleculeRadioButtonField blends the RadioButton with the Field. User can
        provide a <Code>label</Code> text that will appear surrounding the
        radioButton element. This field element preserves its value under the{' '}
        <Code>checked</Code> boolean prop.
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
      <MoleculeRadioButtonField label={text} checked={checked} />
      <Paragraph>
        You can also provide a node element as a label using the{' '}
        <Code>nodeLabel</Code> (reactNode) prop.
      </Paragraph>
      <MoleculeRadioButtonField
        nodeLabel={<Paragraph>nodeLabel paragraph</Paragraph>}
        checked={checked}
      />
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'
ArticleDefault.propTypes = {className: PropTypes.string}

export default ArticleDefault
