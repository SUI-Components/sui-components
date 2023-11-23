/* eslint-disable no-console */

import {MoleculeAutosuggestStates} from 'components/molecule/autosuggest/src/index.js'

import {Article, H2, H3} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import {MoleculeAutosuggestWithState} from '../config.js'
import {iconAlert, iconClose, iconError, iconInfo, iconSearch} from '../Icons/index.js'

const ArticleSingleSelection = () => {
  return (
    <Article>
      <H2>Single Selection</H2>
      <H3>with Placeholder</H3>
      <MoleculeAutosuggestWithState
        leftIcon={iconSearch}
        placeholder="Type a Country name..."
        onChange={(_, {value, ...args}) => console.log({value, ...args})}
        onEnter={(_, {value, ...args} = {}) => {
          console.log('onEnter', {value, ...args}, _.target)
        }}
        onClear={() => console.log('Clear pressed')}
        iconClear={iconClose}
      />
      <H3>with preselected Value</H3>
      <MoleculeAutosuggestWithState
        value="Luxembourg"
        onChange={(_, {value, ...args}) => console.log({value, ...args})}
        onEnter={(_, {value, ...args} = {}) => console.log('onEnter', {value, ...args})}
        onClear={() => console.log('Clear pressed')}
        iconClear={iconClose}
      />
      <H3>disabled</H3>
      <MoleculeAutosuggestWithState
        value="Luxembourg"
        onChange={(_, {value, ...args}) => console.log({value, ...args})}
        onEnter={(_, {value, ...args} = {}) => console.log('onEnter', {value, ...args})}
        onClear={() => console.log('Clear pressed')}
        iconClear={iconClose}
        disabled
      />
      <H3>Whit autocomplete "off"</H3>
      <MoleculeAutosuggestWithState
        value="Luxembourg"
        onChange={(_, {value, ...args}) => console.log({value, ...args})}
        onEnter={(_, {value, ...args} = {}) => console.log('onEnter', {value, ...args})}
        onClear={() => console.log('Clear pressed')}
        iconClear={iconClose}
        autoComplete="off"
      />
      <H3>With no clear icon</H3>
      <MoleculeAutosuggestWithState value="Luxembourg" onChange={(_, {value}) => console.log(value)} />
      <H3>With no clear icon</H3>
      <MoleculeAutosuggestWithState value="Luxembourg" onChange={(_, {value}) => console.log(value)} />
      <H3>with Success State</H3>
      <MoleculeAutosuggestWithState
        placeholder="Type a Country name..."
        onChange={(_, {value, ...args}) => console.log({value, ...args})}
        onEnter={(_, {value, ...args} = {}) => console.log('onEnter', {value, ...args})}
        onClear={() => console.log('Clear pressed')}
        state={MoleculeAutosuggestStates.SUCCESS}
        iconClear={iconClose}
        rightIcon={iconInfo}
      />
      <H3>with Error State</H3>
      <MoleculeAutosuggestWithState
        placeholder="Type a Country name..."
        onChange={(_, {value, ...args}) => console.log({value, ...args})}
        onEnter={(_, {value, ...args} = {}) => console.log('onEnter', {value, ...args})}
        onClear={() => console.log('Clear pressed')}
        state={MoleculeAutosuggestStates.ERROR}
        iconClear={iconClose}
        rightIcon={iconError}
      />
      <H3>with Alert State</H3>
      <MoleculeAutosuggestWithState
        placeholder="Type a Country name..."
        onChange={(_, {value, ...args}) => console.log({value, ...args})}
        onEnter={(_, {value, ...args} = {}) => console.log('onEnter', {value, ...args})}
        state={MoleculeAutosuggestStates.ALERT}
        onClear={() => console.log('Clear pressed')}
        iconClear={iconClose}
        rightIcon={iconAlert}
      />
      <H3>with submit button</H3>
      <MoleculeAutosuggestWithState
        placeholder="Type a Country name..."
        onChange={(_, {value, ...args}) => console.log({value, ...args})}
        onEnter={(_, {value, ...args} = {}) => console.log('onEnter', {value, ...args})}
        rightButton={<AtomButton>Submit</AtomButton>}
      />
      <H3>with Shape</H3>
      <MoleculeAutosuggestWithState
        leftIcon={iconSearch}
        placeholder="Type a Country name..."
        onChange={(_, {value, ...args}) => console.log({value, ...args})}
        onEnter={(_, {value, ...args} = {}) => console.log('onEnter', {value, ...args})}
        onClear={() => console.log('Clear pressed')}
        iconClear={iconClose}
        shape="circle"
      />
    </Article>
  )
}

ArticleSingleSelection.propTypes = {}

export default ArticleSingleSelection
