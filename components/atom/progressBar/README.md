# AtomProgressBar

A Progress bar is a visual representation of a specified wait time or the current status of a process.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/progressBar/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,progressBar)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-label?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-progress-bar)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AprogressBar&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AprogressBar)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-progress-bar)](https://github.com/SUI-Components/sui-components/blob/main/components/progressBar/label/LICENSE.md)

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

### Line double bar

```javascript
<AtomProgressBar
  mainBarPercentage={25}
  extraBarPercentage={50}
  type="lineDoubleBar"
/>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/progressBar/demo).**
