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

### Not native Inputs

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
