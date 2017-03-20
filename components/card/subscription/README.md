
### CardSubscription

SUI `CArdSubscription` component is a card with a title, an image, an input and a button.

By submitting the form, a handler is triggered via prop and receives the input value.
Use `hasError` prop to flag the input with class `has-error`. It can be `true` or `false`.
In case of `hasError === true`, the component will render `responseContent`, next to the form. Otherwise `responseContent` will replace the form.

## Installation
```
$ npm install --save @schibstedspain/sui-card-subscription
```

## Usage
```js
import React, { Component } from 'react'
import CardSubscription from '@schibstedspain/sui-card-subscription'

const errorEmail = 'error@test.com'
const responseOk = () => (
  <p>Success message</p>
)
const responseKo = () => (
  <p>Error message</p>
)

class MyCardSubscription extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      responseContent: null,
      hasError: null
    }
  }

  _handleSubmit = (value) => {
    if (value === errorEmail) {
      this.setState({
        responseContent: responseKo,
        hasError: true
      })
    } else {
      this.setState({
        responseContent: responseOk,
        hasError: false
      })
    }
  }

  render () {
    return (
      <CardSubscription
        iconButton={ArrowRight}
        onSubmit={this._handleSubmit}
        placeholder={placeholder}
        responseContent={this.state.responseContent}
        hasError={this.state.hasError}
        title={title}
      />
    )
  }
}

return (<MyCardSubscription />)
```
