# SUI Card Basic

SUI `CardBasic` component is a basic card containing a media object, an optional title and a description text.

## Installation
```
$ npm install --save @schibstedspain/sui-card-basic
```

## Usage
```
import React, { Component } from 'react'
import CardBasic from '@schibstedspain/sui-card-basic'

class MyComponent extends Component {
  render () {
    return (
      <div>
        <CardBasic
          link='http://my-site.com/'
          media={{ src: 'http://my-cdn.com/my-image.jpg' }}
          title='My basic card'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptatum minus nihil, eum perspiciatis?'
        />
        <CardBasic
          link='http://my-site.com/'
          media={{ src: 'http://my-cdn.com/my-small-image.jpg' }}
          size='small'
          title='My small basic card'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          lazyLoad={{ debounce: true, offsetVertical: 300 }}
        />
      <div>
    )
  }
}
```
