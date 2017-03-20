
### CardSubscription

SUI `CArdSubscription` component is a card with a title, an image, an input and a button.

By submitting the form, a handler is triggered via prop and receives the input value.
Use `status` prop to send the type of the response. It can be `success` or `fail`.
In case of `success`, the component will replace the form by the `responseContent`.
In case of `error`, the component will add `responseContent`, next to the form and a `has-error` class will be added to the input form.

## Installation
```
$ npm install --save @schibstedspain/sui-card-subscription
```

## Usage
```js
import React, { Component } from 'react'
import CardSubscription from '@schibstedspain/sui-card-subscription'

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
      status: null
    }
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit (value) {
    if (value === 'test@test.com') {
      this.setState({
        responseContent: responseKo,
        status: 'fail'
      })
    } else {
      this.setState({
        responseContent: responseOk,
        status: 'success'
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
        status={this.state.status}
        title={title}
      />
    )
  }
}

return (<MyCardSubscription />)
```
