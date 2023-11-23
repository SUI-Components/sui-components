import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Input, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import MoleculeRadioButtonField, {MoleculeRadioButtonFieldStatus} from '../src/index.js'

const ArticleStatus = ({className, ...props}) => {
  const [text, setText] = useState('statusText')
  const [status, setStatus] = useState(MoleculeRadioButtonFieldStatus.SUCCESS)
  return (
    <Article className={className}>
      <H2>Status</H2>
      <Paragraph>
        User can provide a <Code>status</Code> (enum) prop.
      </Paragraph>
      <Input value={text} onChange={event => setText(event.target.value)} />
      <br />
      <br />
      <RadioButtonGroup value={status} onChange={(event, value) => setStatus(value)}>
        {Object.values(MoleculeRadioButtonFieldStatus).map(moleculeRadioButtonFieldStatus => (
          <RadioButton
            key={moleculeRadioButtonFieldStatus}
            checked={status === moleculeRadioButtonFieldStatus}
            label={moleculeRadioButtonFieldStatus}
            value={moleculeRadioButtonFieldStatus}
          />
        ))}
      </RadioButtonGroup>
      <br />
      <br />
      <MoleculeRadioButtonField status={status} label="label" helpText="helpText" statusText={text} />
    </Article>
  )
}

ArticleStatus.displayName = 'ArticleStatus'
ArticleStatus.propTypes = {className: PropTypes.string}

export default ArticleStatus
