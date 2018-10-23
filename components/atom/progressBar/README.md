# AtomProgressBar

A Progress bar is a visual representation of a specified wait time or the current status of a process.

## Installation

```sh
$ npm install @s-ui/react-atom-progress-bar --save
```

## Usage

After importing the component `AtomProgressBar` like this

```javascript
import AtomProgressBar from '@s-ui/react-atom-progress-bar'
```

### Basic usage

```javascript
<AtomProgressBar percentage={25} />
```

### Indicator text at Bottom

```javascript
<AtomProgressBar percentage={25} indicatorBottom />
```

### Indicator style (75/100)

```javascript
<AtomProgressBar percentage={25} indicatorTotal />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/progressBar/demo).**