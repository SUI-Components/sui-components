import AtomRadioButton from '@s-ui/react-atom-radio-button'
import PropTypes from 'prop-types'
import {H2, Paragraph} from '@s-ui/documentation-library'
import MoleculeRadioButtonGroup from '../src/index.js'

const ArticleAtomRadioButton = ({className}) => {
  return (
    <div className={className}>
      <H2>With AtomRadioButton</H2>
      <Paragraph>
        For this demo, you will need to implement the container
        "MoleculeRadioButtonGroup" and the components "AtomRadioButton"
      </Paragraph>
      <br />
      <MoleculeRadioButtonGroup
        onChange={(ev, {name, value}) => {
          // eslint-disable-next-line no-console
          console.log({[name]: value})
        }}
        name="favorite-beatle"
        value="john"
      >
        <br />
        <AtomRadioButton value="john" />
        <AtomRadioButton value="paul" />
        <AtomRadioButton value="george" />
        <AtomRadioButton value="ringo" />
        <AtomRadioButton value="martin" disabled />
      </MoleculeRadioButtonGroup>
    </div>
  )
}
ArticleAtomRadioButton.propTypes = {
  className: PropTypes.string
}

export default ArticleAtomRadioButton
