import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeDropdownList, {moleculeDropdownListSelectHandler, moleculeDropdownListSizes} from '../src/index.js'
import {OPTIONS} from './config.js'

const ArticleSize = ({className}) => {
  const [size, setSize] = useState()
  const [singleState, setSingleState] = useState()
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        User can change the provided size using the <Code>size</Code> (enum:{' '}
        {`${Object.values(moleculeDropdownListSizes).join('|')}`}) prop. Valid values are under{' '}
        <Code>moleculeDropdownListSizes</Code> exported variable:
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup value={size} onChange={(event, value) => setSize(size === value ? undefined : value)}>
            {[undefined, ...Object.values(moleculeDropdownListSizes), false].map(moleculeDropdownListSize => (
              <RadioButton
                value={moleculeDropdownListSize}
                checked={moleculeDropdownListSize === size}
                label={`${moleculeDropdownListSize}`}
                key={`${moleculeDropdownListSize}`}
              />
            ))}
          </RadioButtonGroup>
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
            size={size}
          >
            {[...OPTIONS, 'Option 8', 'Option 9', 'Option 10'].map(option => (
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

ArticleSize.displayName = 'ArticleSize'

ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
