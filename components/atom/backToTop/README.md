# AtomBackToTop

AtomBackToTop is a component that handles the scroll of a container and that it will be displayed only when needed

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/backToTop/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,backToTop)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-back-to-top?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-back-to-top)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AbackToTop&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AbackToTop)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-back-to-top)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/backToTop/LICENSE.md)

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