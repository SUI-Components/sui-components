
### CardSubscription

SUI `CArdSubscription` component is a card with a title, an image, an input and a button.

By submitting the form, a handler is triggered via prop and receives the input value.
In case of `validationErrorMessage`, the component will render this message next to the form and will flag the input with class `has-error`. Otherwise `responseContent` will replace the component.

## Installation
```
$ npm install --save @schibstedspain/sui-card-subscription
```

## Usage
```js
import React, { Component } from 'react'
import CardSubscription from '@schibstedspain/sui-card-subscription'

const errorEmail = 'error@test.com'

const responseContent = () => (
    <p>Success message</p>
)
const validationErrorMessage = () => (
  <p>Error message</p>
)

class MyCardSubscription extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      responseContent: null,
      validationErrorMessage: null
    }
  }

  _handleSubmit = (value) => {
    if (value === errorEmail) {
      this.setState({
        validationErrorMessage: validationErrorMessage,
        responseContent: null
      })
    } else {
      this.setState({
        validationErrorMessage: null,
        responseContent: responseContent
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
        validationErrorMessage={this.state.validationErrorMessage}
        title={title}
      />
    )
  }
}

return (<MyCardSubscription />)
```
