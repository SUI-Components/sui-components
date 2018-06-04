
### CardSubscription

SUI `CardSubscription` component is a card with a title, an image, an input and a button.

By submitting the form, a handler is triggered via prop and receives the input value.
In case of `responseError`, the component will render the `responseContent` next to the form and will flag the input with class `has-error`. Otherwise `responseContent` will replace the component.

## Installation
```
$ npm install --save @schibstedspain/sui-card-subscription
```

## Usage
```js
import React, { Component } from 'react'
import CardSubscription from '@schibstedspain/sui-card-subscription'
const errorEmail = 'error@test.com'
const placeholder = 'Escribe tu email'
const title = 'Recibe todas las novedades'

const responseOk = () => (
  <p style={successStyles}>Hello! This is a success message</p>
)

const responseKo = () => (
  <p style={errorStyles}>This is an error message</p>
)



class MyCardSubscription extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      responseContent: null
    }
  }

  _handleSubmit = (value) => {
    this.setState({
      responseContent: value === errorEmail ? responseKo : responseOk,
      responseError: value === errorEmail
    })
  }

  render () {
    return (
      <div>
        <CardSubscription
          iconButton={ArrowRight}
          onSubmit={this._handleSubmit}
          placeholder={placeholder}
          responseContent={this.state.responseContent}
          responseError={this.state.responseError}
          title={title}
        />
      </div>
    )
  }
}

return (<MyCardSubscription />)
```
