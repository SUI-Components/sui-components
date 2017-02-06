import React, {PropTypes} from 'react'

export default function FormRadioList ({name, items}) {
  return (
    <ul className='sui-FormRadioList'>
      {items.map(({id, label}, index) =>
        <li className='sui-FormRadioList-listItem' index={index}>
          <input type='radio' name={name} id={id} className='sui-FormRadioList-input' />
          <label htmlFor={id} className='sui-FormRadioList-label'>
            {label}
          </label>
        </li>
      )}
    </ul>
  )
}

FormRadioList.displayName = 'FormRadioList'

FormRadioList.propTypes = {
  /**
   * Comments custom icon (React component).
   */
  name: PropTypes.string.isRequired,
  /**
   * List of radio buttons
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Radio button id
     */
    id: PropTypes.string.isRequired,
    /**
    * label text
    */
    label: PropTypes.string.isRequired
  })).isRequired
}
