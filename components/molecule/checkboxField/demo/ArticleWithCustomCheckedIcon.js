import {useState} from 'react'

import MoleculeCheckboxField from 'components/molecule/checkboxField/src'
import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

export const ArticleWithCustomCheckedIcon = ({className}) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Article className={`${className}-section`}>
      <H2>With custom checked icon</H2>
      <Paragraph>Label click checks the icon as if it was native</Paragraph>
      <MoleculeCheckboxField
        id="custom-checked-icon"
        checked={isChecked}
        nodeLabel={<div>I'm a nodeLabel</div>}
        checkedIcon={() => <p>🍕</p>}
        // eslint-disable-next-line no-console
        onChange={(e, {name, value, checked}) => {
          console.log({[name]: value})
          setIsChecked(checked)
        }}
      />
    </Article>
  )
}

ArticleWithCustomCheckedIcon.propTypes = {
  className: PropTypes.string
}

export default ArticleWithCustomCheckedIcon
