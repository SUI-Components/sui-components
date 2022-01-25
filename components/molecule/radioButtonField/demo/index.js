import {H1, H2, UnorderedList, ListItem} from '@s-ui/documentation-library'

import MoleculeRadioButtonField from '../src/index.js'
import {styleList, styleListItem} from './settings.js'

const Demo = () => (
  <div className="sui-StudioPreview">
    <H1>Radio-button Field</H1>
    <UnorderedList style={styleList}>
      <ListItem style={styleListItem}>
        <H2>With Information HelpText</H2>
        <MoleculeRadioButtonField
          id="description-inline2"
          label="Description"
          helpText="Tu descripción en Latin"
        />
      </ListItem>
      <ListItem style={styleListItem}>
        <H2>With Information HelpText checked</H2>
        <MoleculeRadioButtonField
          id="description-inline2"
          label="Description"
          checked
          helpText="Tu descripción en Latin"
        />
      </ListItem>
      <ListItem style={styleListItem}>
        <H2>With Success Validation HelpText</H2>
        <MoleculeRadioButtonField
          id="description2"
          label="Description"
          value="In some place of La Mancha which name..."
          successText="Everything ok!"
        />
      </ListItem>
      <ListItem style={styleListItem}>
        <h2>With Success Validation HelpText checked</h2>
        <MoleculeRadioButtonField
          checked
          id="description2"
          label="Description"
          value="In some place of La Mancha which name..."
          successText="Everything ok!"
        />
      </ListItem>
      <ListItem style={styleListItem}>
        <H2>With Error validation HelpText</H2>
        <MoleculeRadioButtonField
          id="notes"
          label="Notes"
          errorText="All wrong!"
          value="In some place of La Mancha which name..."
        />
      </ListItem>
      <ListItem style={styleListItem}>
        <H2>With Error validation HelpText checked</H2>
        <MoleculeRadioButtonField
          id="notes"
          checked
          label="Notes"
          errorText="All wrong!"
          value="In some place of La Mancha which name..."
        />
      </ListItem>
      <ListItem style={styleListItem}>
        <H2>With Alert validation HelpText</H2>
        <MoleculeRadioButtonField
          id="notes"
          label="Notes"
          alertText="Something meh..."
          value="In some place of La Mancha which name..."
        />
      </ListItem>
      <ListItem style={styleListItem}>
        <H2>With Alert validation HelpText checked</H2>
        <MoleculeRadioButtonField
          id="notes"
          checked
          label="Notes"
          alertText="Something meh..."
          value="In some place of La Mancha which name..."
        />
      </ListItem>
      <ListItem style={styleListItem}>
        <H2>With nodeLabel</H2>
        <MoleculeRadioButtonField
          id="with-node-label"
          nodeLabel={
            <>
              <label htmlFor="with-node-label">Description</label>{' '}
              <span>I am out of the label</span>
            </>
          }
          helpText="Tu descripción en Latin"
        />
      </ListItem>
    </UnorderedList>
  </div>
)

export default Demo
