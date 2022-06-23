import React, {useState} from 'react'

import MoleculeButtonGroupField from 'components/molecule/buttonGroupField/src/index.js'
import PropTypes from 'prop-types'

import {
  Article,
  Bold,
  Cell,
  Code,
  Grid,
  H2,
  Input,
  ListItem,
  Paragraph,
  UnorderedList
} from '@s-ui/documentation-library'
import AtomButtom from '@s-ui/react-atom-button'

export const ArticleSemantic = ({className}) => {
  const [successText, setSuccessText] = useState('successText')
  const [errorText, setErrorText] = useState('errorText')
  const [alertText, setAlertText] = useState('alertText')
  const [helpText, setHelpText] = useState('helpText')

  const onChangeHandler = handler => event => handler(event.target.value)
  return (
    <Article className={`${className}-section`}>
      <H2>Semantic Text</H2>
      <Paragraph>
        These are semantical text props and in case of coinciding in the same
        component, this is the priority order:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>alertText:</Code> prop type string, used to show an alert.
        </ListItem>
        <ListItem>
          <Code>successText:</Code> prop type string, used to show a success
          text.
        </ListItem>
        <ListItem>
          <Code>errorText:</Code> prop type string, used to show an error text.
        </ListItem>
        <ListItem>
          <Code>helpText:</Code> prop type string, used to show a help text.
        </ListItem>
      </UnorderedList>
      <Paragraph>
        <Bold>Note</Bold>: <Code>helpText</Code> will always be shown, no matter
        the priority order.
      </Paragraph>
      <Grid cols={4} gutter={[8, 8]}>
        <Cell>
          <Input value={alertText} onChange={onChangeHandler(setAlertText)} />
        </Cell>
        <Cell>
          <Input
            value={successText}
            onChange={onChangeHandler(setSuccessText)}
          />
        </Cell>
        <Cell>
          <Input value={errorText} onChange={onChangeHandler(setErrorText)} />
        </Cell>
        <Cell>
          <Input value={helpText} onChange={onChangeHandler(setHelpText)} />
        </Cell>
      </Grid>
      <br />
      <MoleculeButtonGroupField
        id="error-help-text"
        label="Your text here"
        successText={successText}
        errorText={errorText}
        alertText={alertText}
        helpText={helpText}
      >
        <AtomButtom onClick={e => window.alert('clicked A')}>A</AtomButtom>
        <AtomButtom onClick={e => window.alert('clicked B')}>B</AtomButtom>
        <AtomButtom onClick={e => window.alert('clicked C')}>C</AtomButtom>
      </MoleculeButtonGroupField>
    </Article>
  )
}

ArticleSemantic.propTypes = {
  className: PropTypes.string
}

export default ArticleSemantic
