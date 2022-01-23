import React from 'react'
import {withStateValue} from '@s-ui/hoc'
import {H1, H2, Box, Paragraph, Article} from '@s-ui/documentation-library'

import MoleculeInputField from '../src/index.js'

const darkBackground = {
  backgroundColor: '#2b91c1'
}

const MoleculeInputFieldWithState = withStateValue(MoleculeInputField)

const Demo = () => (
  <main>
    <H1>Input Field</H1>
    <Paragraph>
      The InputField component is an Input component wrapped with a Field. It
      adds some more functionalities to a basic Input, such as a label text, a
      caption and status behaviors.
    </Paragraph>
    <WithPlaceholder />
    <br />
    <WithAddons />
    <br />
    <WithHelpText />
    <br />
    <WithHelpTextAndAutoHide />
    <br />
    <WithSuccessHelpText />
    <br />
    <WithErrorHelpText />
    <br />
    <WithAlertHelpText />
    <br />
    <WithoutLabel />
    <br />
    <WithContrastLabel />
  </main>
)

export default Demo

/*********************************/

const WithPlaceholder = () => (
  <Article>
    <H2>With placeholder</H2>
    <MoleculeInputFieldWithState
      id="comments"
      label="Comments"
      placeholder="Please, write something cool..."
      value=""
    />
  </Article>
)

const WithAddons = () => (
  <Article>
    <H2>With addons</H2>
    <MoleculeInputFieldWithState
      id="second"
      leftAddon="http://"
      rightAddon="@schibsted.com"
      label="Description"
    />
  </Article>
)

const WithHelpText = () => (
  <Article>
    <H2>With Information HelpText</H2>
    <MoleculeInputFieldWithState
      id="description-inline2"
      label="Description"
      helpText="Tu descripción en Latin"
    />
  </Article>
)

const WithHelpTextAndAutoHide = () => (
  <Article>
    <H2>With Information HelpText and Autohide</H2>
    <MoleculeInputFieldWithState
      id="description-inline-autohide"
      label="Description"
      helpText="Tu descripción en Latin"
      autoHideHelpText
    />
  </Article>
)

const WithSuccessHelpText = () => (
  <Article>
    <H2>With Success Validation HelpText</H2>
    <MoleculeInputFieldWithState
      id="description2"
      label="Description"
      value="In some place of La Mancha which name..."
      successText="Everything ok!"
    />
  </Article>
)

const WithErrorHelpText = () => (
  <Article>
    <H2>With Error Validation HelpText</H2>
    <MoleculeInputFieldWithState
      id="notes"
      label="Notes"
      errorText="All wrong!"
      value="In some place of La Mancha which name..."
    />
  </Article>
)

const WithAlertHelpText = () => (
  <Article>
    <H2>With Alert Validation HelpText</H2>
    <MoleculeInputFieldWithState
      id="notes"
      label="Notes"
      alertText="OK but there's something you must know..."
      value="In some place of La Mancha which name..."
    />
  </Article>
)

const WithoutLabel = () => (
  <Article>
    <H2>Without label</H2>
    <MoleculeInputFieldWithState
      id="notes"
      value="In some place of La Mancha which name..."
    />
  </Article>
)

const WithContrastLabel = () => (
  <Article>
    <H2>With contrast label</H2>
    <Box style={darkBackground}>
      <MoleculeInputFieldWithState
        id="notes"
        value="In some place of La Mancha which name..."
        label="Label"
        useContrastLabel
      />
    </Box>
  </Article>
)
