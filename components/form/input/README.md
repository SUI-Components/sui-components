# FormInput

> Inputs are the text fields that users fill in with different types of information. These include dates, passwords or even short answers. It’s a field where users can write alphanumeric texts.

## Installation

```sh
ƛ npm install @s-ui/react-form-input --save
```

## Usage

### You can use native types like this

```js
import FormInput from '@s-ui/react-form-input'

return <FormInput type='number' /> // possible type options: text, number, date and password
```

### Non native Inputs

#### SUI-Password

In order to use SUI defined Password Input

```js
import FormInput from '@s-ui/react-form-input'

return <FormInput type='sui-password' />
```

## Addons

>[What are addons?](https://paper.dropbox.com/doc/SUI-Input-03mHJFkOCjviSZevsaTwm#:uid=125362683844628624581838&h2=Icons-and-addons-inside-the-in)

Addons are passed as prop, use **leftAddon** or **rightAddon** in order to set the position inside the Input

### Addon usage

```js
import FormInput from '@s-ui/react-form-input'

return <FormInput leftAddon='http://' rightAddon='@schibsted.com' />
```

## Form Usage

Each field returns its value on every onChange event so you can save it inside your form state.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Input from '@s-ui/react-form-input'
import Button from '@schibstedspain/sui-atom-button'

class SimpleLoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange({value, field}) {
    this.setState({
      [field]: value
    })
  }

  onSubmit(ev) {
    ev.preventDefault()
    ev.stopPropagation()

    window.alert(JSON.stringify(this.state))
  }

  render() {
    const {login, password} = this.state
    return (
      <form>
        <Input
          type="text"
          value={login}
          onChange={({ev, value}) => this.onChange({value, field: 'login', ev})}
        />
        <Input
          type="sui-password"
          value={password}
          onChange={({ev, value}) => this.onChange({value, field: 'password', ev})}
        />
        <Button onClick={this.onSubmit}>Login</Button>
      </form>
    )
  }
}

```
