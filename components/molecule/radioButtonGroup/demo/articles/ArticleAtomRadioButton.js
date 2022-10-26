import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'
import AtomRadioButton from '@s-ui/react-atom-radio-button'

import MoleculeRadioButtonGroup from '../../src/index.js'

const ArticleAtomRadioButton = ({className}) => {
  return (
    <Article className={className}>
      <H2>With AtomRadioButton</H2>
      <Paragraph>
        For this demo, you will need to implement the container
        "MoleculeRadioButtonGroup" and the components "AtomRadioButton"
      </Paragraph>
      <br />
      <MoleculeRadioButtonGroup
        onChange={
          (ev, {name, value}) => console.log({[name]: value}) // eslint-disable-line no-console
        }
        name="favorite-beatle"
        defaultValue="john"
      >
        <AtomRadioButton value="john" />
        <AtomRadioButton value="paul" />
        <AtomRadioButton value="george" />
        <AtomRadioButton value="ringo" />
        <AtomRadioButton value="martin" disabled />
      </MoleculeRadioButtonGroup>
    </Article>
  )
}
ArticleAtomRadioButton.propTypes = {
  className: PropTypes.string
}

export default ArticleAtomRadioButton
