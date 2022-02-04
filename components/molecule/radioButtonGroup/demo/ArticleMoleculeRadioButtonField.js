import PropTypes from 'prop-types'
import {H2, Paragraph} from '@s-ui/documentation-library'
import MoleculeRadioButtonGroup from '../src/index.js'
import MoleculeRadioButtonField from '@s-ui/react-molecule-radio-button-field'
import AtomLabel from '@s-ui/react-atom-label'

const CustomLabel = ({text, type, name, onClickLabel}) => (
  <>
    <AtomLabel
      name={name}
      text={text}
      inline="left"
      onClick={onClickLabel}
      type={type}
    />
    <span>I am out of the label</span>
  </>
)

CustomLabel.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onClickLabel: PropTypes.func
}

const ArticleMoleculeRadioButtonField = ({className}) => {
  return (
    <div className={className}>
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
    </div>
  )
}
ArticleMoleculeRadioButtonField.propTypes = {
  className: PropTypes.string
}

export default ArticleMoleculeRadioButtonField
