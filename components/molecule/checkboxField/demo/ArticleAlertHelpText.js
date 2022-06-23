import MoleculeCheckboxField from 'components/molecule/checkboxField/src'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

export const ArticleAlertHelpText = ({className}) => {
  return (
    <Article className={`${className}-section`}>
      <H2>With Alert validation HelpText</H2>
      <Paragraph>
        Use the prop <Code>alertText</Code> to show an alert during the
        validation.
      </Paragraph>
      <MoleculeCheckboxField
        id="alert-help-text"
        label="Notes"
        alertText="Something meh..."
        value="In some place of La Mancha which name..."
        // eslint-disable-next-line no-console
        onChange={(e, {name, value}) => console.log({[name]: value})}
      />
    </Article>
  )
}

ArticleAlertHelpText.propTypes = {
  className: PropTypes.string
}

export default ArticleAlertHelpText
