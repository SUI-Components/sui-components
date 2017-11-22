# LayoutBreakpointSplit

> Show or hide views according to the breakpoint.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-layout-breakpoint-split --save
```

## Usage

### Basic usage
```js
import LayoutBreakpointSplit from '@schibstedspain/sui-layout-breakpoint-split'

setView(current) {
  this.setState({current})
}

const current = this.state && this.state.current || 0

return (<div>
<LayoutBreakpointSplit breakpoint={575} current={current}>
  <div>
    LEFT VIEW {current == 0 && '(active)'}
    <button onClick={this.setView.bind(this, 1)}>Next &gt;</button>
  </div>

  <div>
    RIGHT VIEW {current == 1 && '(active)'}
    <button onClick={this.setView.bind(this, 0)}>Prev &lt;</button>
  </div>
</LayoutBreakpointSplit>
</div>)
```
