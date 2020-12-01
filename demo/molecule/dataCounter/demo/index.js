import {useState} from 'react'
import MoleculeDataCounter, {
  moleculeDataCounterSizes
} from '../../../../components/molecule/dataCounter/src'

import {AntDesignIcon} from '@s-ui/documentation-library'

const stylesSection = {
  border: '1px solid #CCC',
  background: '#fff',
  margin: '40px 0',
  padding: '30px 10px'
}

const consoleValue = (e, {value}) => {
  console.log({value})
}

const minValueHelpText = 'Minimum Value'
const minValueErrorText = 'The value cannot be lower than the Minimum Value'
const maxValueHelpText = 'Maximum Value'
const maxValueErrorText = 'The value cannot be higher than the Maximum Value'

const propsMessages = {
  minValueHelpText,
  minValueErrorText,
  maxValueHelpText,
  maxValueErrorText
}

const Demo = () => {
  const [value, setValue] = useState(5)
  const [isLoading, setIsLoading] = useState(false)

  const consoleValueLoading = (e, {value}) => {
    setIsLoading(true)
    setTimeout(() => {
      console.log({value})
      setIsLoading(false)
    }, 1000)
  }

  const handleClick = (e, {value}) => {
    setValue(value)
  }

  return (
    <div>
      <h1>Data Counter</h1>
      <h2>Basic</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          id="demo1"
          label="Label"
          onChange={handleClick}
          value={value}
          {...propsMessages}
        />
      </div>

      <h2>Loading</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          isLoading={isLoading}
          onChange={consoleValueLoading}
          label="Click an action to start loading"
          id="demo1"
          {...propsMessages}
        />
      </div>

      <h2>Custom Icons</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          addIcon={
            <AntDesignIcon
              icon="AiOutlinePlus"
              style={{color: 'currentColor'}}
            />
          }
          id="demo2"
          label="Label"
          onChange={consoleValue}
          substractIcon={
            <AntDesignIcon
              icon="AiOutlineMinus"
              style={{color: 'currentColor'}}
            />
          }
          {...propsMessages}
        />
      </div>

      <h2>Disabled</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          onChange={consoleValue}
          label="All"
          id="demo3"
          disabled
          {...propsMessages}
        />
        <br />
        <MoleculeDataCounter
          onChange={consoleValue}
          label="Input"
          id="demo4"
          inputDisabled
          {...propsMessages}
        />
      </div>

      <h2>Min=2 & Max=7 w/ error</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          onChange={consoleValue}
          min={2}
          max={7}
          label="Label"
          value={13}
          id="demo5"
          {...propsMessages}
        />
      </div>

      <h2>Size=SMALL</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          onChange={consoleValue}
          label="Label"
          id="demo6"
          min={3}
          size={moleculeDataCounterSizes.SMALL}
          {...propsMessages}
        />
      </div>
    </div>
  )
}

export default Demo
