# AtomInput

> Inputs are the text fields that users fill in with different types of information. These include dates, passwords or even short answers. It’s a field where users can write alphanumeric texts.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/input/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,input)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-input?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-input)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Ainput&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Ainput)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-input)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/input/LICENSE.md)

## Installation

```sh
ƛ npm install @s-ui/react-atom-input --save
```

## Usage

### Add styles

To use the component's own styles, create a .scss file and import them inside.

```scss
@import '~@s-ui/react-atom-input/lib/index';
```

If you want to customize your components, create your own theme and add it to your component just **before**.

```scss
@import 'custom-settings';
@import '~@s-ui/react-atom-input/lib/index';
```

### You can use native types like this

```js
import AtomInput from '@s-ui/react-atom-input'

return <AtomInput type="number" /> // possible type options: text, number, date and password
```

### Non native Inputs

#### SUI-Password

In order to use SUI defined Password Input pass the prop `type='sui-password'` to the Input component.

```js
import AtomInput from '@s-ui/react-atom-input'

return <AtomInput type="sui-password" />
```

#### Mask

Wraps the https://unmanner.github.io/imaskjs/ lib, used if the input must follow a regex or a specific format/pattern . Using `type='mask'` activates this input, which will be expecting the `mask` prop type to be passed by.

```js
const bankAccountMask = {
  // checkout all options here https://unmanner.github.io/imaskjs/guide.html
  mask: 'ES00 0000 0000 00 0000000000'
}

return <AtomInput type="mask" mask={bankAccountMask} placeholder="ES00 0000 0000 00 0000000000" />
```

### Sizes

There are defined 3 sizes (`MEDIUM`, `SMALL` and `XSMALL`) available at the exported object `inputSizes` and that can be set through the prop `size`

Related size Sass vars are:

```scss
$h-atom-input--m: 40px;
$h-atom-input--s: 32px;
$h-atom-input--xs: 24px;
```

```js
<AtomInput size={inputSizes.SMALL} name="first" placeholder="Small input" />
```

### Addons

> [What are addons?](https://paper.dropbox.com/doc/SUI-Input-03mHJFkOCjviSZevsaTwm#:uid=125362683844628624581838&h2=Icons-and-addons-inside-the-in)

Addons are passed as prop, use **leftAddon** or **rightAddon** in order to set the position inside the Input

#### Addon usage

```js
import AtomInput from '@s-ui/react-atom-input'

return <AtomInput leftAddon="http://" rightAddon="@schibsted.com" />
```

### Icons

Icons are passed as prop, use **leftIcon** or **rightIcon** in order to set the position inside the Input

```js
import AtomInput from '@s-ui/react-atom-input'

const logo = 'my_logo.svg'
const leftIcon = () => <img src={logo} />

<AtomInput leftIcon={leftIcon} />
```

You can also pass a handler for each Icon using the props **onClickLeftIcon** or **onClickRightIcon**

```js
<AtomInput
  name="second"
  placeholder="Medium Input"
  leftIcon={LeftIcon}
  rightIcon={IconLocation}
  onClickRightIcon={e => alert('clicked right icon')}
/>
```

### Error states

There are 3 error states:

- error state = **true**, will show a **red** border around the input field
- error state = **false**, will show a **green** border around the input field
- error state = **null**, will show the by **default** border around the input field

```js
<AtomInput name="second" placeholder="Success input" errorState={false} />
```

### Input states

There are 3 error states:

- input state = **'error'**, will show a **red** border around the input field
- input state = **'success'**, will show a **green** border around the input field
- input state = **'alert'**, will show a **orange** border around the input field
- input state = **null**, will show the by **default** border around the input field

```js
<AtomInput name="second" placeholder="Success input" state="alert" />
```

### Form Usage

Each field returns its value on every onChange event so you can save it inside your form state.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Input from '@s-ui/react-atom-input'
import Button from '@s-ui/react-atom-button'

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
          onBlur={ev => this.onBlur({value: ev.target.value, field: 'email'})}
          errorState={this.state.email.errorState}
        />
        <Input
          type="sui-password"
          value={password.value}
          onChange={({ev, value}) => this.onChange({value, field: 'password', ev})}
        />
        <Button onClick={this.onSubmit}>Login</Button>
      </form>
    )
  }
}
```
