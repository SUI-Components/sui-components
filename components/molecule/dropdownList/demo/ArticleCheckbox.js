import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph,
  RadioButton
} from '@s-ui/documentation-library'
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeDropdownList, {
  moleculeDropdownListSelectHandler
} from '../src/index.js'
import {OPTIONS} from './config.js'

const ArticleCheckbox = ({className}) => {
  const [checkbox, setCheckbox] = useState(true)
  const [singleState, setSingleState] = useState()
  return (
    <Article className={className}>
      <H2>Checkbox</H2>
      <Paragraph>
        The <Code>checkbox</Code> (boolean) prop can be changed acting as a
        provider to its descendant options. In case of having its own checkbox
        configuration, it will be preserved over the declared in Its list
        parent.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>checkbox</Label>
        </Cell>
        <Cell>
          <RadioButton
            value={checkbox}
            checked={checkbox}
            label={`${checkbox ? 'enabled' : 'disabled'}`}
            onClick={() => setCheckbox(!checkbox)}
          />
        </Cell>
        <Cell>
          <MoleculeDropdownList
            visible
            onSelect={moleculeDropdownListSelectHandler.single({
              value: singleState,
              onSelect: (event, {value, ...args}) => {
                setSingleState(value)
              }
            })}
            value={singleState}
            checkbox={checkbox}
          >
            {[
              {label: 'checkbox true forced', value: true},
              {label: 'checkbox false forced', value: false}
            ].map(({label, value}) => (
              <MoleculeDropdownOption
                value={label}
                checkbox={value}
                key={label}
              >
                {label}
              </MoleculeDropdownOption>
            ))}
            {[...OPTIONS].map(option => (
              <MoleculeDropdownOption key={option} value={option}>
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleCheckbox.displayName = 'ArticleCheckbox'

ArticleCheckbox.propTypes = {
  className: PropTypes.string
}

export default ArticleCheckbox
