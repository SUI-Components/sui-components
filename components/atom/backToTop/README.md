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

### Customizing Scroll to Top Animation → bigger steps

```javascript
<div id="container">
  <p>Very looong text...</p>
  <AtomBackToTop
    iconTop={iconTop}
    textTop="TOP"
    refContainer="container"
    scrollSteps={500}
  />
</div>
```

### Customizing Scroll to Top Animation → faster

```javascript
<div id="container">
  <p>Very looong text...</p>
  <AtomBackToTop
    iconTop={iconTop}
    textTop="TOP"
    refContainer="container"
    scrollIntervalTime={500}
  />
</div>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/backToTop/demo).**