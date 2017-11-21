# ResponsiveViews

> Show or hide views according to the breakpoint.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-responsive-views --save
```

## Usage

### Basic usage
```js
import ResponsiveViews from '@schibstedspain/sui-responsive-views'

setView(current) {
  this.setState({current})
}

const current = this.state && this.state.current || 0

return (<div>
<ResponsiveViews breakpoint={575} current={current}>
  <div>
    LEFT VIEW {current == 0 && '(active)'}
    <button onClick={this.setView.bind(this, 1)}>Next &gt;</button>
  </div>

  <div>
    RIGHT VIEW {current == 1 && '(active)'}
    <button onClick={this.setView.bind(this, 0)}>Prev &lt;</button>
  </div>
</ResponsiveViews>
</div>)
```


> **Find full description and more examples in the [demo page](#).**
