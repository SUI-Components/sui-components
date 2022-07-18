import {useState} from 'react'
import JSONView from 'react-json-view'

import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Paragraph} from '@s-ui/documentation-library'
import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'

import OrganismNestedCheckboxes from '../../src/index.js'

const ArticleMultipleNesting = ({className}) => {
  const [args, setter] = useState({
    values: {
      A: ['AA', 'AB', 'ADA', 'ADB', 'ADDA', 'ADDB'],
      B: ['B'],
      C: ['C'],
      D: ['DBB']
    }
  })
  const setValues =
    key =>
    (event, {values: keyValues, ...rest}) =>
      setter({...rest, values: {...args.values, [key]: keyValues}})

  return (
    <Article className={className}>
      <H2>Multiple Nesting</H2>
      <Paragraph>This component can be nested as much as needed.</Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <OrganismNestedCheckboxes
            id="multiple-nesting-A"
            label="A"
            value="A"
            defaultIndeterminate={true}
            defaultIsExpanded={false}
            onChange={setValues('A')}
          >
            <MoleculeCheckboxField
              id="multiple-nesting-AA"
              label="AA"
              value="AA"
              defaultChecked={true}
            />
            <MoleculeCheckboxField
              id="multiple-nesting-AB"
              label="AB"
              value="AB"
              defaultChecked={true}
            />
            <MoleculeCheckboxField
              id="multiple-nesting-AC"
              label="AC"
              value="AC"
              defaultChecked={false}
            />
            <OrganismNestedCheckboxes
              id="multiple-nesting-AD"
              label="AD"
              value="AD"
              defaultIsExpanded={false}
              defaultIndeterminate={true}
            >
              <MoleculeCheckboxField
                id="multiple-nesting-ADA"
                label="ADA"
                value="ADA"
                defaultChecked={true}
              />
              <MoleculeCheckboxField
                id="multiple-nesting-ADB"
                label="ADB"
                value="ADB"
                defaultChecked={true}
              />
              <MoleculeCheckboxField
                id="multiple-nesting-ADC"
                label="ADC"
                value="ADC"
                defaultChecked={false}
              />
              <OrganismNestedCheckboxes
                id="multiple-nesting-AD"
                label="ADD"
                value="ADD"
                defaultIsExpanded={false}
                defaultIndeterminate={true}
              >
                <MoleculeCheckboxField
                  id="multiple-nesting-ADDA"
                  label="ADDA"
                  value="ADDA"
                  defaultChecked={true}
                />
                <MoleculeCheckboxField
                  id="multiple-nesting-ADDB"
                  label="ADDB"
                  value="ADDB"
                  defaultChecked={true}
                />
                <MoleculeCheckboxField
                  id="multiple-nesting-ADDC"
                  label="ADDC"
                  value="ADDC"
                  defaultChecked={false}
                />
              </OrganismNestedCheckboxes>
            </OrganismNestedCheckboxes>
          </OrganismNestedCheckboxes>
          <OrganismNestedCheckboxes
            id="multiple-nesting-B"
            label="B"
            value="B"
            defaultChecked={true}
            defaultIsExpanded={false}
            onChange={setValues('B')}
          >
            <MoleculeCheckboxField
              id="multiple-nesting-BA"
              label="BA"
              value="BA"
            />
            <MoleculeCheckboxField
              id="multiple-nesting-BB"
              label="BB"
              value="BB"
            />
          </OrganismNestedCheckboxes>
          <OrganismNestedCheckboxes
            id="multiple-nesting-C"
            label="C"
            value="C"
            defaultChecked={true}
            defaultIsExpanded={false}
            onChange={setValues('C')}
          >
            <MoleculeCheckboxField
              id="multiple-nesting-CA"
              label="CA"
              value="CA"
            />
            <OrganismNestedCheckboxes
              id="multiple-nesting-CB"
              label="CB"
              value="CB"
            >
              <MoleculeCheckboxField
                id="multiple-nesting-CBA"
                label="CBA"
                value="CBA"
              />
              <MoleculeCheckboxField
                id="multiple-nesting-CBB"
                label="CBB"
                value="CBB"
              />
            </OrganismNestedCheckboxes>
            <MoleculeCheckboxField
              id="multiple-nesting-CC"
              label="CC"
              value="CC"
            />
          </OrganismNestedCheckboxes>
          <OrganismNestedCheckboxes
            id="multiple-nesting-D"
            label="D"
            value="D"
            defaultIndeterminate={true}
            defaultIsExpanded={false}
            onChange={setValues('D')}
          >
            <MoleculeCheckboxField
              id="multiple-nesting-DA"
              label="DA"
              value="DA"
            />
            <OrganismNestedCheckboxes
              id="multiple-nesting-DB"
              label="DB"
              value="DB"
              defaultIsExpanded={false}
              defaultIndeterminate={true}
            >
              <MoleculeCheckboxField
                id="multiple-nesting-DBA"
                label="DBA"
                value="DBA"
              />
              <MoleculeCheckboxField
                id="multiple-nesting-DBB"
                label="DBB"
                value="DBB"
                defaultChecked={true}
              />
            </OrganismNestedCheckboxes>
            <MoleculeCheckboxField
              id="multiple-nesting-DC"
              label="DC"
              value="DC"
            />
          </OrganismNestedCheckboxes>
        </Cell>
        <Cell>
          <JSONView
            name="args"
            src={{...args, values: Object.values(args.values).flat()}}
            iconStyle="circle"
            displayDataTypes={false}
            displayObjectSize={false}
            enableClipboard={false}
            indentWidth={2}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleMultipleNesting.propTypes = {
  className: PropTypes.string
}

export default ArticleMultipleNesting
