# AtomInput

> Inputs are the text fields that users fill in with different types of information. These include dates, passwords or even short answers. It’s a field where users can write alphanumeric texts.

## Installation

```sh
ƛ npm install @s-ui/react-atom-input --save
```

## Usage

### You can use native types like this

```js
import AtomInput from '@s-ui/react-atom-input'

return <AtomInput type='number' /> // possible type options: text, number, date and password
```

### Non native Inputs

#### SUI-Password

In order to use SUI defined Password Input pass the prop `type='sui-password'` to the Input component.

```js
import AtomInput from '@s-ui/react-atom-input'

return <AtomInput type='sui-password' />
```

### Mask

Wraps the https://unmanner.github.io/imaskjs/ lib, used if the input must follow a regex or a specific format/pattern . Using `type='mask'` activates this input, which will be expecting the `mask` prop type to be passed by.

```js
const bankAccountMask = { // checkout all options here https://unmanner.github.io/imaskjs/guide.html
  mask: 'ES00 0000 0000 00 0000000000'
}

 return <AtomInput type='mask' mask={bankAccountMask} placeholder='ES00 0000 0000 00 0000000000' />
```

## Addons

>[What are addons?](https://paper.dropbox.com/doc/SUI-Input-03mHJFkOCjviSZevsaTwm#:uid=125362683844628624581838&h2=Icons-and-addons-inside-the-in)

Addons are passed as prop, use **leftAddon** or **rightAddon** in order to set the position inside the Input

### Addon usage

```js
import AtomInput from '@s-ui/react-atom-input'

return <AtomInput leftAddon='http://' rightAddon='@schibsted.com' />
```

## Error states

There are 3 error states:

* error state = **true**, will show a **red** border around the input field
* error state = **false**, will show a **green** border around the input field
* error state = **null**, will show the by **default** border around the input field


## Form Usage

Each field returns its value on every onChange event so you can save it inside your form state.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Input from '@s-ui/react-atom-input'
import Button from '@schibstedspain/sui-atom-button'

class SimpleLoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: {
        value: '',
        errorState: null
      },
      password: {
        value: '',
        errorState: null
      }
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  isEmail(value) {
    return /(.+)@(.+){2,}\.(.+){2,}/.test(value)
  }

  onChange({value, field}) {
    this.setState(
      Object.assign({}, this.state, {
        [field]: {
          value,
          errorState: null
        }
      })
    )
  }

  onBlur({value, field}) {
    let errorState = !this.isEmail(value)
    this.setState({
      [field]: {errorState, value}
    })
  }

  onSubmit(ev) {
    ev.preventDefault()
    ev.stopPropagation()

    window.alert(JSON.stringify(this.state))
  }

  render() {
    const {email, password} = this.state
    return (
      <form>
        <Input
          type="text"
          value={email.value}
          onChange={({ev, value}) => this.onChange({value, field: 'email', ev})}
          onBlur={ev =>
            this.onBlur({value: ev.target.value, field: 'email'})
          }
          errorState={this.state.email.errorState}
        />
        <Input
          type="sui-password"
          value={password.value}
          onChange={({ev, value}) =>
            this.onChange({value, field: 'password', ev})
          }
        />
        <button onClick={this.onSubmit}>Login</button>
      </form>
    )
  }
}

```
