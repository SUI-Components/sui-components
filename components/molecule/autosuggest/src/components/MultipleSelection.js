/* eslint-disable */
import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import MoleculeDropdownList from '@s-ui/react-molecule-dropdown-list'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'

class MoleculeAutosuggestFieldMultiSelection extends Component {

  MoleculeInputTagsRef = React.createRef()

  handleMultiSelection = (ev, {value}) => {
    const { MoleculeInputTagsRef } = this
    const { tags, onChangeTags, onToggle } = this.props
    const newTags = tags.includes(value)
      ? tags.filter(tag => tag !== value)
      : [...tags, value]
    console.log({newTags, tags, value})
    onChangeTags(ev, {value, tags: newTags})
    
    const MoleculeInputTagsRefDOMNode = ReactDOM.findDOMNode(MoleculeInputTagsRef.current)
    MoleculeInputTagsRefDOMNode.querySelector('input').focus()

    onToggle(ev, {open: false})
    
  }

  handleChangeTags = (ev, {tags}) => {
    const { closeOnSelect, onChangeTags, onToggle } = this.props
    onChangeTags(ev, {tags})
    closeOnSelect && onToggle(ev, {open: false})
  }

  handleChange = (ev, {value}) => {
    const { onChange, onToggle } = this.props
    onChange(ev, {value})
    onToggle(ev, {open: true})
  }

  render() {
    const {handleMultiSelection, handleChangeTags, handleChange, MoleculeInputTagsRef} = this
    const { tags, value, onToggle, iconCloseTag, isOpen, children } = this.props
    return (
      <Fragment>
        <MoleculeInputTags
          ref={MoleculeInputTagsRef}
          tags={tags}
          value={value}
          onClick={onToggle}
          tagsCloseIcon={iconCloseTag}
          onChangeTags={handleChangeTags}
          onChange={handleChange}
          isOpen={isOpen}
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



// = props => {
//   /* eslint-disable react/prop-types */
//   const {
//     children,
//     isOpen,
//     onToggle,
//     onChange,
//     onChangeTags,
//     closeOnSelect,
//     iconCloseTag,
//     tags = [], 
//     value =''
//   } = props

//   const MoleculeInputTagsRef = React.createRef()
//   console.log({
//     children,
//     isOpen,
//     onToggle,
//     onChange,
//     onChangeTags,
//     closeOnSelect,
//     iconCloseTag,
//     tags, 
//     value
//   })

  
// }

MoleculeAutosuggestFieldMultiSelection.displayName =
  'MoleculeAutosuggestFieldMultiSelection'

MoleculeAutosuggestFieldMultiSelection.defaultProps = {
  value: '',
  tags: []
}

export default MoleculeAutosuggestFieldMultiSelection
