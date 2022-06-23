import MoleculeCheckboxField from 'components/molecule/checkboxField/src'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

export const ArticleWithHelpText = ({className}) => {
  return (
    <Article className={`${className}-section`}>
      <H2>With Information HelpText</H2>
      <Paragraph>
        The prop <Code>helpText</Code> is used to add extra information.
      </Paragraph>
      <MoleculeCheckboxField
        id="info-help-text"
        label="Description"
        helpText="Tu descripción en Latin"
        // eslint-disable-next-line no-console
        onChange={(e, {name, value}) => console.log({[name]: value})}
      />
    </Article>
  )
}

ArticleWithHelpText.propTypes = {
  className: PropTypes.string
}

export default ArticleWithHelpText
