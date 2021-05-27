/* eslint-disable react/prop-types */
import {useState} from 'react'

import AtomRadioButton from 'components/atom/radioButton/src'

const logoHouse =
  'https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/home-512.png'
const logoRocket =
  'https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/rocket-128.png'
const logoGlobe =
  'https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/globe-2-128.png'

const imageCheckboxStyle = {
  height: '50px',
  width: '50px',
  cursor: 'pointer'
}

const FormRadioButtonIcons = ({onChange: onChangeFromProps}) => {
  const [formState, setFormState] = useState({})

  const handleChange = (ev, {value, name}) => {
    setFormState({
      [name]: value
    })
  }

  const onSubmit = ev => {
    ev.preventDefault()
    ev.stopPropagation()

    window.alert(JSON.stringify(formState))
  }

  const isCategorySelected = category => {
    return formState.category === category
  }

  const styleIsCategorySelected = category => {
    return isCategorySelected(category)
      ? {display: 'inline-block', border: '1px solid black'}
      : {display: 'inline-block', border: '1px solid white'}
  }

  return (
    <form
      className="Form"
      style={{
        border: '1px solid #CCC',
        background: '#fff',
        marginTop: '10px',
        padding: '10px'
      }}
      onSubmit={onSubmit}
    >
      <div
        style={{
          marginTop: '10px',
          padding: '10px'
        }}
      >
        <label htmlFor="categoryHouse" style={styleIsCategorySelected('house')}>
          <img style={imageCheckboxStyle} src={logoHouse} alt="" />
        </label>
        <AtomRadioButton
          isHidden
          id="categoryHouse"
          value="house"
          name="category"
          checked={isCategorySelected('house')}
          onChange={handleChange}
        />

        <label
          htmlFor="categoryRocket"
          style={styleIsCategorySelected('rocket')}
        >
          <img style={imageCheckboxStyle} src={logoRocket} alt="" />
        </label>
        <AtomRadioButton
          isHidden
          id="categoryRocket"
          name="category"
          value="rocket"
          checked={isCategorySelected('rocket')}
          onChange={handleChange}
        />

        <label htmlFor="categoryGlobe" style={styleIsCategorySelected('globe')}>
          <img style={imageCheckboxStyle} src={logoGlobe} alt="" />
        </label>
        <AtomRadioButton
          isHidden
          id="categoryGlobe"
          value="globe"
          name="category"
          checked={isCategorySelected('globe')}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
      <button>Send!</button>
    </form>
  )
}

export default FormRadioButtonIcons
