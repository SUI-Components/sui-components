import MoleculeCheckboxField from 'components/molecule/checkboxField/src'
import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

export const ArticleWithCustomCheckedIcon = ({className}) => {
  return (
    <Article className={`${className}-section`}>
      <H2>With custom checked icon</H2>
      <Paragraph>Label click checks the icon as if it was native</Paragraph>
      <MoleculeCheckboxField
        id="custom-checked-icon-id"
        name="custom-checked-icon-name"
        value="value"
        label={<div>I'm a label as a react node clickable</div>}
        checkedIcon={() => <p>✅</p>}
        uncheckedIcon={() => <p>❌</p>}
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
