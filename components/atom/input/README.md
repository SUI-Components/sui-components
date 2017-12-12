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
import DateInput from '@schibstedspain/sui-atom-input/lib/inputs/DateInput'
or
import {DateInput} from '@schibstedspain/sui-atom-input/lib/inputs'

return (
  <DateInput label='Date input' name='date' />
)
```
Equivalent to
```js
import AtomInput from '@schibstedspain/sui-atom-input'

return (
  <AtomInput.Date label='Date input' name='date' />
)
```

### Available input types

### Date

### Mask

See [imaskjs](https://unmanner.github.io/imaskjs/guide.html#common) masks for more info

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

## Using them in a form
In order to save the value of an input, set an onChange listener function. The value will be exposed
in the event as event.target.value

```js
class FormTest extends Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    window.alert(this.state.value)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <AtomInput.Date name='date' label='name' onChange={this.handleChange} />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
```

> **Find full description and more examples in the [demo page](#).**
