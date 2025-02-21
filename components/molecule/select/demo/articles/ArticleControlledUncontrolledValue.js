import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeSelect from '../../src/index.js'
import {getFullNames} from '../data/fullNames.js'
import {IconArrowDown} from '../Icons'

const names = getFullNames(12)

const ArticleControlledUncontrolledValue = ({className}) => {
  const [singlePerson, setSinglePerson] = useState(names[0].name)
  const [multiplePerson, setMultiplePerson] = useState(names.slice(0, 2).map(({name}) => name))
  return (
    <Article className={className}>
      <H2>Controlled and Uncontrolled</H2>
      <Paragraph>
        Select can work controlled(statefull) or uncontrolled(stateless) by using <Code>value</Code> or{' '}
        <Code>defaultValue</Code>
      </Paragraph>
      <Grid gutter={[8, 0]}>
        <Cell>
          <Grid gutter={[0, 8]} cols={3}>
            <Cell></Cell>
            <Cell>
              <Label>Controlled</Label>
            </Cell>
            <Cell>
              <Label>Uncontrolled</Label>
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid gutter={[0, 8]} cols={3}>
            <Cell>
              <Label>Single selection</Label>
            </Cell>
            <Cell>
              <MoleculeSelect
                value={singlePerson}
                onChange={(event, {value}) => setSinglePerson(value)}
                iconArrowDown={<IconArrowDown />}
                placeholder="Select a person..."
              >
                {names.map(({name, code}) => (
                  <MoleculeSelectOption key={code} value={name}>
                    {name}
                  </MoleculeSelectOption>
                ))}
              </MoleculeSelect>
            </Cell>
            <Cell>
              <MoleculeSelect
                defaultValue={names[0].name}
                iconArrowDown={<IconArrowDown />}
                placeholder="Select a person..."
              >
                {names.map(({name, code}) => (
                  <MoleculeSelectOption key={code} value={name}>
                    {name}
                  </MoleculeSelectOption>
                ))}
              </MoleculeSelect>
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid gutter={[0, 8]} cols={3}>
            <Cell>
              <Label>Multiple selection</Label>
            </Cell>
            <Cell>
              <MoleculeSelect
                value={multiplePerson}
                onChange={(event, {value}) => setMultiplePerson(value)}
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
            <Cell>
              <MoleculeSelect
                defaultValue={names.slice(0, 2).map(({name}) => name)}
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
          </Grid>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleControlledUncontrolledValue.displayName = 'ArticleControlledUncontrolledValue'

ArticleControlledUncontrolledValue.propTypes = {
  className: PropTypes.string
}

export default ArticleControlledUncontrolledValue
