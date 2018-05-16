# AtomInput

> Form input

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-atom-input --save
```

## Types

### **Text**
```js
import AtomInput, {atomInputTypes} from '@s-ui/react-atom-input'

return (
    <AtomInput
      label='Text input'
      name='text'
      type={atomInputTypes.text}
    />
)
```

### **Number**
```js
import AtomInput, {atomInputTypes} from '@s-ui/react-atom-input'

return (
    <AtomInput
      label='Number input'
      type={atomInputTypes.number}
    />
)
```

### **Date**
```js
import AtomInput, {atomInputTypes} from '@s-ui/react-atom-input'

return (
    <AtomInput
      label='Date input'
      type={atomInputTypes.date}
    />
)
```

### **Mask**
Is used in case the input should match a regex, e.g postal code or bank account. See [imaskjs](https://unmanner.github.io/imaskjs/guide.html#common) masks for more info

```js
import AtomInput, {atomInputTypes} from '@s-ui/react-atom-input/lib/inputs/MaskInput'

const postalCodeMask = {
  mask: '00000',
  placeholder: {
    lazy: true,
    char: 0
  }
}

return (
  <AtomInput
    label='postal code'
    mask={postalCodeMask}
    name='date'
    type={atomInputTypes.mask}
  />
)
```

### Tag
```js
import AtomInput, {atomInputTypes} from '@s-ui/react-atom-input'

return (
  <AtomTagInput
    label='Tag input'
    name='Tag'
    type={atomInputTypes.tag}
  />
)
```

## Usage

In order to get an input value, set the onChange property on it, the inputs will call this function with {value, target} once its value change

```js
import AtomInput, {atomInputTypes} from '@s-ui/react-atom-input'

class FormTest extends Component {
  state = {
    username: ''
  }

  handleUsernameChange = ({username, target}) => {
    this.setState({username})
  }

  handleSubmit = (event) => {
    window.alert(this.state.username)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <AtomInput
          label='username'
          onChange={this.handleUsernameChange}
          type={atomInputTypes.mask}
          type={atomInputTypes.text}
        />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/input/demo).**
