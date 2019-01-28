import React, {Component, Fragment} from 'react'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import withClearUI from '../hoc/withClearUI'

const MoleculeInputTagsWithClearUI = withClearUI(MoleculeInputTags)

class MoleculeAutosuggestFieldMultiSelection extends Component {
  /* eslint-disable react/prop-types */
  MoleculeInputTagsRef = React.createRef()

  handleMultiSelection = (ev, {value: valueSelected}) => {
    const {
      refMoleculeAutosuggest,
      tags,
      keysSelection,
      onChangeTags,
      onToggle,
      value
    } = this.props
    const newTags = tags.includes(valueSelected)
      ? tags.filter(tag => tag !== valueSelected)
      : [...tags, valueSelected]

    onChangeTags(ev, {
      value,
      tags: newTags
    })
    const {key} = ev
    const isKeySelection = keysSelection.includes(key)
    if (key !== undefined && !isKeySelection) onToggle(ev, {isOpen: false})
    refMoleculeAutosuggest.current.focus()
  }

  handleChangeTags = (ev, {tags, value}) => {
    const {refMoleculeAutosuggest, onChangeTags, onToggle} = this.props
    onChangeTags(ev, {tags})
    if (!value) onToggle(ev, {isOpen: false})
    refMoleculeAutosuggest.current.focus()
  }

  handleChange = (ev, {value}) => {
    const {onChange, onToggle} = this.props
    onChange(ev, {value})
    if (value) onToggle(ev, {isOpen: true})
    else onToggle(ev, {isOpen: false})
  }

  handleClear = () => {
    const {onChange, onChangeTags} = this.props
    onChange(null, {value: ''})
    onChangeTags(null, {tags: []})
  }

  render() {
    const {
      handleMultiSelection,
      handleChangeTags,
      handleChange,
      handleClear,
      MoleculeInputTagsRef
    } = this
    const {
      tags,
      value,
      onToggle,
      iconCloseTag,
      isOpen,
      iconClear,
      innerRefInput,
      placeholder,
      children
    } = this.props
    return (
      <Fragment>
        <MoleculeInputTagsWithClearUI
          ref={MoleculeInputTagsRef}
          tags={tags}
          value={value}
          onClick={onToggle}
          tagsCloseIcon={iconCloseTag}
          onChangeTags={handleChangeTags}
          onChange={handleChange}
          isOpen={isOpen}
          isVisibleClear={tags.length}
          iconClear={iconClear}
          onClickClear={handleClear}
          innerRefInput={innerRefInput}
          placeholder={!tags.length ? placeholder : ''}
          noBorder
        />
        <MoleculeDropdownList
          checkbox
          visible={isOpen}
          onSelect={handleMultiSelection}
          value={tags}
          highlightQuery={value}
        >
          {children}
        </MoleculeDropdownList>
      </Fragment>
    )
  }
}

MoleculeAutosuggestFieldMultiSelection.displayName =
  'MoleculeAutosuggestFieldMultiSelection'

MoleculeAutosuggestFieldMultiSelection.defaultProps = {
  value: '',
  tags: [],
  iconCloseTag: <span />
}

export default MoleculeAutosuggestFieldMultiSelection
