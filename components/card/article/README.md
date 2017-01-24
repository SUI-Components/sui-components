
# SUI Card Article

SUI `CardArticle` component is a card containing a media object, title, description and some editorial information (tag and comments).

## Installation
```
$ npm install --save @schibstedspain/sui-card-article
```

## Usage
```
import React, { Component } from 'react'
import CardArticle from '@schibstedspain/sui-card-article'

class MyComponent extends Component {
  render () {
    return (
      <div>
        <CardArticle
          link='http://my-site.com/article/1'
          media={{ src: 'http://my-cdn.com/article/1.jpg' }}
          tag={{
            url: 'http://my-site.com/tags/news',
            text: 'News'
          }}
          comments={{
            url: 'http://my-site.com/article/1/comments',
            count: 100
          }}
          title='My article card'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptatum minus nihil, eum perspiciatis?'
        />
      <div>
    )
  }
}
```
