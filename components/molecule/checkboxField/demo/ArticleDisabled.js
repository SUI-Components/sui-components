import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import MoleculeCheckboxField from 'components/molecule/checkboxField/src'

export const ArticleDisabled = ({className}) => {
  return (
    <Article>
      <H2>Disabled</H2>
      <Paragraph>
        For this demo we need to set the prop <Code>disabled</Code> to true.
      </Paragraph>
      <MoleculeCheckboxField
        id="disabled"
        label="Hide salary"
        value="In some place of La Mancha which name..."
        // eslint-disable-next-line no-console
        onChange={(e, {name, value}) => console.log({[name]: value})}
        disabled
      />
    </Article>
  )
}

ArticleDisabled.propTypes = {
  className: PropTypes.string
}

export default ArticleDisabled
