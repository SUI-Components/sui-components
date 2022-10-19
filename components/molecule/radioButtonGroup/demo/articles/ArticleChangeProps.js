import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'
import MoleculeRadioButtonField from '@s-ui/react-molecule-radio-button-field'

import MoleculeRadioButtonGroup from '../../src/index.js'

const ArticleChangeProps = ({className}) => {
  const [value, setValue] = useState('john')
  return (
    <Article className={className}>
      <H2>Change props from parent</H2>
      <Paragraph />
      <br />
      <button
        onClick={() => {
          setValue('paul')
        }}
      >
        Change value to Paul
      </button>
      <br />
      <br />
      <br />
      <MoleculeRadioButtonGroup
        onChange={(ev, {name, value}) => {
          setValue(value)
          // eslint-disable-next-line no-console
          console.log({[name]: value})
        }}
        name="change-prop-from-state"
        value={value}
      >
        <MoleculeRadioButtonField
          id="john-change-prop-from-state"
          value="john"
          label="John"
          helpText="John Lennon"
        />
        <MoleculeRadioButtonField
          id="paul-change-prop-from-state"
          value="paul"
          label="Paul"
          helpText="Paul McCartney"
        />
        <MoleculeRadioButtonField
          id="george-change-prop-from-state"
          value="george"
          label="George"
          helpText="George Harrison"
        />
        <MoleculeRadioButtonField
          id="ringo-change-prop-from-state"
          value="ringo"
          label="Ringo"
          helpText="Ringo Star"
        />
      </MoleculeRadioButtonGroup>
    </Article>
  )
}
ArticleChangeProps.propTypes = {
  className: PropTypes.string
}

export default ArticleChangeProps
