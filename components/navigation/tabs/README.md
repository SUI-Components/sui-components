
### NavigationTabs

SUI `NavigationTabs` component is a list of tabs.
By clicking on every single tab, a handler is triggered and receives an object with the item information.

## Installation
```
$ npm install --save @schibstedspain/sui-navigation-tabs
```

## Usage
```js
import React, { Component } from 'react'
import SpinnerBasic from '@schibstedspain/sui-navigation-tabs'

class MyComponent extends Component {
  _handleClick (tab) {
    // do stuff
  }
  render () {
    return (
      <NavigationTabs
        handleClick={this._handleClick}
        tabsList={tabs}
        activeTab={0}
      />
    )
  }
}
```
