# AtomInput

> Description

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-atom-input --save
```

## Usage

### Basic usage
```js
import MaskInput from '@schibstedspain/sui-atom-input/lib/inputs/MaskInput'

// render the same
return (
  <div>
    <MaskInput label='postal code' name='date' mask={postalCodeMask}/>
  </div>
)
```

### Available input types

### Native
```js
import AtomInput from '@schibstedspain/sui-atom-input'

return (
  <div>
    <AtomInput type='text' label='Text input' name='text' />
    <AtomInput type='number' label='Number input' name='number' />
  </div>
)
```

### Mask
See [imaskjs](https://unmanner.github.io/imaskjs/guide.html#common) masks for more info

```js
import MaskInput from '@schibstedspain/sui-atom-input/lib/inputs/MaskInput'

const postalCodeMask = {
  mask: '00000',
  placeholder: {
    lazy: true,
    char: 0
  }
}

return (
  <MaskInput label='postal code' name='date' mask={postalCodeMask}/>
)
```

### Tag
```js
import TagInput from '@schibstedspain/sui-atom-input/lib/inputs/TagInput'

return (
  <AtomInput.Tag
    name='Tag'
    label='Tag input'
  />
)
```

## Using them in a form

In order to get an input value, set the onChange property on it, the inputs will call this function with {value, target} once its value change

```js
import AtomInput from '@schibstedspain/sui-atom-input'

const postalCodeMask = {
  mask: '00000',
  placeholder: {
    lazy: true,
    char: 0
  }
}

class FormTest extends Component {
  state = {
    value: ''
  }

  handleChange = ({value, target}) => {
    this.setState({value})
  }

  handleSubmit = (event) => {
    window.alert(this.state.value)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <AtomInput.Mask
          mask={postalCodeMask}
          name='postalCode'
          label='Postal code'
          onChange={this.handleChange}
        />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
```

> **Find full description and more examples in the [demo page](#).**
