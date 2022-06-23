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

const ArticleDefault = ({className}) => {
  const [singleState, setSingleState] = useState()
  const [multipleState, setMultipleState] = useState([])
  const [visible, setVisible] = useState(true)
  const [useValue, setUseValue] = useState(true)
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The DropdownList component does not have a default behavior
      </Paragraph>
      <Paragraph>
        The <Code>visible</Code> (boolean) prop is false by default.
      </Paragraph>
      <Paragraph>
        The <Code>value</Code> (string/array) prop can handle the selected
        option value(s) or delegate it to the inner DropdownOption element's
        selected prop (boolean).
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <Label>visible</Label>
        </Cell>
        <Cell>
          <Label>value</Label>
        </Cell>
        <Cell>
          <RadioButton
            checked={visible}
            onClick={() => setVisible(!visible)}
            label={visible ? 'hide' : 'show'}
          />
        </Cell>
        <Cell>
          <RadioButton
            checked={useValue}
            onClick={() => setUseValue(!useValue)}
            label={useValue ? 'enabled' : 'disabled'}
          />
        </Cell>
        <Cell>
          <Label>single</Label>
        </Cell>
        <Cell>
          <Label>multiple</Label>
        </Cell>
        <Cell>
          <MoleculeDropdownList
            visible={visible}
            onSelect={moleculeDropdownListSelectHandler.single({
              value: singleState,
              onSelect: (event, {value, ...args}) => {
                console.log('MoleculeDropdownList', 'single', {value, ...args}) // eslint-disable-line no-console
                setSingleState(value)
              }
            })}
            value={useValue ? singleState : undefined}
          >
            {OPTIONS.map(option => (
              <MoleculeDropdownOption
                key={option}
                value={option}
                selected={useValue ? undefined : singleState === option}
                onSelect={
                  (event, args) => console.log('MoleculeDropdownOption', args) // eslint-disable-line no-console
                }
              >
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </Cell>
        <Cell>
          <MoleculeDropdownList
            visible={visible}
            onSelect={moleculeDropdownListSelectHandler.multiple({
              value: multipleState,
              onSelect: (event, {value, ...args}) => {
                // eslint-disable-next-line no-console
                console.log('MoleculeDropdownList', 'multiple', {
                  value,
                  ...args
                })
                setMultipleState(value)
              }
            })}
            value={useValue ? multipleState : undefined}
          >
            {OPTIONS.map(option => (
              <MoleculeDropdownOption
                key={option}
                value={option}
                selected={useValue ? undefined : multipleState.includes(option)}
                onSelect={
                  (event, args) => console.log('MoleculeDropdownOption', args) // eslint-disable-line no-console
                }
              >
                {option}
              </MoleculeDropdownOption>
            ))}
          </MoleculeDropdownList>
        </Cell>
        <Cell>
          <Label>result:</Label>
        </Cell>
        <Cell>
          <Label>result:</Label>
        </Cell>
        <Cell>
          <Paragraph elementType="div">
            {JSON.stringify(`${singleState}`, null, 2)}
          </Paragraph>
        </Cell>
        <Cell>
          <Paragraph elementType="div">
            {JSON.stringify(multipleState, null, 2)}
          </Paragraph>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDesign'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
