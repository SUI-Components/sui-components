import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeSelect, {moleculeSelectStates} from '../../src/index.js'
import {getFullNames} from '../data/fullNames.js'
import {IconArrowDown} from '../Icons/index.js'

const names = getFullNames(12)

const ArticleStatus = ({className}) => {
  return (
    <Article className={className}>
      <H2>State</H2>
      <Paragraph>
        use the <Code>state</Code> prop to change the status of the select. The available states are under the{' '}
        <Code>moleculeSelectStates</Code> exported enum.
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeSelectStates).map(([stateKey, stateValue]) => (
          <ListItem key={stateKey}>
            <Code>moleculeSelectStates.{stateKey}</Code>: <Code>'{stateValue}'</Code>
          </ListItem>
        ))}
      </UnorderedList>
      <Grid gutter={[8, 0]}>
        <Cell>
          <Grid gutter={[0, 8]} cols={4}>
            <Cell></Cell>
            {Object.entries(moleculeSelectStates).map(([stateName, stateValue]) => (
              <Cell key={stateName}>
                <Label>{stateValue}</Label>
              </Cell>
            ))}
          </Grid>
        </Cell>
        <Cell>
          <Grid gutter={[0, 8]} cols={4}>
            <Cell>
              <Label>Single selection</Label>
            </Cell>
            {Object.entries(moleculeSelectStates).map(([stateName, stateValue]) => (
              <Cell key={stateName}>
                <MoleculeSelect state={stateValue} iconArrowDown={<IconArrowDown />} placeholder="Select a person...">
                  {names.map(({name, code}) => (
                    <MoleculeSelectOption key={code} value={name}>
                      {name}
                    </MoleculeSelectOption>
                  ))}
                </MoleculeSelect>
              </Cell>
            ))}
          </Grid>
        </Cell>
        <Cell>
          <Grid gutter={[0, 8]} cols={4}>
            <Cell>
              <Label>Multiple selection</Label>
            </Cell>
            {Object.entries(moleculeSelectStates).map(([stateName, stateValue]) => (
              <Cell key={stateName}>
                <MoleculeSelect
                  state={stateValue}
                  iconArrowDown={<IconArrowDown />}
                  placeholder="Select a person..."
                  multiselection
                >
                  {names.map(({name, code}) => (
                    <MoleculeSelectOption key={code} value={name}>
                      {name}
                    </MoleculeSelectOption>
                  ))}
                </MoleculeSelect>
              </Cell>
            ))}
          </Grid>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleStatus.displayName = 'ArticleStatus'

ArticleStatus.propTypes = {
  className: PropTypes.string
}

export default ArticleStatus
