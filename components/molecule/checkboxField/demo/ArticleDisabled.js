import MoleculeCheckboxField from 'components/molecule/checkboxField/src'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

export const ArticleDisabled = ({className}) => {
  return (
    <Article className={`${className}-section`}>
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
