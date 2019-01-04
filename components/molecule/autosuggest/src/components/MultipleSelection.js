/* eslint-disable */
import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

import withClearUI from '../hoc/withClearUI'

const MoleculeInputTagsWithClearUI = withClearUI(MoleculeInputTags)

class MoleculeAutosuggestFieldMultiSelection extends Component {

  MoleculeInputTagsRef = React.createRef()

  handleMultiSelection = (ev, {value}) => {
    const { MoleculeInputTagsRef } = this
    const { tags, onChangeTags, onToggle } = this.props
    console.log({value, tags})
    if (tags.includes(value)) {
      console.log('removing tag...')
      onChangeTags(ev, {
        value,
        tags: tags.filter(tag => tag !== value)
      })
    } else {
      console.log('adding tag...')
      onChangeTags(ev, {
        value: '',
        tags: [...tags, value]
      })
    }
    
    const MoleculeInputTagsRefDOMNode = ReactDOM.findDOMNode(MoleculeInputTagsRef.current)
    MoleculeInputTagsRefDOMNode.querySelector('input').focus()

    onToggle(ev, {isOpen: false})
    
  }

  handleChangeTags = (ev, {tags}) => {
    const { closeOnSelect, onChangeTags, onToggle } = this.props
    onChangeTags(ev, {tags})
    closeOnSelect && onToggle(ev, {isOpen: false})
  }

  handleChange = (ev, {value}) => {
    const { onChange, onToggle } = this.props
    onChange(ev, {value})
    onToggle(ev, {isOpen: true})
  }

  handleClear = () => {
    const { onChange, onChangeTags } = this.props
    onChange(null, {value:''})
    onChangeTags(null, {tags:[]})
  }

  render() {
    const {handleMultiSelection, handleChangeTags, handleChange, handleClear, MoleculeInputTagsRef} = this
    const { tags, value, onToggle, iconCloseTag, isOpen, iconClear, children } = this.props
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
          iconClear={iconClear}
          onClickClear={handleClear}
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
  tags: []
}

export default MoleculeAutosuggestFieldMultiSelection
