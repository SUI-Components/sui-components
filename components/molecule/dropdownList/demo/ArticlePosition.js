import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeDropdownList, {moleculeDropdownListPositions, moleculeDropdownListSelectHandler} from '../src/index.js'
import {OPTIONS} from './config.js'

const ArticlePosition = ({className}) => {
  const [position, setPosition] = useState()
  const [singleState, setSingleState] = useState()
  return (
    <Article className={className}>
      <H2>Position</H2>
      <Paragraph>
        User can change the provided position using the <Code>position</Code> (enum:{' '}
        {`${Object.values(moleculeDropdownListPositions).join('|')}`}) prop. Valid values are under{' '}
        <Code>moleculeDropdownListPositions</Code> exported variable:
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup
            value={position}
            onChange={(event, value) => setPosition(position === value ? undefined : value)}
          >
            {[undefined, ...Object.values(moleculeDropdownListPositions), false].map(moleculeDropdownListPosition => (
              <RadioButton
                value={moleculeDropdownListPosition}
                checked={moleculeDropdownListPosition === position}
                label={`${moleculeDropdownListPosition}`}
                key={`${moleculeDropdownListPosition}`}
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
            position={position}
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

ArticlePosition.displayName = 'ArticlePosition'

ArticlePosition.propTypes = {
  className: PropTypes.string
}

export default ArticlePosition
