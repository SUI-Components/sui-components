import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import MoleculeCheckboxField from 'components/molecule/checkboxField/src'

export const ArticleErrorHelpText = ({className}) => {
  return (
    <Article className={`${className}-section`}>
      <H2>With Error validation HelpText</H2>
      <Paragraph>
        Use the prop <Code>errorText</Code> to show an error during the
        validation.
      </Paragraph>
      <MoleculeCheckboxField
        id="error-help-text"
        label="Notes"
        errorText="All wrong!"
        value="In some place of La Mancha which name..."
        // eslint-disable-next-line no-console
        onChange={(e, {name, value}) => console.log({[name]: value})}
      />
    </Article>
  )
}

ArticleErrorHelpText.propTypes = {
  className: PropTypes.string
}

export default ArticleErrorHelpText
