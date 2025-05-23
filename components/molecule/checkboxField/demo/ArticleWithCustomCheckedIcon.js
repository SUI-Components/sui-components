import MoleculeCheckboxField from 'components/molecule/checkboxField/src'
import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

const CheckedIcon = () => <p>✅</p>
const UncheckedIcon = () => <p>❌</p>

export const ArticleWithCustomCheckedIcon = ({className}) => {
  return (
    <Article className={`${className}-section`}>
      <H2>With custom checked icon</H2>
      <Paragraph>Label click checks the icon as if it was native</Paragraph>
      <MoleculeCheckboxField
        id="custom-checked-icon-id"
        name="custom-checked-icon-name"
        value="value"
        nodeLabel={<div>I'm a label as a react node clickable</div>}
        checkedIcon={CheckedIcon}
        uncheckedIcon={UncheckedIcon}
        onChange={(e, {name, value, checked}) => {
          console.log({name, checked, value}) // eslint-disable-line no-console
        }}
      />
    </Article>
  )
}

ArticleWithCustomCheckedIcon.propTypes = {
  className: PropTypes.string
}

export default ArticleWithCustomCheckedIcon
