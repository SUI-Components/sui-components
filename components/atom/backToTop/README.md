# AtomBackToTop

AtomBackToTop is a component that handles the scroll of a container and that it will be displayed only when needed

## Installation

```sh
$ npm install @s-ui/react-atom-back-to-top --save
```

## Usage

After importing the component `AtomBackToTop` like this

```javascript
import AtomBackToTop, {backToTopStyles} from '@s-ui/react-atom-back-to-top'
```

### Basic usage

```javascript
<div id="container">
  <p>Very looong text...</p>
  <AtomBackToTop
    iconTop={iconTop}
    textTop="TOP"
    refContainer="container"
  />
</div>
```

### Styles DARK (default) or LIGHT

```javascript
<div id="container">
  <p>Very looong text...</p>
  <AtomBackToTop
    iconTop={iconTop}
    textTop="TOP"
    refContainer="container"
    style={backToTopStyles.LIGHT}
  />
</div>
```

### Customizing minimum height when back to top button become visible → 1000px

```javascript
<div id="container">
  <p>Very looong text...</p>
  <AtomBackToTop
    iconTop={iconTop}
    textTop="TOP"
    refContainer="container"
    minHeight={1000}
  />
</div>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/backToTop/demo).**