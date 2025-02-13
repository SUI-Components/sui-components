import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeSelect, {
  moleculeSelectDropdownListSizes,
  moleculeSelectSizes,
  moleculeSelectTagSizes
} from '../../src/index.js'
import {getFullNames} from '../data/fullNames.js'
import {IconArrowDown} from '../Icons/index.js'

const names = getFullNames(12)

const ArticleSize = ({className}) => {
  const [singlePerson, setSinglePerson] = useState()
  const [multiplePerson, setMultiplePerson] = useState()
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        There are as many sizes as most of the text fields. For defining its size you can use <Code>selectSize</Code>{' '}
        enum prop. The available sizes are under the <Code>moleculeSelectSizes</Code> exported enum.
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeSelectSizes).map(([sizeKey, sizeValue]) => (
          <ListItem key={sizeKey}>
            <Code>moleculeSelectSizes.{sizeKey}</Code>: <Code>'{sizeValue}'</Code>
          </ListItem>
        ))}
      </UnorderedList>
      <Paragraph>
        For defining the size of the Tags in multiple selection you can use <Code>tagSize</Code> enum prop. The values
        are under the <Code>moleculeSelectTagSizes</Code> exported enum.
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeSelectTagSizes).map(([sizeKey, sizeValue]) => (
          <ListItem key={sizeKey}>
            <Code>moleculeSelectTagSizes.{sizeKey}</Code>: <Code>'{sizeValue}'</Code>
          </ListItem>
        ))}
      </UnorderedList>
      <Grid gutter={[8, 0]}>
        <Cell>
          <Grid cols={3} gutter={[0, 8]}>
            <Cell></Cell>
            <Cell>
              <Label>single selection</Label>
            </Cell>
            <Cell>
              <Label>multiple selection</Label>
            </Cell>
          </Grid>
        </Cell>
        {Object.entries(moleculeSelectSizes).map(([sizeName, sizeValue]) => (
          <Cell key={sizeName}>
            <Grid cols={3} gutter={[0, 8]}>
              <Cell>{sizeValue}</Cell>
              <Cell>
                <MoleculeSelect
                  selectSize={sizeValue}
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
                  selectSize={sizeValue}
                  tagSize={moleculeSelectTagSizes[sizeName]}
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
            </Grid>
          </Cell>
        ))}
      </Grid>
      <Paragraph>
        For defining the size of the dropdown list you can use <Code>size</Code> enum prop.
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeSelectDropdownListSizes).map(([sizeKey, sizeValue]) => (
          <ListItem key={sizeKey}>
            <Code>moleculeSelectDropdownListSizes.{sizeKey}</Code>: <Code>'{sizeValue}'</Code>
          </ListItem>
        ))}
      </UnorderedList>
      <Grid gutter={[8, 0]}>
        <Cell>
          <Grid cols={3} gutter={[0, 8]}>
            <Cell></Cell>
            <Cell>
              <Label>single selection</Label>
            </Cell>
            <Cell>
              <Label>multiple selection</Label>
            </Cell>
          </Grid>
        </Cell>
        {Object.entries(moleculeSelectDropdownListSizes).map(([sizeName, sizeValue]) => (
          <Cell key={sizeName}>
            <Grid cols={3} gutter={[0, 8]}>
              <Cell>{sizeValue}</Cell>
              <Cell>
                <MoleculeSelect
                  size={sizeValue}
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
                  size={sizeValue}
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
            </Grid>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleSize.displayName = 'ArticleSize'

ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
