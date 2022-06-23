import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

import OrganismNestedCheckboxes from '../../src/index.js'
import CheckboxField from '../components/CheckboxField.js'
import {ICONS} from '../settings.js'

const ArticleDefault = ({className}) => {
  const [state, setState] = useState({})
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph></Paragraph>
      <OrganismNestedCheckboxes
        checkedIcon={ICONS.IconCheck}
        intermediateIcon={ICONS.IconHalfCheck}
        id="default"
        labelParent="labelParent"
        onChangeParent={() => {
          console.log('onChangeParent') // eslint-disable-line no-console
        }}
      >
        <CheckboxField
          id="default-1"
          label="Nested 1"
          state={state}
          setState={setState}
        />
        <CheckboxField
          id="default-2"
          label="Nested 2"
          state={state}
          setState={setState}
        />
        <CheckboxField
          id="default-3"
          label="Nested 3"
          state={state}
          setState={setState}
        />
      </OrganismNestedCheckboxes>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
