import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import AtomButtom from '@s-ui/react-atom-button'

import MoleculeButtonGroupField from 'components/molecule/buttonGroupField/src/index.js'

export const ArticleInformation = ({className}) => {
  return (
    <Article className={`${className}-section`}>
      <H2>With Information HelpText</H2>
      <Paragraph>
        The prop <Code>helpText</Code> is used add extra information.
      </Paragraph>
      <MoleculeButtonGroupField
        id="info-help-text"
        label="Your text here"
        helpText="Your description here"
      >
        <AtomButtom onClick={e => window.alert('clicked A')}>A</AtomButtom>
        <AtomButtom onClick={e => window.alert('clicked B')}>B</AtomButtom>
        <AtomButtom onClick={e => window.alert('clicked C')}>C</AtomButtom>
      </MoleculeButtonGroupField>
    </Article>
  )
}

ArticleInformation.propTypes = {
  className: PropTypes.string
}

export default ArticleInformation
