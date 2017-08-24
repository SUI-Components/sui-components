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

    this.tagHandlers = this.props.tagsList.map((tag) => this.toggleValue(tag.value))
    this.allHandler = this.toggleAll
  }

  toggleValue = (value) => () => {
    let selectedValues = this.state.selectedValues
    if (selectedValues.includes(value)) {
      selectedValues = removeFromArray(selectedValues, value)
    } else {
      selectedValues.push(value)
    }
    this.setState({selectedValues})
  }

  toggleAll = () => {
    this.setState({
      selectedValues: this.isAllSelected()
        ? []
        : this.props.tagsList.map(item => item.value)
    })
  }

  _renderTags () {
    const { tagsList } = this.props
    return tagsList.map((tag, index) => {
      const isSelected = this.state.selectedValues.includes(tag.value)
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
    const {allLabel} = this.props
    return (
      <div className='sui-TagSelectableList'>
        {allLabel && <TagSelectable
          onClick={this.allHandler}
          isSelected={isAllSelected}
          label={allLabel}
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
   * Optional string. When is setted show a button `All` at first position.
   * The string content is the label of the button.
   */
  allLabel: PropTypes.string,
   /**
   * By clicking on every tag, `onChange` is triggered and sends an
   * object with the selected items in the array.
   */
  onChange: PropTypes.func,
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
