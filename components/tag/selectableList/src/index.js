import React, {Component, PropTypes} from 'react'
import TagSelectable from '@schibstedspain/sui-tag-selectable'

const removeFromArray = (arr, value) => {
  return arr.filter(item => value !== item)
}

export default class TagSelectableList extends Component {
  state = {
    selectedValues: []
  }

  constructor (...props) {
    super(...props)
    this.tagHandlers = this.props.tagsList.map((tag) => this.toggleValue.bind(this, tag.value))
    this.allHandler = this.toggleAll.bind(this)
  }

  toggleValue (value) {
    let selectedValues = this.state.selectedValues
    if (selectedValues.indexOf(value) !== -1) {
      selectedValues = removeFromArray(selectedValues, value)
    } else {
      selectedValues.push(value)
    }
    this.setState({selectedValues})
  }

  toggleAll () {
    let selectedValues
    if (this.isAllSelected()) {
      selectedValues = []
    } else {
      selectedValues = this.props.tagsList.map(item => item.value)
    }
    this.setState({selectedValues})
  }

  _renderTags () {
    const { tagsList } = this.props
    return tagsList.map((tag, index) => {
      const isSelected = this.state.selectedValues.indexOf(tag.value) !== -1
      return (
        <TagSelectable
          key={tag.value}
          onClick={this.tagHandlers[index]}
          isSelected={isSelected}
          label={tag.label}
          icon={isSelected ? this.props.checkIcon : null}
        />
      )
    })
  }

  isAllSelected () {
    return this.props.tagsList.length === this.state.selectedValues.length
  }

  componentDidUpdate () {
    this.props.onChange(this.state.selectedValues)
  }

  render () {
    const isAllSelected = this.isAllSelected()
    const {all} = this.props
    return (
      <div className='sui-TagSelectableList'>
        {all && <TagSelectable
          onClick={this.allHandler}
          isSelected={isAllSelected}
          label={all}
          icon={isAllSelected && this.props.checkIcon}
        />}
        {this._renderTags()}
      </div>
    )
  }
}

TagSelectableList.displayName = 'TagSelectableList'

TagSelectableList.propTypes = {
  /**
   * Icon to check tags
   */
  checkIcon: PropTypes.func,
  /**
   * Optional string. When is setted show a button `All` at first position
   */
  all: PropTypes.string,
   /**
   * By clicking on every tag, `onChange` is triggered and sends an
   * object with the selected items in the array.
   */
  onChange: PropTypes.func.isRequire,
  /**
   * List of tag objects
   */
  tagsList: PropTypes.arrayOf(PropTypes.shape({
    /**
     * tag text
     */
    label: PropTypes.string.isRequired,
    /**
     * tag value
     */
    value: PropTypes.number.isRequired
  })).isRequired
}
