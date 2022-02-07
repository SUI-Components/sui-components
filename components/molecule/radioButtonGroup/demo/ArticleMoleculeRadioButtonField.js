import PropTypes from 'prop-types'

import {H2, Paragraph, Article} from '@s-ui/documentation-library'
import MoleculeRadioButtonField from '@s-ui/react-molecule-radio-button-field'

import MoleculeRadioButtonGroup from '../src/index.js'
import CustomLabel from './components/CustomLabel.js'

const ArticleMoleculeRadioButtonField = ({className}) => {
  return (
    <Article className={className}>
      <H2>With MoleculeRadioButtonField</H2>
      <Paragraph>
        For this demo, you will need to implement the container
        "MoleculeRadioButtonGroup" and the components "MoleculeRadioButtonField"
      </Paragraph>
      <br />
      <MoleculeRadioButtonGroup
        onChange={(ev, {name, value}) => {
          // eslint-disable-next-line no-console
          console.log({[name]: value})
        }}
        name="field-favorite-beatle"
        value="john"
      >
        <MoleculeRadioButtonField
          id="john"
          value="john"
          nodeLabel={<CustomLabel text="John" />}
          helpText="John Lennon"
        />
        <MoleculeRadioButtonField
          id="paul"
          value="paul"
          label="Paul"
          helpText="Paul McCartney"
        />
        <MoleculeRadioButtonField
          id="george"
          value="george"
          label="George"
          helpText="George Harrison"
        />
        <MoleculeRadioButtonField
          id="ringo"
          value="ringo"
          label="Ringo"
          helpText="Ringo Star"
          disabled
        />
      </MoleculeRadioButtonGroup>
    </Article>
  )
}
ArticleMoleculeRadioButtonField.propTypes = {
  className: PropTypes.string
}

export default ArticleMoleculeRadioButtonField
