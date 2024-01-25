import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeDropdownList, {moleculeDropdownListDesigns, moleculeDropdownListSelectHandler} from '../src/index.js'
import {OPTIONS} from './config.js'

const ArticleDesign = ({className}) => {
  const [design, setDesign] = useState()
  const [singleState, setSingleState] = useState()
  return (
    <Article className={className}>
      <H2>Design</H2>
      <Paragraph>
        User can change the provided design using the <Code>design</Code> (enum:{' '}
        {`${Object.values(moleculeDropdownListDesigns).join('|')}`}) prop. Valid values are under{' '}
        <Code>moleculeDropdownListDesigns</Code> exported variable:{' '}
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup value={design} onChange={(event, value) => setDesign(design === value ? undefined : value)}>
            {[undefined, ...Object.values(moleculeDropdownListDesigns)].map(moleculeDropdownListDesign => (
              <RadioButton
                value={moleculeDropdownListDesign}
                checked={moleculeDropdownListDesign === design}
                label={`${moleculeDropdownListDesign}`}
                key={`${moleculeDropdownListDesign}`}
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
            design={design}
          >
            {OPTIONS.map(option => (
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

ArticleDesign.displayName = 'ArticleDesign'

ArticleDesign.propTypes = {
  className: PropTypes.string
}

export default ArticleDesign
