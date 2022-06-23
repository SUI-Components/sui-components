import MoleculeCheckboxField from 'components/molecule/checkboxField/src'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

export const ArticleSuccessHelpText = ({className}) => {
  return (
    <Article className={`${className}-section`}>
      <H2>With Success Validation HelpText</H2>
      <Paragraph>
        Use the prop <Code>successText</Code> to show a successful validation.
      </Paragraph>
      <MoleculeCheckboxField
        id="success-help-text"
        label="Description"
        value="In some place of La Mancha which name..."
        successText="Everything ok!"
        // eslint-disable-next-line no-console
        onChange={(e, {name, value}) => console.log({[name]: value})}
      />
    </Article>
  )
}

ArticleSuccessHelpText.propTypes = {
  className: PropTypes.string
}

export default ArticleSuccessHelpText
